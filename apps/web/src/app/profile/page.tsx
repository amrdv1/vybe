import Link from "next/link"
import { Settings, Trophy, Music2, Users, Clock, ArrowRight } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
        <Link href="/" className="text-lg font-bold text-orange-400">vybe</Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Мої батли</Link>
          <Link href="/settings">
            <Settings className="w-4 h-4 text-neutral-500 hover:text-white transition-colors" />
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        {/* Avatar & info */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-3xl font-black text-black">
            A
          </div>
          <div>
            <h1 className="text-2xl font-black">Alex</h1>
            <p className="text-sm text-neutral-500">@alex · учасник з серпня 2026</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <ProfileStat icon={<Music2 className="w-4 h-4" />} label="Батлів" value="12" />
          <ProfileStat icon={<Trophy className="w-4 h-4" />} label="Перемог" value="4" />
          <ProfileStat icon={<Users className="w-4 h-4" />} label="Пісень" value="38" />
          <ProfileStat icon={<Clock className="w-4 h-4" />} label="Голосів" value="256" />
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-neutral-400 mb-4">Досягнення</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Achievement emoji="🏆" title="Перша перемога" desc="Пісня виграла батл" unlocked />
            <Achievement emoji="🎵" title="Меломан" desc="Надіслано 10+ пісень" unlocked />
            <Achievement emoji="👑" title="Хост" desc="Створено 5+ батлів" unlocked />
            <Achievement emoji="🗳️" title="Активіст" desc="100+ голосів" unlocked />
            <Achievement emoji="🔥" title="Серія" desc="3 перемоги поспіль" />
            <Achievement emoji="🌍" title="Глобал" desc="Топ-10 у лідерборді" />
          </div>
        </div>

        {/* Recent */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-neutral-400">Останні батли</h2>
            <Link href="/dashboard" className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1">
              Всі <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-2">
            <RecentBattle title="Найкращий реп 2024" result="🏆 Переможець" song="Kendrick — Not Like Us" />
            <RecentBattle title="Аніме опенінги" result="Топ 4" song="Unravel — TK" />
            <RecentBattle title="Літні хіти 2025" result="Раунд 2" song="Dua Lipa — Levitating" />
          </div>
        </div>
      </main>
    </div>
  )
}

function ProfileStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] p-4">
      <div className="flex items-center gap-2 text-neutral-500 mb-2">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  )
}

function Achievement({ emoji, title, desc, unlocked }: { emoji: string; title: string; desc: string; unlocked?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 transition-colors ${
      unlocked ? "border-white/[0.06] hover:bg-white/[0.02]" : "border-white/[0.04] opacity-40"
    }`}>
      <span className="text-2xl mb-2 block">{emoji}</span>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-[11px] text-neutral-500">{desc}</p>
    </div>
  )
}

function RecentBattle({ title, result, song }: { title: string; result: string; song: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/[0.06] px-5 py-4 hover:bg-white/[0.02] transition-colors">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-neutral-500 mt-0.5">{song}</p>
      </div>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
        result.includes("Переможець") ? "bg-orange-500/10 text-orange-400" : "bg-white/[0.04] text-neutral-400"
      }`}>{result}</span>
    </div>
  )
}
