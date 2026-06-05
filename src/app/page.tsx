import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import HeroBackground from '@/components/HeroBackground'
import {
  Globe,
  Smartphone,
  Monitor,
  Bot,
  ShoppingCart,
  Utensils,
  Receipt,
  Star,
  ArrowRight,
  ShoppingBag,
  ChefHat,
  HeartPulse,
  GraduationCap,
  Truck,
  Building2,
  Landmark,
  Factory,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Ntoric — Building Software That Works. We design, develop, and deliver web apps, mobile apps, desktop software, and AI-powered solutions for businesses in India and globally.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'AI solutions',
    'SaaS',
    'custom software',
    'India',
    'Kerala',
    'startup',
    'business software',
  ],
  openGraph: {
    title: 'Ntoric — Building Software That Works',
    description: 'From idea to launch — we design, develop, and deliver web apps, mobile apps, desktop software, and AI-powered solutions for businesses.',
    url: 'https://ntoric.com',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ntoric — Building Software That Works',
    description: 'From idea to launch — we design, develop, and deliver web apps, mobile apps, desktop software, and AI-powered solutions for businesses.',
  },
  alternates: {
    canonical: 'https://ntoric.com',
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] py-12 md:py-20 px-4 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-teal-950/20 dark:to-emerald-950/20" />

        <HeroBackground />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <ScrollReveal delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
                <span className="block">Building Software</span>
                <span className="block">
                  <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                    That Works
                  </span>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From idea to launch — we design, develop, and deliver web apps,
                mobile apps, desktop software, and AI-powered solutions for
                businesses that mean business.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-lg px-8 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    View Products
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
                {[
                  { icon: Globe, label: 'Web Apps', sub: 'Modern & Scalable', from: 'from-teal-500', to: 'to-teal-600' },
                  { icon: Smartphone, label: 'Mobile Apps', sub: 'Cross-Platform', from: 'from-cyan-500', to: 'to-cyan-600' },
                  { icon: Monitor, label: 'Desktop', sub: 'High Performance', from: 'from-emerald-500', to: 'to-emerald-600' },
                  { icon: Bot, label: 'AI Solutions', sub: 'Intelligent & Smart', from: 'from-green-500', to: 'to-teal-600' },
                ].map((item) => (
                  <div key={item.label} className="text-center group">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.from} ${item.to} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="What We Do"
            title="Full-Stack Digital Solutions, Built to Scale"
            description="Ntoric is a software development and SaaS company based in India. We build custom software products and provide end-to-end digital services — from pixel-perfect websites to complex enterprise web applications, cross-platform mobile apps, and intelligent AI automation systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', alt: 'Web Development', title: 'Web Development', text: 'We build fast, responsive, and modern websites and web applications using the latest technologies. From landing pages to full-stack SaaS platforms — we cover it all.' },
              { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', alt: 'Mobile Applications', title: 'Mobile Applications', text: 'Native and cross-platform mobile apps for Android and iOS using Flutter. Beautiful UIs, smooth performance, and seamless backend integration.' },
              { src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80', alt: 'Desktop Applications', title: 'Desktop Applications', text: 'Cross-platform desktop software for Windows, macOS, and Linux. Built for internal tools, enterprise workflows, and specialised business operations.' },
              { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80', alt: 'AI & Automation', title: 'AI & Automation', text: 'Integrate the power of AI into your business. From chatbots and recommendation engines to automated workflows and document intelligence — we make AI work for you.' },
              { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', alt: 'Payment Integrations', title: 'Payment Integrations', text: 'Smooth, secure, and compliant payment gateway integrations for Indian and international markets — Razorpay, Stripe, PayU, CCAvenue, and more.' },
              { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', alt: 'SaaS Products', title: 'SaaS Products', text: 'Ready-to-use cloud software products for e-commerce, restaurant management, billing, and beyond. Subscribe and get started in minutes.' },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full pt-0">
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="Why Choose Us"
            title="We Don't Just Write Code, We Solve Problems"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80', alt: 'Startup Speed', title: 'Startup Speed, Enterprise Quality', text: 'We move fast without cutting corners. Our agile process means you get working software quickly, with the architecture to support growth.' },
              { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', alt: 'Full-Stack', title: 'Full-Stack, End-to-End', text: 'From UI/UX design to backend APIs, databases, cloud infrastructure, and mobile apps — one team handles everything. No vendor juggling.' },
              { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', alt: 'India-First', title: 'India-First, Globally Ready', text: 'We understand Indian business needs — GST compliance, UPI payments, regional languages, local integrations — while building globally scalable systems.' },
              { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80', alt: 'Transparent', title: 'Transparent & Collaborative', text: 'Regular updates, clear timelines, and open communication. You always know where your project stands.' },
              { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', alt: 'Ongoing Support', title: 'Ongoing Support', text: "We don't disappear after launch. Our team offers maintenance, upgrades, and continuous improvement as your business evolves." },
              { src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', alt: 'Competitive Pricing', title: 'Competitive Pricing', text: 'High-quality software at pricing built for Indian startups and SMBs — no bloated agency fees, no surprises.' },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden pt-0">
                  <CardContent className="pt-0 px-0">
                    <div className="h-40 overflow-hidden relative">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="Our Products"
            title="Ready-to-Deploy Business Software"
            description="We've built production-grade software products you can use today. Each product is designed for real business operations, with features Indian businesses actually need."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: '/products/ntoric-commerce', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', alt: 'E-commerce', icon: ShoppingCart, iconColor: 'text-teal-600', border: 'hover:border-teal-600', hoverBg: 'group-hover:bg-teal-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce</>, desc: 'E-commerce Platform', text: 'A complete e-commerce platform for Indian businesses. Manage your store, products, orders, payments, and delivery — all in one place.' },
              { href: '/products/ntoric-restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', alt: 'Restaurant', icon: Utensils, iconColor: 'text-cyan-600', border: 'hover:border-cyan-600', hoverBg: 'group-hover:bg-cyan-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant</>, desc: 'Restaurant Management System', text: 'An intelligent restaurant management system covering table management, billing, KOT printing, parcel orders, and staff management.' },
              { href: '/products/ntoric-billing', src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80', alt: 'Billing', icon: Receipt, iconColor: 'text-emerald-600', border: 'hover:border-emerald-600', hoverBg: 'group-hover:bg-emerald-600', title: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing</>, desc: 'Billing & Invoicing Software', text: 'A fast, GST-compliant billing and invoicing software for retail stores, service businesses, and freelancers. Built for India.' },
            ].map((card, i) => (
              <ScrollReveal key={card.href} delay={i * 150}>
                <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent ${card.border} overflow-hidden h-full !pt-0`}>
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4">
                      <card.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{card.text}</p>
                    <Link href={card.href}>
                      <Button variant="outline" className={`w-full ${card.hoverBg} group-hover:text-white transition-colors`}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="Industries"
            title="Software for Every Sector"
            description="We build solutions for businesses across every major industry — from local retailers to multi-location restaurant chains."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: 'Retail & E-commerce', icon: ShoppingBag, color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-600' },
              { label: 'Food & Hospitality', icon: ChefHat, color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-600' },
              { label: 'Healthcare & Clinics', icon: HeartPulse, color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-600' },
              { label: 'Education & EdTech', icon: GraduationCap, color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-600' },
              { label: 'Logistics & Supply Chain', icon: Truck, color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-600' },
              { label: 'Real Estate & Property', icon: Building2, color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-600' },
              { label: 'Finance & Accounting', icon: Landmark, color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-600' },
              { label: 'Manufacturing & Inventory', icon: Factory, color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-600' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="group relative p-6 bg-background rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="font-semibold text-sm leading-snug">{item.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="How We Work"
            title="From Brief to Launch"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Discovery & Planning', text: 'We understand your business goals, users, and technical requirements. We define scope, timelines, and deliverables clearly before writing a single line of code.' },
              { num: '2', title: 'Design & Prototyping', text: 'Our designers create wireframes and interactive prototypes. You see exactly what you\'ll get before development begins.' },
              { num: '3', title: 'Development & Sprints', text: 'Our engineers build your product in structured sprints with regular demos. Transparent progress at every step.' },
              { num: '4', title: 'Testing & QA', text: "Rigorous testing across devices, browsers, and edge cases. We don't ship buggy software." },
              { num: '5', title: 'Launch & Deployment', text: 'Smooth deployment with zero downtime. We set up hosting, domains, SSL, and monitoring so you\'re ready from day one.' },
              { num: '6', title: 'Support & Growth', text: "Post-launch support, analytics, and continuous improvement. We're your long-term technology partner." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="text-4xl font-bold text-primary/40 shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-teal-50 via-cyan-100 to-emerald-100 dark:from-gray-900 dark:via-teal-900/10 dark:to-emerald-900/10">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
              By the Numbers
            </Badge>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: '3+', label: 'Years of Delivering Software' },
              { value: '20+', label: 'Projects Delivered' },
              { value: '10+', label: 'Happy Clients' },
              { value: '5', label: 'Core Products in Production' },
              { value: '100%', label: 'Projects Delivered on Time' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="group p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <SectionHeader
            badge="What Clients Say"
            title="Real Words from Real Clients"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { initial: 'R', name: 'Restaurant Owner', loc: 'Kozhikode', from: 'from-teal-400', to: 'to-teal-600', text: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> built our restaurant management system from scratch and it transformed how we operate. The billing is fast, the KOT integration is seamless, and their support is outstanding.</> },
              { initial: 'R', name: 'Retail Business Owner', loc: 'Kochi', from: 'from-cyan-400', to: 'to-cyan-600', text: <>We approached <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> for an e-commerce website and they delivered beyond our expectations. Clean design, fast checkout, and everything worked perfectly at launch.</> },
              { initial: 'S', name: 'Shop Owner', loc: 'Malappuram', from: 'from-emerald-400', to: 'to-emerald-600', text: 'The billing software they built for us handles GST automatically. What used to take an hour now takes minutes. Game changer.' },
            ].map((t, i) => (
              <ScrollReveal key={t.name + t.loc} delay={i * 150}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-background/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${t.from} ${t.to} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                        {t.initial}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.loc}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Something?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto">
              Whether you need a new website, a mobile app, a custom software solution, or want to integrate AI into your business — we&apos;d love to hear from you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-base bg-white text-teal-600 hover:bg-gray-100 shadow-xl">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent border-white text-white hover:bg-white/10 shadow-xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
