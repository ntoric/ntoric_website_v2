'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1200)
    const t2 = setTimeout(() => setVisible(false), 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out',
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Ntoric"
          width={64}
          height={64}
          className="animate-bounce h-16 w-auto"
          priority
        />
      </div>
      <div className="mt-6 text-xl font-bold tracking-tight animate-pulse" style={{ color: 'lab(40 -28.07 -22.07)' }}>
        ntoric
      </div>
      <div className="mt-4 flex gap-1.5">
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  )
}
