"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { ArrowLeft, Loader2, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<"login" | "register">("login")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "", username: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (mode === "register") {
      // Password constraints
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
      if (!passwordRegex.test(form.password)) {
        toast.error("Пароль має містити мін. 8 символів, 1 велику літеру та 1 цифру")
        return
      }
    }

    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1000)) // TODO: replace with real API call
      toast.success(mode === "login" ? "Ви увійшли" : "Акаунт створено")
      router.push("/dashboard")
    } catch {
      toast.error("Помилка")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <nav className="h-16 flex items-center gap-4 px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <span className="text-lg font-bold text-orange-400">vybe</span>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-black tracking-tight mb-2">
            {mode === "login" ? "Увійти" : "Створити акаунт"}
          </h1>
          <p className="text-sm text-neutral-500 mb-10">
            {mode === "login" ? "Ласкаво просимо назад" : "Приєднуйся до музичних батлів"}
          </p>

          {/* OAuth */}
          <div className="space-y-2.5 mb-8">
            <OAuthButton icon="discord" label="Discord" color="#5865F2" />
            <OAuthButton icon="twitch" label="Twitch" color="#9146FF" />
            <OAuthButton icon="google" label="Google" color="#EA4335" />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[11px] text-neutral-600 uppercase tracking-wider">або</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2">
                <label className="text-xs text-neutral-400">Ім'я користувача</label>
                <Input
                  placeholder="username"
                  value={form.username}
                  onChange={e => setForm({ ...form, username: e.target.value })}
                  className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl placeholder:text-neutral-600 focus:border-orange-500/50"
                  required
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs text-neutral-400">Email</label>
              <Input
                type="email"
                placeholder="name@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl placeholder:text-neutral-600 focus:border-orange-500/50"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-neutral-400">Пароль</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="h-11 bg-white/[0.03] border-white/[0.08] rounded-xl placeholder:text-neutral-600 focus:border-orange-500/50 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {mode === "register" && (
                <p className="text-[10px] text-neutral-500 mt-1">Мін. 8 символів, 1 велика літера, 1 цифра.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 h-11 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold rounded-xl transition-colors disabled:opacity-50 mt-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {mode === "login" ? "Увійти" : "Зареєструватися"}
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-8">
            {mode === "login" ? "Немає акаунту?" : "Вже є акаунт?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-orange-400 hover:text-orange-300 font-medium"
            >
              {mode === "login" ? "Зареєструватися" : "Увійти"}
            </button>
          </p>

          {/* Guest */}
          <div className="mt-10 pt-8 border-t border-white/[0.04] text-center">
            <Link href="/join" className="text-sm text-neutral-500 hover:text-white transition-colors">
              Продовжити як гість →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function OAuthButton({ icon, label, color }: { icon: string; label: string; color: string }) {
  return (
    <button className="w-full flex items-center gap-3 h-11 px-4 rounded-xl border border-white/[0.08] hover:bg-white/[0.03] transition-colors text-sm">
      <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
        <span className="text-[10px] font-bold text-white">{label[0]}</span>
      </div>
      <span className="text-neutral-300">Продовжити з {label}</span>
    </button>
  )
}
