import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Utensils, Receipt, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Ready-to-deploy SaaS products for Indian businesses. Ntoric Commerce, Ntoric Restaurant, and Ntoric Billing — built for real operations.',
  keywords: [
    'SaaS products India',
    'e-commerce platform',
    'restaurant management software',
    'billing software',
    'GST billing software',
    'business software India',
    'ntoric commerce',
    'ntoric restaurant',
    'ntoric billing',
  ],
  openGraph: {
    title: 'Products — Ready-to-Deploy Business Software',
    description: 'Ready-to-deploy SaaS products for Indian businesses. Ntoric Commerce, Ntoric Restaurant, and Ntoric Billing — built for real operations.',
    url: 'https://ntoric.com/products',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Ready-to-Deploy Business Software',
    description: 'Ready-to-deploy SaaS products for Indian businesses. Ntoric Commerce, Ntoric Restaurant, and Ntoric Billing — built for real operations.',
  },
  alternates: {
    canonical: 'https://ntoric.com/products',
  },
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <ScrollReveal>
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="Ntoric"
                width={100}
                height={100}
                className="mx-auto"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Our Products
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Purpose-built software for Indian businesses. Affordable, powerful, and ready to use. Subscribe to a plan and get started today — no setup fees, no tech expertise required.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Software That's Already Built for You"
            description="We don't just build custom software — we've created a suite of ready-to-deploy SaaS products designed for specific business types. Each product is the result of working closely with real businesses, understanding their pain points, and building solutions that actually solve them."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: '/products/ntoric-commerce', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', alt: 'E-commerce', icon: ShoppingCart, iconColor: 'text-teal-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce</>, desc: 'E-commerce Platform', text: 'A complete e-commerce platform for Indian businesses. Manage your store, products, orders, payments, and delivery — all in one place.', badges: ['Retailers', 'Brands', 'Online Stores'] },
              { href: '/products/ntoric-restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Restaurant', icon: Utensils, iconColor: 'text-cyan-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant</>, desc: 'F&B Management', text: 'An intelligent restaurant management system covering table management, billing, KOT printing, parcel orders, and staff management.', badges: ['Restaurants', 'Cafes', 'Cloud Kitchens'] },
              { href: '/products/ntoric-billing', src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', alt: 'Billing', icon: Receipt, iconColor: 'text-emerald-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing</>, desc: 'Billing & Invoicing', text: 'A fast, GST-compliant billing and invoicing software for retail stores, service businesses, and freelancers. Built for India.', badges: ['Shops', 'Service Businesses', 'Freelancers'] },
            ].map((card, i) => (
              <ScrollReveal key={card.href} delay={i * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full !pt-0">
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                      <CardTitle className="text-2xl">{card.title}</CardTitle>
                    </div>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{card.text}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {card.badges.map((b) => (
                        <Badge key={b} variant="secondary" className="text-xs">{b}</Badge>
                      ))}
                    </div>
                    <Link href={card.href}>
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software CTA */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Something Custom?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our products cover the most common use cases — but every business is unique. If you need a product tailored to your specific workflow, we build custom software that fits exactly how you operate.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Talk to Us About Custom Software
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
