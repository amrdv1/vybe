"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"
import Link from "next/link"

const THEMES = [
  { emoji: "🎤", label: "Реп" },
  { emoji: "🎵", label: "Поп" },
  { emoji: "🇯🇵", label: "Аніме" },
  { emoji: "🎬", label: "Саундтреки" },
  { emoji: "📀", label: "2000-і" },
  { emoji: "🇺🇦", label: "Українське" },
  { emoji: "🌊", label: "Літні хіти" },
  { emoji: "🇰🇷", label: "K-Pop" },
  { emoji: "🎸", label: "Рок" },
  { emoji: "🎧", label: "Електронна" },
  { emoji: "🌿", label: "Інді" },
  { emoji: "📱", label: "TikTok" },
  { emoji: "💜", label: "R&B" },
  { emoji: "💔", label: "Сумні" },
  { emoji: "🎮", label: "Ігрові OST" },
  { emoji: "🤘", label: "Метал" },
  { emoji: "⚡", label: "Фонк" },
  { emoji: "🧸", label: "Дитинство" },
  { emoji: "🌙", label: "Нічні" },
  { emoji: "🎲", label: "Вільний" },
]

export default function CreateBattlePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    title: "",
    theme: "",
    maxSongs: "16",
    songsPerPlayer: "2",
    allowSpotify: true,
    allowYouTube: true,
    allowAppleMusic: false,
    allowSoundCloud: false,
    requireLogin: false,
    allowGuests: true,
    votingMode: "COMMUNITY",
    revealSubmitter: true,
    autoAdvance: false,
  })

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const code = Math.random().toString(36).substring(2, 7).toUpperCase()
      toast.success("Батл створено")
      router.push(`/battle/${code}`)
    } catch {
      toast.error("Помилка")
    } finally {
      setLoading(false)
    }
  }

  const totalSteps = 3
  const progress = ((step + 1) / totalSteps) * 100

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="h-16 flex items-center gap-4 px-6 md:px-12 lg:px-20 border-b border-white/[0.06]">
        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div className="flex-1 flex items-center gap-3">
          <span className="text-sm font-medium">Новий батл</span>
          <span className="text-[11px] text-neutral-600">{step + 1}/{totalSteps}</span>
        </div>
        {/* Progress bar */}
        <div className="w-24 h-1 rounded-full bg-white/[0.06] overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <main className="flex-1 flex justify-center px-6 py-16 md:py-24">
        <div className="w-full max-w-lg">

          {/* ── Step 0: Basic ── */}
          {step === 0 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-3xl font-black tracking-tight mb-2">Назва та тема</h2>
              <p className="text-sm text-neutral-500 mb-10">Це побачать всі учасники батлу</p>

              <div className="space-y-8">
                <div className="space-y-2.5">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider">Назва батлу</Label>
                  <Input
                    placeholder="Найкращі хіти 2000-х"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="h-12 bg-white/[0.03] border-white/[0.08] rounded-xl text-white placeholder:text-neutral-600 focus:border-orange-500/50 focus:ring-orange-500/10 text-base"
                    autoFocus
                  />
                </div>

                <div className="space-y-2.5">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider">Тема</Label>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {THEMES.map(t => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => setFormData({ ...formData, theme: formData.theme === t.label ? "" : t.label })}
                        className={`relative flex flex-col items-center gap-1.5 py-4 rounded-xl border text-center transition-all ${
                          formData.theme === t.label
                            ? "border-orange-500/40 bg-orange-500/[0.06]"
                            : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02]"
                        }`}
                      >
                        {formData.theme === t.label && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-black" />
                          </div>
                        )}
                        <span className="text-xl">{t.emoji}</span>
                        <span className={`text-[11px] ${formData.theme === t.label ? "text-orange-300" : "text-neutral-500"}`}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 1: Settings ── */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-3xl font-black tracking-tight mb-2">Налаштування</h2>
              <p className="text-sm text-neutral-500 mb-10">Розмір сітки та джерела музики</p>

              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2.5">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider">Пісень</Label>
                    <Select value={formData.maxSongs} onValueChange={v => setFormData({ ...formData, maxSongs: v || "16" })}>
                      <SelectTrigger className="h-12 bg-white/[0.03] border-white/[0.08] rounded-xl focus:ring-1 focus:ring-orange-500/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl z-50 text-white shadow-xl shadow-black/50">
                        {[["4", "4"], ["8", "8"], ["16", "16"], ["32", "32"], ["64", "64"], ["128", "128"]].map(([v, l]) => (
                          <SelectItem key={v} value={v} className="focus:bg-white/[0.06] focus:text-white cursor-pointer rounded-lg">{l}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider">На учасника</Label>
                    <Select value={formData.songsPerPlayer} onValueChange={v => setFormData({ ...formData, songsPerPlayer: v || "2" })}>
                      <SelectTrigger className="h-12 bg-white/[0.03] border-white/[0.08] rounded-xl focus:ring-1 focus:ring-orange-500/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl z-50 text-white shadow-xl shadow-black/50">
                        {["1", "2", "3", "4", "5", "10"].map(v => (
                          <SelectItem key={v} value={v} className="focus:bg-white/[0.06] focus:text-white cursor-pointer rounded-lg">{v}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider mb-4 block">Джерела музики</Label>
                  <div className="rounded-xl border border-white/[0.06] divide-y divide-white/[0.04] overflow-hidden">
                    <SourceToggle name="Spotify" color="#1DB954" checked={formData.allowSpotify} onChange={c => setFormData({ ...formData, allowSpotify: c })} />
                    <SourceToggle name="YouTube" color="#FF0000" checked={formData.allowYouTube} onChange={c => setFormData({ ...formData, allowYouTube: c })} />
                    <SourceToggle name="Apple Music" color="#FA57C1" checked={formData.allowAppleMusic} onChange={c => setFormData({ ...formData, allowAppleMusic: c })} />
                    <SourceToggle name="SoundCloud" color="#FF5500" checked={formData.allowSoundCloud} onChange={c => setFormData({ ...formData, allowSoundCloud: c })} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 2: Access ── */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-3xl font-black tracking-tight mb-2">Доступ</h2>
              <p className="text-sm text-neutral-500 mb-10">Хто може голосувати та приєднуватися</p>

              <div className="space-y-8">
                <div className="space-y-2.5">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider">Голосування</Label>
                  <Select value={formData.votingMode} onValueChange={v => setFormData({ ...formData, votingMode: v || "COMMUNITY" })}>
                    <SelectTrigger className="h-12 bg-white/[0.03] border-white/[0.08] rounded-xl focus:ring-1 focus:ring-orange-500/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl z-50 text-white shadow-xl shadow-black/50">
                      <SelectItem value="COMMUNITY" className="focus:bg-white/[0.06] focus:text-white cursor-pointer rounded-lg">Голосування спільноти</SelectItem>
                      <SelectItem value="HOST_DECIDES" className="focus:bg-white/[0.06] focus:text-white cursor-pointer rounded-lg">Хост вирішує</SelectItem>
                      <SelectItem value="RANDOM" className="focus:bg-white/[0.06] focus:text-white cursor-pointer rounded-lg">Випадково</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-xl border border-white/[0.06] divide-y divide-white/[0.04] overflow-hidden">
                  <SettingRow label="Гостьовий режим" desc="Без реєстрації" checked={formData.allowGuests} onChange={c => setFormData({ ...formData, allowGuests: c })} />
                  <SettingRow label="Обов'язковий вхід" desc="Discord / Twitch" checked={formData.requireLogin} onChange={c => setFormData({ ...formData, requireLogin: c })} />
                  <SettingRow label="Показувати автора" checked={formData.revealSubmitter} onChange={c => setFormData({ ...formData, revealSubmitter: c })} />
                  <SettingRow label="Авто-перехід" desc="Наступний матч автоматично" checked={formData.autoAdvance} onChange={c => setFormData({ ...formData, autoAdvance: c })} />
                </div>
              </div>
            </div>
          )}

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-16">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Назад
            </button>

            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 0 && !formData.title}
                className="group flex items-center gap-2 text-sm font-medium bg-white/[0.06] hover:bg-white/[0.1] disabled:opacity-20 px-6 py-2.5 rounded-full transition-all"
              >
                Далі
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading || !formData.title}
                className="flex items-center gap-2 text-sm font-semibold bg-orange-500 hover:bg-orange-400 disabled:opacity-40 text-black px-8 py-3 rounded-full transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Створити батл
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function SourceToggle({ name, color, checked, onChange }: { name: string; color: string; checked: boolean; onChange: (c: boolean) => void }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.01] transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm text-white">{name}</span>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}

function SettingRow({ label, desc, checked, onChange }: { label: string; desc?: string; checked: boolean; onChange: (c: boolean) => void }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.01] transition-colors">
      <div>
        <span className="text-sm text-white">{label}</span>
        {desc && <span className="text-xs text-neutral-600 ml-2">{desc}</span>}
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
