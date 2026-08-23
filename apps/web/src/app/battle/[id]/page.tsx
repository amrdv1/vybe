import { notFound } from "next/navigation"
import Link from "next/link"
import { Users, Music, Copy, Share, ArrowRight, Play, Settings } from "lucide-react"

export default async function BattleLobbyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const { id } = resolvedParams
  
  if (!id) {
    notFound()
  }

  // Mock battle data for now
  const battle = {
    id,
    title: "Аніме опенінги",
    theme: "Аніме",
    hostName: "HostUser",
    maxSongs: 32,
    participants: 12,
    status: "WAITING", // WAITING, IN_PROGRESS, FINISHED
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--color-orange-500)]/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-[var(--color-orange-400)]/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-6 max-w-5xl mx-auto w-full pt-16">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <Link href="/dashboard" className="text-2xl font-black tracking-tighter">
            vy<span className="text-[var(--color-orange-400)]">be</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-lg font-bold tracking-widest text-[var(--color-orange-400)]">
              {id}
            </div>
            <button className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          {/* Left Column - Details */}
          <div className="space-y-8">
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Очікування гравців
              </div>
              <h1 className="text-5xl font-black tracking-tight leading-tight">
                {battle.title}
              </h1>
              <p className="text-xl text-neutral-400 font-medium">
                Тематика: <span className="text-white">{battle.theme}</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center gap-3 text-neutral-400 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Учасники</span>
                </div>
                <div className="text-3xl font-black">
                  {battle.participants} <span className="text-lg text-neutral-500 font-medium">/ ∞</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex items-center gap-3 text-neutral-400 mb-2">
                  <Music className="w-5 h-5" />
                  <span className="font-medium">Пісні</span>
                </div>
                <div className="text-3xl font-black">
                  0 <span className="text-lg text-neutral-500 font-medium">/ {battle.maxSongs}</span>
                </div>
              </div>
            </div>

            {/* Wait Message */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col items-center justify-center text-center min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Додай свої треки</h3>
              <p className="text-neutral-400 max-w-md mx-auto mb-8">
                Поки ми чекаємо інших гравців, ти можеш запропонувати пісні для цього турніру.
              </p>
              <button className="px-8 h-12 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                Додати пісні <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Host Panel (Visible if Host) */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 delay-300">
            <div className="p-6 rounded-2xl bg-[var(--color-orange-500)]/10 border border-[var(--color-orange-500)]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Settings className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1">Панель Хоста</h3>
                <p className="text-sm text-[var(--color-orange-100)]/70 mb-6">
                  Ти є творцем цього батлу. Запускай, коли всі будуть готові.
                </p>
                <button className="w-full h-14 rounded-xl bg-[var(--color-orange-500)] text-white font-black text-lg hover:bg-[var(--color-orange-600)] transition-colors flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(var(--color-orange-500),0.3)]">
                  <Play className="w-5 h-5 fill-current" /> Почати турнір
                </button>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="font-bold mb-4">Учасники (12)</h3>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">Учасник {i}</div>
                      <div className="text-xs text-neutral-500">Готовий</div>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-2 text-sm text-neutral-500 font-medium">
                  + ще 7 учасників
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
