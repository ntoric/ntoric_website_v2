import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Globe,
  Layout,
  Smartphone,
  Monitor,
  Bot,
  CreditCard,
  ArrowRight,
  Check,
  Clock,
  IndianRupee,
  Sparkles,
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'End-to-end software development services from ntoric. Web apps, mobile apps, desktop software, AI integrations, and payment gateways for Indian businesses.',
  keywords: [
    'software development services',
    'web development services',
    'mobile app development',
    'AI integration services',
    'payment gateway integration',
    'custom software development',
    'SaaS development',
    'India software services',
  ],
  openGraph: {
    title: 'Services — Ntoric Software Development',
    description: 'End-to-end software development services from ntoric. Web apps, mobile apps, desktop software, AI integrations, and payment gateways for Indian businesses.',
    url: 'https://ntoric.com/services',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — Ntoric Software Development',
    description: 'End-to-end software development services from ntoric. Web apps, mobile apps, desktop software, AI integrations, and payment gateways for Indian businesses.',
  },
  alternates: {
    canonical: 'https://ntoric.com/services',
  },
}

const services = [
  {
    id: 'web',
    icon: Globe,
    label: 'Website Development',
    headline: 'Your Business Deserves a Website That Actually Works',
    description:
      'A great website is your most powerful sales tool. We design and develop websites that look stunning, load fast, rank on Google, and convert visitors into customers.',
    features: [
      'Business websites & portfolios',
      'Landing pages & marketing sites',
      'Corporate websites with CMS',
      'E-commerce storefronts',
      'Multi-language & regional websites',
      'Mobile-first, responsive design',
      'SEO-optimised from day one',
      'Core Web Vitals compliant',
    ],
    timeline: '1–4 weeks',
    price: '₹15,000 onwards',
    color: 'from-teal-500/20 to-teal-500/5',
    iconColor: 'text-teal-600',
    border: 'hover:border-teal-500/40',
  },
  {
    id: 'webapp',
    icon: Layout,
    label: 'Web Application Development',
    headline: 'Complex Problems, Elegant Software Solutions',
    description:
      'We build web applications that power businesses — from internal tools and dashboards to full-scale SaaS platforms with thousands of users.',
    features: [
      'Custom web applications (B2B, B2C)',
      'SaaS platforms and multi-tenant apps',
      'Admin dashboards and internal tools',
      'ERP and business management systems',
      'Role-based access control (RBAC)',
      'Real-time features (websockets)',
      'REST and GraphQL APIs',
      'Cloud-native CI/CD deployment',
    ],
    timeline: '4–16 weeks',
    price: '₹75,000 onwards',
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-600',
    border: 'hover:border-cyan-500/40',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    label: 'Mobile App Development',
    headline: 'One Codebase. Two Platforms. Zero Compromise.',
    description:
      'We build beautiful, high-performance mobile applications for Android and iOS using Flutter — Google\'s cross-platform framework.',
    features: [
      'Customer-facing apps (B2C, marketplace)',
      'Business management apps (B2B)',
      'On-demand delivery and booking apps',
      'E-commerce mobile apps',
      'Single codebase for Android + iOS',
      'Offline support and local storage',
      'Push notifications (FCM)',
      'App Store & Play Store submission',
    ],
    timeline: '6–16 weeks',
    price: '₹1,00,000 onwards',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-600',
    border: 'hover:border-emerald-500/40',
  },
  {
    id: 'desktop',
    icon: Monitor,
    label: 'Desktop Applications',
    headline: 'Powerful Software for Your Workstation',
    description:
      'We build desktop applications for Windows, macOS, and Linux — for businesses that need high-performance local software.',
    features: [
      'POS and billing systems',
      'Inventory and stock management',
      'Industrial and field-use applications',
      'Data entry and reporting tools',
      'Works offline or with local network',
      'Hardware peripheral integration',
      'Local database with cloud sync',
      'GST-compliant billing support',
    ],
    timeline: '4–12 weeks',
    price: '₹50,000 onwards',
    color: 'from-teal-500/20 to-teal-500/5',
    iconColor: 'text-teal-600',
    border: 'hover:border-teal-500/40',
  },
  {
    id: 'ai',
    icon: Bot,
    label: 'AI & Automation',
    headline: 'Put AI to Work in Your Business',
    description:
      'AI isn\'t just for big tech companies. We integrate intelligent automation into your existing software and build AI-powered features.',
    features: [
      'AI chatbots and virtual assistants',
      'Document processing and OCR automation',
      'Predictive analytics and recommendations',
      'LLM integrations (OpenAI, Claude, Gemini)',
      'Custom-trained models on your data',
      'RAG for accurate AI responses',
      'Multi-channel support (web, WhatsApp)',
      'Secure and private data handling',
    ],
    timeline: '2–10 weeks',
    price: '₹30,000 onwards',
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-600',
    border: 'hover:border-cyan-500/40',
  },
  {
    id: 'payments',
    icon: CreditCard,
    label: 'Payment Gateway Integration',
    headline: 'Accept Payments Everywhere, Every Way',
    description:
      'We integrate secure, reliable payment gateways into your websites, apps, and software — covering UPI, cards, net banking, wallets, and international payments.',
    features: [
      'Razorpay / Cashfree / PayU integration',
      'Stripe for international payments',
      'UPI payment links and QR codes',
      'Recurring billing and subscriptions',
      'Multiple payment methods in one integration',
      'Real-time webhook confirmation',
      'GST-ready invoicing',
      'PCI-DSS compliant',
    ],
    timeline: '1–3 weeks',
    price: '₹10,000 onwards',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-600',
    border: 'hover:border-emerald-500/40',
  },
]

