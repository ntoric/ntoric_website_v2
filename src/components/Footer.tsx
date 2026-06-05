import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  products: [
    { href: '/products/ntoric-commerce', label: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce</> },
    { href: '/products/ntoric-restaurant', label: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant</> },
    { href: '/products/ntoric-billing', label: <><span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing</> },
  ],
  services: [
    { href: '/services#web', label: 'Web Development' },
    { href: '/services#mobile', label: 'Mobile Apps' },
    { href: '/services#ai', label: 'AI & Automation' },
    { href: '/services#desktop', label: 'Desktop Apps' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
}

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Ntoric"
                width={32}
                height={32}
                className="h-8 w-auto transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight">ntoric</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Building software that works for Indian startups and businesses.
              From web apps to AI — we turn your ideas into products.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Kerala, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> hello@ntoric.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                  Products
                </h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ntoric.com All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
