'use client'
import { useEffect, useRef } from 'react'

export default function ParticleOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle system for the orb
    const ROWS = 60
    const COLS = 60
    const R = Math.min(canvas.width, canvas.height) * 0.42

    function hslToRgb(h: number, s: number, l: number) {
      s /= 100; l /= 100
      const k = (n: number) => (n + h / 30) % 12
      const a = s * Math.min(l, 1 - l)
      const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
      return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      
      const cx = canvas!.width / 2
      const cy = canvas!.height / 2

      t += 0.008

      // Draw particles on sphere surface
      for (let i = 0; i <= ROWS; i++) {
        const phi = (i / ROWS) * Math.PI // 0 to PI (latitude)
        
        for (let j = 0; j <= COLS; j++) {
          const theta = (j / COLS) * 2 * Math.PI + t * 0.3 // longitude + rotation

          // Add wave deformation
          const wave = Math.sin(phi * 3 + t * 1.5) * 0.12 + Math.cos(theta * 2 + t) * 0.1
          const r = R * (1 + wave)

          // 3D to 2D projection (simple orthographic with slight perspective tilt)
          const x3 = r * Math.sin(phi) * Math.cos(theta)
          const y3 = r * Math.cos(phi)
          const z3 = r * Math.sin(phi) * Math.sin(theta)

          // Rotate slightly on X axis
          const rotX = 0.3
          const y2 = y3 * Math.cos(rotX) - z3 * Math.sin(rotX)
          const z2 = y3 * Math.sin(rotX) + z3 * Math.cos(rotX)

          const perspective = 1 + z2 / (R * 3)
          const px = cx + x3 * perspective
          const py = cy + y2 * perspective

          // Only draw front-facing particles
          if (z2 < 0) continue

          // Color based on position + time
          const hue = ((phi / Math.PI) * 280 + (theta / (2 * Math.PI)) * 120 + t * 20) % 360
          const saturation = 90
          const lightness = 55 + z2 / R * 20
          const [rr, gg, bb] = hslToRgb(hue, saturation, lightness)

          // Size based on depth
          const dotSize = (1.5 + z2 / R * 2.5) * perspective
          const alpha = 0.6 + z2 / R * 0.4

          ctx!.beginPath()
          ctx!.arc(px, py, Math.max(0.5, dotSize), 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(${rr},${gg},${bb},${alpha})`
          ctx!.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