const packages = [
  {
    name: 'Starter Package',
    price: '₹25,000',
    desc: 'Local businesses, solo entrepreneurs going digital',
    features: [
      '5-page responsive website',
      'Mobile-friendly design',
      'Contact form + WhatsApp integration',
      'Basic SEO setup',
      '1 month free support',
    ],
    popular: false,
    color: 'teal',
  },
  {
    name: 'Growth Package',
    price: '₹75,000',
    desc: 'Startups, growing SMBs',
    features: [
      'Custom web application (up to 3 modules)',
      'Admin dashboard',
      'User authentication',
      'Payment gateway integration',
      '3 months free support',
    ],
    popular: true,
    color: 'cyan',
  },
  {
    name: 'Enterprise Package',
    price: 'Custom Pricing',
    desc: 'Companies with complex needs',
    features: [
      'Full-scale SaaS or enterprise app',
      'Mobile app (Android + iOS)',
      'AI/automation features',
      'Dedicated team',
      'SLA-backed support',
    ],
    popular: false,
    color: 'emerald',
  },
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Requirement gathering, technical scoping, and effort estimation. NDA and detailed scope document signed.' },
  { num: '02', title: 'Design', desc: 'UI/UX wireframes, design system setup, and interactive prototype review and sign-off.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with weekly demos. Git-based version control. Regular builds for client review.' },
  { num: '04', title: 'QA & Testing', desc: 'Functional, performance, and security testing. Bug fixes and regression testing.' },
  { num: '05', title: 'Launch', desc: 'Production deployment, DNS and SSL configuration, monitoring setup, client handover, and training.' },
  { num: '06', title: 'Support', desc: 'Maintenance retainers, feature enhancements, performance monitoring, and continuous improvement.' },
]

const faqs = [
  { q: 'Do you sign an NDA before starting?', a: 'Yes. We sign a Non-Disclosure Agreement before sharing project details or starting any work.' },
  { q: 'Do you work with clients outside Kerala?', a: 'Absolutely. We work with clients across India and internationally. All communication happens over video calls, chat, and project management tools.' },
  { q: 'What if I need changes after launch?', a: 'All projects include a post-launch support period. After that, we offer flexible maintenance retainers starting at ₹5,000/month.' },
  { q: 'Can you take over an existing project?', a: 'Yes. We regularly take over and modernise existing codebases. We\'ll conduct a technical audit first and provide a detailed plan.' },
  { q: 'Do you provide hosting?', a: 'Yes. We help you set up hosting on AWS, GCP, or other providers. We can also manage hosting as part of a monthly retainer.' },
  { q: 'What is your payment structure?', a: 'Typically 40% upfront, 30% at midpoint, 30% on delivery. Terms are discussed per project.' },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-teal-950/20 dark:to-emerald-950/20" />
        <div className="absolute top-10 -left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <ScrollReveal>
            <div className="mb-6">
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
              Our Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              End-to-end software development and digital services for startups, SMBs, and enterprises.
              We build what you need — on time and within budget.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="What We Build"
            title="Six Ways We Can Help You Grow"
            description="From a single-page website to a complex multi-tenant SaaS platform — our team has the skills and processes to deliver software that's fast, reliable, and built to grow with your business."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <Card
                  id={service.id}
                  className={`group relative overflow-hidden border-2 border-transparent ${service.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 pt-0 h-full`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm`}>
                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs font-medium">
                        {service.label}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2 tracking-tight">{service.headline}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mb-5 text-sm border-t pt-4">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <IndianRupee className="w-4 h-4" />
                        <span>{service.price}</span>
                      </div>
                    </div>

                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="Packages"
            title="Transparent Pricing, No Surprises"
            description="Choose a package that fits your needs. Every package is customisable — talk to us if you need something in between."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 100}>
                <Card className={`relative overflow-hidden h-full ${pkg.popular ? 'border-primary shadow-xl' : 'border shadow-sm hover:shadow-lg'} transition-all hover:-translate-y-1 p-6`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold mt-1">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground">Ideal for: {pkg.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full ${pkg.popular ? '' : 'variant-outline'}`} variant={pkg.popular ? 'default' : 'outline'}>
                        Contact Us
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            badge="How We Work"
            title="Our Delivery Process"
            description="Every project at Ntoric follows a clear, transparent process from discovery to ongoing support."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80}>
                <div className="group p-6 rounded-2xl bg-background border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-primary/20 mb-3">{step.num}</div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-4xl">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 80}>
                <div className="p-5 rounded-xl bg-background border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-base mb-1">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-80" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure What You Need?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. We&apos;ll listen to your requirements, ask the right questions, and recommend the most effective solution for your budget and goals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 shadow-xl">
                  Book a Free Call
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" className="bg-white/90 text-teal-600 hover:bg-white backdrop-blur-sm shadow-xl">
                  See Our Products
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
