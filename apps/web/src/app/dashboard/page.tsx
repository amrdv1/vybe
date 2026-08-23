import Link from "next/link"
import { Plus, Clock, Trophy, Music2, Users, ArrowRight } from "lucide-react"

const MOCK_BATTLES = [
  { code: "XK3P9", title: "Найкращий реп 2024", theme: "Реп", songs: 16, players: 8, status: "LOBBY" as const, host: "Alex" },
  { code: "M8NQ2", title: "Аніме опенінги", theme: "Аніме", songs: 32, players: 15, status: "ROUND_ACTIVE" as const, host: "Yuki" },
  { code: "P4RW7", title: "Українська музика", theme: "Українське", songs: 8, players: 6, status: "FINISHED" as const, host: "Тарас" },
  { code: "LK5V1", title: "Саундтреки з фільмів", theme: "Саундтреки", songs: 16, players: 12, status: "LOBBY" as const, host: "Maria" },
  { code: "QW8T3", title: "Літні хіти 2025", theme: "Літні хіти", songs: 32, players: 24, status: "ROUND_ACTIVE" as const, host: "Danny" },
  { code: "VN2K6", title: "Best of 2000s", theme: "2000-і", songs: 64, players: 31, status: "FINISHED" as const, host: "Maks" },
]

export default function DashboardPage() {
  const live = MOCK_BATTLES.filter(b => b.status === "ROUND_ACTIVE")
  const lobby = MOCK_BATTLES.filter(b => b.status === "LOBBY")
  const finished = MOCK_BATTLES.filter(b => b.status === "FINISHED")

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
        <Link href="/" className="text-lg font-bold text-orange-400">vybe</Link>
        <div className="flex items-center gap-4">
          <Link href="/battles" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Всі батли</Link>
          <Link href="/profile" className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">A</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Мої батли</h1>
            <p className="text-sm text-neutral-500 mt-1">Керуй своїми музичними турнірами</p>
          </div>
          <Link href="/create">
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
              <Plus className="w-4 h-4" />
              Новий батл
            </button>
          </Link>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <StatCard label="Створено" value="6" icon={<Music2 className="w-4 h-4" />} />
          <StatCard label="Учасників" value="96" icon={<Users className="w-4 h-4" />} />
          <StatCard label="Пісень" value="168" icon={<Music2 className="w-4 h-4" />} />
          <StatCard label="Голосів" value="1.2K" icon={<Trophy className="w-4 h-4" />} />
        </div>

        {/* Live */}
        {live.length > 0 && (
          <Section title="Зараз активні" badge={`${live.length}`} badgeColor="green">
            {live.map(b => <BattleCard key={b.code} battle={b} />)}
          </Section>
        )}

        {/* Lobby */}
        {lobby.length > 0 && (
          <Section title="Очікують гравців">
            {lobby.map(b => <BattleCard key={b.code} battle={b} />)}
          </Section>
        )}

        {/* Finished */}
        {finished.length > 0 && (
          <Section title="Завершені">
            {finished.map(b => <BattleCard key={b.code} battle={b} />)}
          </Section>
        )}
      </main>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.06] p-4 hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center gap-2 text-neutral-500 mb-2">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-2xl font-bold">{value}</span>
    </div>
  )
}

function Section({ title, badge, badgeColor, children }: { title: string; badge?: string; badgeColor?: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-sm font-semibold text-neutral-300">{title}</h2>
        {badge && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            badgeColor === "green" ? "bg-green-500/10 text-green-400" : "bg-white/[0.06] text-neutral-400"
          }`}>{badge}</span>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {children}
      </div>
    </div>
  )
}

function BattleCard({ battle }: { battle: typeof MOCK_BATTLES[0] }) {
  const statusMap = {
    LOBBY: { label: "Лобі", color: "text-yellow-400 bg-yellow-500/10" },
    ROUND_ACTIVE: { label: "Активний", color: "text-green-400 bg-green-500/10" },
    FINISHED: { label: "Завершено", color: "text-neutral-400 bg-white/[0.06]" },
  }
  const s = statusMap[battle.status]

  return (
    <Link href={`/battle/${battle.code}`} className="group">
      <div className="rounded-xl border border-white/[0.06] p-5 hover:bg-white/[0.02] hover:border-white/[0.1] transition-all">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{battle.title}</h3>
            <p className="text-xs text-neutral-600 mt-0.5">від {battle.host} · {battle.theme}</p>
          </div>
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${s.color}`}>
            {battle.status === "ROUND_ACTIVE" && "● "}{s.label}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          <span className="flex items-center gap-1"><Music2 className="w-3 h-3" />{battle.songs} пісень</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" />{battle.players} гравців</span>
          <span className="flex items-center gap-1 font-mono text-neutral-600">{battle.code}</span>
        </div>
      </div>
    </Link>
  )
}
