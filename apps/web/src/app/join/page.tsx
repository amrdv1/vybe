"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  const router = useRouter()
  const [code, setCode] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)

  const handleJoin = async () => {
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      toast.success("Приєднано до батлу!")
      router.push(`/battle/${code.toUpperCase()}`)
    } catch {
      toast.error("Батл не знайдено")
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
        <span className="text-sm font-medium">Приєднатися</span>
      </nav>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          {step === 0 ? (
            <>
              <h1 className="text-3xl font-black tracking-tight mb-2">Приєднатися до батлу</h1>
              <p className="text-sm text-neutral-500 mb-10">Введи код, який тобі надіслали</p>

              <Input
                placeholder="X7K9P"
                value={code}
                onChange={e => setCode(e.target.value.toUpperCase())}
                maxLength={6}
                className="h-14 bg-white/[0.03] border-white/[0.08] rounded-xl text-center text-2xl font-mono tracking-[0.3em] placeholder:text-neutral-700 focus:border-orange-500/50"
                autoFocus
              />

              <button
                onClick={() => code.length >= 4 && setStep(1)}
                disabled={code.length < 4}
                className="group w-full flex items-center justify-center gap-2 h-12 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold rounded-xl transition-colors disabled:opacity-30 mt-4"
              >
                Далі
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-xs text-neutral-600 mt-6">
                Або{" "}
                <Link href="/auth" className="text-orange-400 hover:text-orange-300">увійди</Link>
                {" "}щоб зберігати свої батли
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-black tracking-tight mb-2">Як тебе звати?</h1>
              <p className="text-sm text-neutral-500 mb-10">Це побачать інші учасники</p>

              <Input
                placeholder="Ім'я"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="h-12 bg-white/[0.03] border-white/[0.08] rounded-xl text-center placeholder:text-neutral-600 focus:border-orange-500/50"
                autoFocus
              />

              <button
                onClick={handleJoin}
                disabled={loading || !username}
                className="w-full flex items-center justify-center gap-2 h-12 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold rounded-xl transition-colors disabled:opacity-30 mt-4"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Приєднатися
              </button>

              <button onClick={() => setStep(0)} className="text-sm text-neutral-500 hover:text-white mt-4 transition-colors">
                ← Назад
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
