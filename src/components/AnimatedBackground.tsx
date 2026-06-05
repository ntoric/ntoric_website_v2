'use client'

import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute top-10 -left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-20 -right-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-blob-alt animation-delay-2000" />
      <div className="absolute -bottom-10 left-20 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl animate-blob-slow animation-delay-4000" />
    </div>
  )
}
