import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import AnimatedBackground from '@/components/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ntoric. Whether you have a project in mind or a question about our products, we would love to hear from you.',
  keywords: [
    'contact ntoric',
    'software development quote',
    'web development inquiry',
    'mobile app development quote',
    'custom software pricing',
    'hire software developers India',
  ],
  openGraph: {
    title: 'Contact Ntoric — Start Your Project',
    description: 'Get in touch with Ntoric. Whether you have a project in mind or a question about our products, we would love to hear from you.',
    url: 'https://ntoric.com/contact',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ntoric — Start Your Project',
    description: 'Get in touch with Ntoric. Whether you have a project in mind or a question about our products, we would love to hear from you.',
  },
  alternates: {
    canonical: 'https://ntoric.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
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
              Get in Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you have a project in mind, a question about our products, or just want to explore if we&apos;re the right fit — we&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Mail, title: 'Email Us', value: 'hello@ntoric.com', href: 'mailto:hello@ntoric.com', note: 'We respond within 24 hours on business days.' },
              { icon: MessageCircle, title: 'WhatsApp', value: '+91 8129490227', href: 'https://wa.me/918129490227', note: 'Available 9 AM – 7 PM IST, Monday to Saturday' },
              { icon: Phone, title: 'Call Us', value: '+91 8129490227', href: 'tel:+918129490227', note: 'Monday to Saturday, 10 AM – 6 PM IST' },
              { icon: MapPin, title: 'Visit Us', value: 'Kerala, India', href: null, note: 'Office visits by appointment only' },
            ].map((option, i) => (
              <ScrollReveal key={option.title} delay={i * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <option.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {option.href ? (
                      <a href={option.href} className="text-lg text-primary hover:underline font-medium">
                        {option.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium">{option.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{option.note}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <ScrollReveal>
                <div className="relative h-full min-h-[24rem] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                    alt="Contact us"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">Tell Us About Your Project</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company / Business Name</Label>
                          <Input id="company" placeholder="Your Company" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website Development</SelectItem>
                            <SelectItem value="webapp">Web Application Development</SelectItem>
                            <SelectItem value="mobile">Mobile App Development</SelectItem>
                            <SelectItem value="desktop">Desktop Application</SelectItem>
                            <SelectItem value="ai">AI & Automation</SelectItem>
                            <SelectItem value="payment">Payment Integration</SelectItem>
                            <SelectItem value="ntoric-commerce"><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce (Product)</SelectItem>
                            <SelectItem value="ntoric-restaurant"><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant (Product)</SelectItem>
                            <SelectItem value="ntoric-billing"><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing (Product)</SelectItem>
                            <SelectItem value="other">Other / Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                            <SelectItem value="25k-75k">₹25,000 – ₹75,000</SelectItem>
                            <SelectItem value="75k-2l">₹75,000 – ₹2,00,000</SelectItem>
                            <SelectItem value="2l-5l">₹2,00,000 – ₹5,00,000</SelectItem>
                            <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                            <SelectItem value="not-decided">Not decided yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Tell Us About Your Project *</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your project requirements, goals, and any specific details..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="source">How did you hear about us?</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We&apos;ll get back to you within one business day.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="py-24 px-4 md:px-6 bg-muted/40">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prefer a Call?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute discovery call with our team. We&apos;ll listen to your requirements, ask the right questions, and recommend a solution that fits your needs and budget.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button size="lg">
              Book a Free Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              { q: 'How quickly will you respond?', a: 'We respond to all enquiries within 24 business hours. WhatsApp is usually faster.' },
              { q: 'Is the initial consultation free?', a: 'Yes. The first call is a no-obligation consultation at no cost.' },
              { q: 'Do you work with clients outside India?', a: 'Yes. We have clients in the UAE, UK, and USA. All work is handled remotely.' },
              { q: 'Do you sign NDAs?', a: 'Yes. We sign NDAs before discussing any confidential project details.' },
            ].map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 100}>
                <div className="pb-8 border-b last:border-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
