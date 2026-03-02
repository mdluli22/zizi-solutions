'use client'
import { useEffect, useRef } from 'react'

type ColorScheme = 'blue-purple' | 'pink-red' | 'red-rainbow' | 'purple-pink'

interface ServiceParticleProps {
  colorScheme: ColorScheme
}

const schemes: Record<ColorScheme, { h1: number; h2: number; bg1: string; bg2: string }> = {
  'blue-purple': { h1: 200, h2: 280, bg1: '#1a0a2e', bg2: '#0a1a2e' },
  'pink-red': { h1: 15, h2: 45, bg1: '#2e0a0a', bg2: '#1a1000' },
  'red-rainbow': { h1: 0, h2: 60, bg1: '#1a0808', bg2: '#1a1000' },
  'purple-pink': { h1: 250, h2: 200, bg1: '#0f0820', bg2: '#050a1a' },
}

export default function ServiceParticle({ colorScheme }: ServiceParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0
    const scheme = schemes[colorScheme]

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const ROWS = 40
    const COLS = 40

    function hslToRgb(h: number, s: number, l: number) {
      s /= 100; l /= 100
      const k = (n: number) => (n + h / 30) % 12
      const a = s * Math.min(l, 1 - l)
      const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
      return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      
      const R = Math.min(canvas!.width, canvas!.height) * 0.55
      const cx = canvas!.width * 0.45
      const cy = canvas!.height * 0.65
      t += 0.012

      for (let i = 0; i <= ROWS; i++) {
        const phi = (i / ROWS) * Math.PI
        for (let j = 0; j <= COLS; j++) {
          const theta = (j / COLS) * 2 * Math.PI + t * 0.25

          const wave = Math.sin(phi * 3 + t * 1.8) * 0.18 + Math.cos(theta * 2 + t * 0.7) * 0.12
          const r = R * (1 + wave)

          const x3 = r * Math.sin(phi) * Math.cos(theta)
          const y3 = r * Math.cos(phi)
          const z3 = r * Math.sin(phi) * Math.sin(theta)

          const rotX = 0.2
          const y2 = y3 * Math.cos(rotX) - z3 * Math.sin(rotX)
          const z2 = y3 * Math.sin(rotX) + z3 * Math.cos(rotX)

          if (z2 < -R * 0.1) continue

          const px = cx + x3
          const py = cy + y2

          const progress = i / ROWS
          const hue = scheme.h1 + (scheme.h2 - scheme.h1) * progress + Math.sin(theta + t) * 20
          const [rr, gg, bb] = hslToRgb(hue % 360, 90, 55 + z2 / R * 20)
          const alpha = 0.5 + z2 / R * 0.5
          const dotSize = 1.2 + z2 / R * 2

          ctx!.beginPath()
          ctx!.arc(px, py, Math.max(0.4, dotSize), 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(${rr},${gg},${bb},${Math.max(0.1, alpha)})`
          ctx!.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
    }
  }, [colorScheme])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
