'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-18 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Ntoric"
                width={32}
                height={32}
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="text-xl font-bold tracking-tight" style={{ color: 'lab(40 -28.07 -22.07)' }}>
                ntoric
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center bg-muted/50 border border-border/60 rounded-full p-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full shadow-lg shadow-teal-500/20" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </div>


            {/* Mobile Menu Button */}
            <button
              className={cn(
                'md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-300',
                isOpen
                  ? 'bg-primary text-primary-foreground rotate-90'
                  : 'bg-muted/60 hover:bg-muted'
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-500',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={cn(
            'absolute top-[4.5rem] left-3 right-3 bg-background/95 backdrop-blur-xl border rounded-3xl shadow-2xl overflow-hidden transition-all duration-500',
            isOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          )}
        >
          <div className="p-2">
            {navLinks.map((link, i) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center justify-between mx-1 my-1 px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/20'
                      : 'text-foreground hover:bg-muted/80'
                  )}
                  style={{
                    transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                  }}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
