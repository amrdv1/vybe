import Link from "next/link"
import { ArrowRight, Music2, Swords, Trophy, Users, Zap, Globe, Monitor, MessageCircle, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-orange-500/20">
      {/* ── Nav ── */}
      <nav className="h-16 flex items-center justify-between px-6 md:px-12 lg:px-20 border-b border-white/[0.06] relative z-20">
        <Link href="/" className="text-lg font-bold tracking-tight text-orange-400">vybe</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/battles" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Батли</Link>
          <Link href="/profile" className="text-[13px] text-neutral-500 hover:text-white transition-colors">Профіль</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/auth" className="text-[13px] text-neutral-500 hover:text-white transition-colors">
            Увійти
          </Link>
          <Link href="/create">
            <button className="text-[13px] font-medium bg-orange-500 hover:bg-orange-400 text-black px-5 py-2 rounded-full transition-colors">
              Створити батл
            </button>
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden min-h-[calc(100vh-4rem)]">
        {/* Warm radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
        
        {/* Bracket decoration — left */}
        <div className="hidden lg:flex absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 flex-col gap-3 opacity-[0.12]">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-32 h-10 rounded-lg border border-white/20 flex items-center px-3 gap-2">
                <div className="w-5 h-5 rounded bg-white/10" />
                <div className="w-16 h-2 rounded bg-white/10" />
              </div>
              {i % 2 === 0 && <div className="w-8 h-px bg-white/20" />}
            </div>
          ))}
        </div>

        {/* Bracket decoration — right */}
        <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-3 opacity-[0.12]">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-2">
              {i % 2 === 1 && <div className="w-8 h-px bg-white/20" />}
              <div className="w-32 h-10 rounded-lg border border-white/20 flex items-center px-3 gap-2">
                <div className="w-5 h-5 rounded bg-white/10" />
                <div className="w-16 h-2 rounded bg-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-10 border border-white/[0.06] rounded-full px-4 py-2 hover:bg-white/[0.02] transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Музичні батли в реальному часі
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.035em] leading-[0.85] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
            Обери
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">найкращу</span>
            <br />
            пісню
          </h1>

          <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
            Створи турнір, запроси друзів, надсилай пісні та голосуй у реальному часі
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
            <Link href="/create">
              <button className="group flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]">
                Створити батл
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/join">
              <button className="text-sm text-neutral-400 hover:text-white px-8 py-3.5 rounded-full border border-white/[0.08] hover:border-white/[0.16] transition-all hover:bg-white/[0.03]">
                Приєднатися за кодом
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-24 md:py-32">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-16 text-center">Як це працює</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            <StepCard icon={<Music2 className="w-5 h-5" />} step="01" title="Надсилай пісні" desc="Учасники додають треки з Spotify, YouTube або Apple Music до лобі" />
            <StepCard icon={<Swords className="w-5 h-5" />} step="02" title="Голосуй 1v1" desc="Дві пісні зустрічаються — слухай обидві та обирай переможця" />
            <StepCard icon={<Trophy className="w-5 h-5" />} step="03" title="Визнач переможця" desc="Раунд за раундом, поки не залишиться найкраща пісня" />
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4">Можливості</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Все для ідеального <span className="text-orange-400">батлу</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <FeatureCard icon={<Zap className="w-5 h-5" />} title="Живе голосування" desc="Голоси оновлюються миттєво. Бачи результати в реальному часі через WebSocket." />
            <FeatureCard icon={<Users className="w-5 h-5" />} title="Мультиплеєр" desc="Запроси друзів за посиланням або QR-кодом. Гостьовий режим без реєстрації." />
            <FeatureCard icon={<Globe className="w-5 h-5" />} title="Музика звідусіль" desc="Spotify, YouTube, Apple Music, SoundCloud — одна платформа для всіх джерел." />
            <FeatureCard icon={<Swords className="w-5 h-5" />} title="Турнірна сітка" desc="Від 4 до 128 пісень. Автоматична генерація з підтримкою BYE-раундів." />
            <FeatureCard icon={<Monitor className="w-5 h-5" />} title="Стрім-режим" desc="OBS оверлей для Twitch та YouTube. Fullscreen режим для трансляцій." />
            <FeatureCard icon={<MessageCircle className="w-5 h-5" />} title="Twitch чат" desc="Голосування прямо через чат Twitch. Інтеграція з Twitch Polls." />
            <FeatureCard icon={<Shield className="w-5 h-5" />} title="Анти-чіт" desc="Один голос на матч. Серверна валідація. Захист від спаму." />
            <FeatureCard icon={<Trophy className="w-5 h-5" />} title="Лідерборд" desc="Глобальний рейтинг пісень та користувачів. Топ батли тижня." />
            <FeatureCard icon={<Music2 className="w-5 h-5" />} title="30+ тематик" desc="Реп, аніме, K-Pop, рок, електронна музика, саундтреки та багато іншого." />
          </div>
        </div>
      </section>

      {/* ── Popular themes ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-24 md:py-32">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4">Тематики</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Обирай свою <span className="text-orange-400">тему</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "🎤 Реп", "🎵 Поп", "🇯🇵 Аніме опенінги", "🎬 Саундтреки", "📀 2000-і",
              "🇺🇦 Українська музика", "🌊 Літні хіти", "🇰🇷 K-Pop", "🎸 Рок",
              "🎧 Електронна", "🌿 Інді", "📱 TikTok хіти", "💜 R&B",
              "🎹 Класика", "🎻 Lo-Fi", "🔥 Хіпхоп", "💔 Сумні пісні",
              "🎄 Новорічні", "🏖️ Чілл", "🎮 Ігрові OST", "🎺 Джаз",
              "🤘 Метал", "🪩 Диско", "🎶 Кавери", "⚡ Фонк",
              "🌙 Нічні вайби", "🎊 Пати міксе", "🧸 Дитинство",
              "🌍 Світова музика", "🎼 Інструментали"
            ].map(t => (
              <span key={t} className="text-sm px-4 py-2 rounded-full border border-white/[0.06] text-neutral-400 hover:text-white hover:border-white/[0.12] hover:bg-white/[0.03] transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── For streamers ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-4">Для стрімерів</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                Ідеальний контент для трансляцій
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Запусти музичний батл прямо на стрімі. Глядачі голосують через чат або Twitch Polls. Спеціальний OBS оверлей показує рахунок у реальному часі.
              </p>
              <div className="space-y-3">
                <CheckItem text="OBS Browser Source оверлей" />
                <CheckItem text="Голосування через чат Twitch" />
                <CheckItem text="Twitch Polls інтеграція" />
                <CheckItem text="Fullscreen стрім-режим 1920×1080" />
                <CheckItem text="Discord бот для оголошень" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 aspect-video flex flex-col items-center justify-center text-center">
              <Monitor className="w-12 h-12 text-orange-400/40 mb-4" />
              <p className="text-sm text-neutral-500">Стрім-режим</p>
              <p className="text-[11px] text-neutral-700 mt-1">1920 × 1080</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-black text-orange-400">∞</p>
              <p className="text-xs text-neutral-500 mt-2">Батлів</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">1v1</p>
              <p className="text-xs text-neutral-500 mt-2">Формат</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">5+</p>
              <p className="text-xs text-neutral-500 mt-2">Джерел музики</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black">RT</p>
              <p className="text-xs text-neutral-500 mt-2">Реальний час</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative border-t border-white/[0.06] px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto py-24 md:py-32 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Готовий до <span className="text-orange-400">батлу</span>?
          </h2>
          <p className="text-neutral-500 mb-10 max-w-sm mx-auto">
            Створи турнір за 30 секунд. Безкоштовно, без обмежень.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/create">
              <button className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black text-sm font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]">
                Створити батл
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/auth">
              <button className="text-sm text-neutral-400 hover:text-white px-8 py-3.5 rounded-full border border-white/[0.08] hover:border-white/[0.16] transition-all">
                Увійти
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <p className="text-sm font-semibold mb-4">Продукт</p>
              <div className="space-y-2 text-sm text-neutral-500">
                <Link href="/create" className="block hover:text-white transition-colors">Створити батл</Link>
                <Link href="/join" className="block hover:text-white transition-colors">Приєднатися</Link>
                <Link href="/battles" className="block hover:text-white transition-colors">Всі батли</Link>
                <Link href="/dashboard" className="block hover:text-white transition-colors">Дашборд</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Спільнота</p>
              <div className="space-y-2 text-sm text-neutral-500">
                <Link href="#" className="block hover:text-white transition-colors">Discord</Link>
                <Link href="#" className="block hover:text-white transition-colors">Twitch</Link>
                <Link href="#" className="block hover:text-white transition-colors">Twitter</Link>
                <Link href="#" className="block hover:text-white transition-colors">Telegram</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Ресурси</p>
              <div className="space-y-2 text-sm text-neutral-500">
                <Link href="#" className="block hover:text-white transition-colors">FAQ</Link>
                <Link href="#" className="block hover:text-white transition-colors">API</Link>
                <Link href="#" className="block hover:text-white transition-colors">Для стрімерів</Link>
                <Link href="#" className="block hover:text-white transition-colors">Зворотній зв'язок</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Правове</p>
              <div className="space-y-2 text-sm text-neutral-500">
                <Link href="#" className="block hover:text-white transition-colors">Конфіденційність</Link>
                <Link href="#" className="block hover:text-white transition-colors">Умови</Link>
                <Link href="#" className="block hover:text-white transition-colors">Авторські права</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-white/[0.04]">
            <span className="text-[11px] text-neutral-600">© {new Date().getFullYear()} vybe</span>
            <span className="text-[11px] text-neutral-700">не афілійовано зі Spotify, YouTube чи Apple Music</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StepCard({ icon, step, title, desc }: { icon: React.ReactNode; step: string; title: string; desc: string }) {
  return (
    <div className="bg-[#0a0a0a] p-8 md:p-10 group hover:bg-[#0f0f0f] transition-colors">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">{icon}</div>
        <span className="text-[11px] font-mono text-orange-400/60">{step}</span>
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group rounded-xl border border-white/[0.06] p-6 hover:bg-white/[0.02] hover:border-white/[0.1] transition-all">
      <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-neutral-400 group-hover:text-orange-400 transition-colors mb-4">{icon}</div>
      <h3 className="font-semibold mb-1.5">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
        <span className="text-orange-400 text-xs">✓</span>
      </div>
      <span className="text-neutral-300">{text}</span>
    </div>
  )
}
