'use client'

import { useRef, useEffect } from 'react'

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = ref.current
    const glow = glowRef.current
    if (!el || !glow) return

    let raf: number

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const inX = e.clientX >= rect.left && e.clientX <= rect.right
      const inY = e.clientY >= rect.top && e.clientY <= rect.bottom

      if (inX && inY) {
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 100
        mouse.current.y = ((e.clientY - rect.top) / rect.height) * 100
        glow.style.opacity = '1'
      } else {
        glow.style.opacity = '0'
      }
    }

    const tick = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.08
      current.current.y += (mouse.current.y - current.current.y) * 0.08
      glow.style.left = `${current.current.x}%`
      glow.style.top = `${current.current.y}%`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient floating blobs */}
      <div className="absolute top-10 -left-10 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-32 -right-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-blob-alt animation-delay-2000" />
      <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-emerald-400/25 rounded-full blur-3xl animate-blob-slow animation-delay-4000" />

      {/* Mouse-following teal-cyan glow */}
      <div
        ref={glowRef}
        className="absolute w-[32rem] h-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-0"
        style={{
          left: '50%',
          top: '50%',
          background:
            'radial-gradient(circle at center, rgba(20,184,166,0.3) 0%, rgba(6,182,212,0.25) 40%, rgba(16,185,129,0.15) 65%, transparent 80%)',
        }}
      />
    </div>
  )
}
