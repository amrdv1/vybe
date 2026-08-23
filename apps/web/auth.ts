import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import Twitch from "next-auth/providers/twitch"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Guest",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Guest" }
      },
      async authorize(credentials, req) {
        // Implement guest session creation or return a dummy guest user
        if (credentials?.username) {
          const user = await prisma.user.create({
            data: {
               username: credentials.username as string + '_' + Math.random().toString(36).substring(7),
               displayName: credentials.username as string,
            }
          })
          return user
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        // Handle guest flag if needed
      }
      return token
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id as string
      }
      return session
    }
  }
})
