import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Lightbulb, ShieldCheck, HeartHandshake, Gem, TrendingUp } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Ntoric — a software development and SaaS company from Kerala, India building practical digital solutions for growing businesses.',
  keywords: [
    'about ntoric',
    'software company India',
    'SaaS company Kerala',
    'web development company',
    'mobile app development',
    'custom software',
    'Indian software developers',
  ],
  openGraph: {
    title: 'About Ntoric — Building Software That Works',
    description: 'Learn about Ntoric — a software development and SaaS company from Kerala, India building practical digital solutions for growing businesses.',
    url: 'https://ntoric.com/about',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ntoric — Building Software That Works',
    description: 'Learn about Ntoric — a software development and SaaS company from Kerala, India building practical digital solutions for growing businesses.',
  },
  alternates: {
    canonical: 'https://ntoric.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
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
              About <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We are a software development and SaaS company from Kerala, India — building practical, powerful digital solutions for businesses that want to grow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  How We Started
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> was founded with a simple observation: most businesses in India — especially small and medium ones — struggle with technology not because they don&apos;t need it, but because the available solutions are either too expensive, too complicated, or not built for Indian business realities.
                  </p>
                  <p>
                    We saw restaurants using handwritten KOT slips and WhatsApp for parcel orders. We saw retail stores with no billing software, calculating GST manually. We saw local businesses with zero online presence, losing customers to competitors who had a simple website.
                  </p>
                  <p>We started <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> to fix that — one business at a time.</p>
                  <p className="font-semibold text-foreground">
                    Today, we work with businesses across India, delivering custom software, SaaS products, mobile apps, and AI solutions that are built to be used, not just deployed.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Startup team working"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To make powerful software accessible to every business — not just the ones with large tech budgets.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be the most trusted technology partner for Indian startups and small businesses — known for software that works, people who care, and support that never disappears.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="mt-20">
            <SectionHeader
              badge="Our Values"
              title="What We Stand For"
              description="These principles guide every decision we make — from how we write code to how we treat our clients."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: 'Clarity over Complexity', desc: 'Simple solutions first. We avoid unnecessary complexity and build software that is easy to understand and maintain.', icon: Lightbulb, color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-600' },
                { title: 'Reliability', desc: 'We do what we say, when we say it. Deadlines are commitments, not suggestions.', icon: ShieldCheck, color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-600' },
                { title: 'Honesty', desc: 'Transparent pricing, realistic timelines, and direct communication. No hidden costs, no surprises.', icon: HeartHandshake, color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-600' },
                { title: 'Craft', desc: 'We take genuine pride in the quality of what we build. Clean code, thoughtful UX, and attention to detail.', icon: Gem, color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-600' },
                { title: 'Growth', desc: 'We help your business grow, and we grow with it. Long-term partnerships over one-off projects.', icon: TrendingUp, color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-600' },
              ].map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 80}>
                  <div className="group relative p-7 bg-background rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <v.icon className={`w-6 h-6 ${v.iconColor}`} />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{v.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader badge="The Team" title="The People Behind <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span>" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> is a lean team of software engineers, designers, and product thinkers — all based in Kerala, India. We are passionate about building software that actually gets used and makes a real difference.
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                      <li>Full-stack web development (React, Django, Go, Node.js)</li>
                      <li>Mobile app development (Flutter)</li>
                      <li>Cloud infrastructure and DevOps (AWS, GCP, Docker)</li>
                      <li>AI and machine learning integrations</li>
                      <li>UI/UX design for web and mobile</li>
                      <li>Business analysis and product management</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader badge="Our Approach" title="What Makes Us Different" />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'We build products, not just projects.', text: 'Many agencies deliver a project and move on. We think long-term. The software we build is designed to grow with your business, and our relationship with you doesn\'t end at launch.' },
              { title: 'We understand Indian business.', text: 'GST, UPI, WhatsApp, local languages, Indian payment gateways, India-specific compliance — these aren\'t afterthoughts for us. They\'re built in from day one.' },
              { title: 'We work transparently.', text: 'No surprise bills. No scope creep without discussion. No ghosting. You always know what\'s happening with your project.' },
              { title: 'We stay small on purpose.', text: 'We\'re not trying to be a 500-person agency. We stay focused so every client gets genuine attention from senior engineers — not outsourced to juniors.' },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
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

      {/* Location & Presence */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader badge="Where We Are" title="Location & Presence" />

          <div className="max-w-4xl mx-auto space-y-6">
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Kerala, India
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We&apos;re based in Kerala with team members across Kozhikode, Malappuram, and Kochi.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card>
                <CardHeader>
                  <CardTitle>We Work With Clients Across</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">India</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        <li>Kerala</li>
                        <li>Tamil Nadu, Karnataka, Goa (South India)</li>
                        <li>Delhi, Mumbai, Hyderabad (Pan-India)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">International</h4>
                      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                        <li>UAE</li>
                        <li>UK</li>
                        <li>USA (Remote)</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4 text-sm">
                    We are fully set up for remote work — video calls, async communication, and cloud-based project management. Distance is not a barrier.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Together</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              If you&apos;re looking for a technology partner who will invest in understanding your business and deliver software that actually works — we&apos;d love to connect.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
