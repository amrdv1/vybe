"use client"

import { useEffect } from "react"

export function ColorProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Generate a random hue on each visit (0-360)
    const hue = Math.floor(Math.random() * 360)
    
    // We override Tailwind 4's default orange and amber CSS variables
    // so the entire site gets a new accent color dynamically.
    const root = document.documentElement
    
    // Base colors (replacing orange)
    root.style.setProperty("--color-orange-300", `oklch(0.8 0.15 ${hue})`)
    root.style.setProperty("--color-orange-400", `oklch(0.7 0.2 ${hue})`)
    root.style.setProperty("--color-orange-500", `oklch(0.65 0.2 ${hue})`)
    
    // Gradient accent (replacing amber) - slightly shifted hue
    root.style.setProperty("--color-amber-300", `oklch(0.85 0.15 ${hue + 30})`)
    root.style.setProperty("--color-amber-600", `oklch(0.55 0.2 ${hue})`)
    
  }, [])

  return <>{children}</>
}
