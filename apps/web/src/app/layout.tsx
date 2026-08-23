import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { ColorProvider } from "@/components/color-provider";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "VYBE — Музичні батли в реальному часі",
  description: "Перетвори свій плейлист на живий турнір. Надсилай пісні, голосуй у реальному часі та визнач найкращий трек разом зі своєю спільнотою.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="dark">
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen bg-[#0a0a0a]`}>
        <ColorProvider>
          <Providers>
            {children}
          </Providers>
        </ColorProvider>
      </body>
    </html>
  );
}

