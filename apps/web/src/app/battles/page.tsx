import Link from "next/link"
import { Music2, Users, Search, Filter } from "lucide-react"

const ALL_BATTLES = [
  { code: "XK3P9", title: "Найкращий реп 2024", theme: "🎤 Реп", songs: 16, players: 8, status: "LOBBY" as const, host: "Alex" },
  { code: "M8NQ2", title: "Аніме опенінги ТОП", theme: "🇯🇵 Аніме", songs: 32, players: 15, status: "ROUND_ACTIVE" as const, host: "Yuki" },
  { code: "P4RW7", title: "Українська музика", theme: "🇺🇦 Українське", songs: 8, players: 6, status: "FINISHED" as const, host: "Тарас" },
  { code: "LK5V1", title: "Легендарні саундтреки", theme: "🎬 Саундтреки", songs: 16, players: 12, status: "LOBBY" as const, host: "Maria" },
  { code: "QW8T3", title: "Літні хіти 2025", theme: "🌊 Літні хіти", songs: 32, players: 24, status: "ROUND_ACTIVE" as const, host: "Danny" },
  { code: "VN2K6", title: "Best of 2000s", theme: "📀 2000-і", songs: 64, players: 31, status: "FINISHED" as const, host: "Maks" },
  { code: "HJ4M8", title: "K-Pop Showdown", theme: "🇰🇷 K-Pop", songs: 16, players: 10, status: "ROUND_ACTIVE" as const, host: "Sofi" },
  { code: "RT6B2", title: "Електронна музика", theme: "🎧 Електронна", songs: 32, players: 18, status: "LOBBY" as const, host: "DJ Wave" },
  { code: "WX9L5", title: "Рок класика", theme: "🎸 Рок", songs: 16, players: 9, status: "FINISHED" as const, host: "Igor" },
  { code: "ZP1N7", title: "Indie & Alt", theme: "🌿 Інді", songs: 8, players: 5, status: "LOBBY" as const, host: "Luna" },
  { code: "BK3Q4", title: "Хіти TikTok", theme: "📱 TikTok", songs: 32, players: 28, status: "ROUND_ACTIVE" as const, host: "Vlad" },
  { code: "GF7W9", title: "R&B Vibes", theme: "💜 R&B", songs: 16, players: 7, status: "LOBBY" as const, host: "Nia" },
]

export default function BattlesPage() {
  const live = ALL_BATTLES.filter(b => b.status === "ROUND_ACTIVE")
  const open = ALL_BATTLES.filter(b => b.status === "LOBBY")
  const finished = ALL_BATTLES.filter(b => b.status === "FINISHED")

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
        <Link href="/" className="text-lg font-bold text-orange-400">vybe</Link>
        <div className="flex items-center gap-4">
          <Link href="/create" className="text-[13px] bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 rounded-full font-medium transition-colors">
            Створити
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Батли</h1>
            <p className="text-sm text-neutral-500 mt-1">Знайди батл або створи свій</p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 h-9 px-3 rounded-lg border border-white/[0.06] text-neutral-500">
              <Search className="w-3.5 h-3.5" />
              <input placeholder="Пошук..." className="bg-transparent text-sm outline-none w-40 placeholder:text-neutral-600" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mb-8 border-b border-white/[0.04] pb-px">
          <Tab label="Всі" count={ALL_BATTLES.length} active />
          <Tab label="Активні" count={live.length} dot="green" />
          <Tab label="Лобі" count={open.length} />
          <Tab label="Завершені" count={finished.length} />
        </div>

        {/* Live */}
        {live.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-sm font-semibold text-green-400">Зараз грають</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {live.map(b => <BattleDiscoverCard key={b.code} battle={b} />)}
            </div>
          </div>
        )}

        {/* Lobby */}
        {open.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-neutral-400 mb-4">Очікують гравців</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {open.map(b => <BattleDiscoverCard key={b.code} battle={b} />)}
            </div>
          </div>
        )}

        {/* Finished */}
        {finished.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-neutral-400 mb-4">Завершені</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {finished.map(b => <BattleDiscoverCard key={b.code} battle={b} />)}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function Tab({ label, count, active, dot }: { label: string; count: number; active?: boolean; dot?: string }) {
  return (
    <button className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
      active ? "border-orange-500 text-white" : "border-transparent text-neutral-500 hover:text-neutral-300"
    }`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dot === "green" ? "bg-green-500" : "bg-neutral-500"}`} />}
      {label}
      <span className="text-[10px] text-neutral-600">{count}</span>
    </button>
  )
}

function BattleDiscoverCard({ battle }: { battle: typeof ALL_BATTLES[0] }) {
  const isLive = battle.status === "ROUND_ACTIVE"
  return (
    <Link href={`/battle/${battle.code}`}>
      <div className={`group rounded-xl border p-5 transition-all hover:border-white/[0.12] ${
        isLive ? "border-green-500/20 bg-green-500/[0.02]" : "border-white/[0.06] hover:bg-white/[0.02]"
      }`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">{battle.theme.split(" ")[0]}</span>
          <span className="text-xs text-neutral-600">{battle.theme.split(" ").slice(1).join(" ")}</span>
          {isLive && (
            <span className="ml-auto text-[10px] font-semibold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">● LIVE</span>
          )}
        </div>
        <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors mb-1">{battle.title}</h3>
        <p className="text-xs text-neutral-600 mb-3">від {battle.host}</p>
        <div className="flex items-center gap-3 text-[11px] text-neutral-500">
          <span className="flex items-center gap-1"><Music2 className="w-3 h-3" />{battle.songs}</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" />{battle.players}</span>
          <span className="ml-auto font-mono text-neutral-700">{battle.code}</span>
        </div>
      </div>
    </Link>
  )
}
