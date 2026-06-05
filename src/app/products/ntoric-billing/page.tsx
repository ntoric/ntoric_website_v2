import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Receipt, ShoppingCart, Printer, Package, User, DollarSign, BarChart3, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ntoric Billing',
  description:
    'GST-ready billing and invoicing software for Indian retail stores, service businesses, and freelancers. Create professional invoices and track payments in seconds.',
  keywords: [
    'GST billing software',
    'invoicing software India',
    'retail billing software',
    'GST invoice generator',
    'billing software for shops',
    'thermal printer billing',
    'ntoric billing',
  ],
  openGraph: {
    title: 'Ntoric Billing — GST-Ready Billing & Invoicing Software',
    description: 'GST-ready billing and invoicing software for Indian retail stores, service businesses, and freelancers. Create professional invoices and track payments in seconds.',
    url: 'https://ntoric.com/products/ntoric-billing',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ntoric Billing — GST-Ready Billing & Invoicing Software',
    description: 'GST-ready billing and invoicing software for Indian retail stores, service businesses, and freelancers. Create professional invoices and track payments in seconds.',
  },
  alternates: {
    canonical: 'https://ntoric.com/products/ntoric-billing',
  },
}

export default function NtoricBillingPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 flex items-center gap-2"><Receipt className="w-4 h-4" /> Billing & Invoicing Software</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            GST-Ready Billing Software for Every Business
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Create professional invoices, manage customers, track payments, and generate GST reports in seconds. The fastest billing software designed for Indian retail stores, service businesses, and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Try Free for 14 Days</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">See a Demo</Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary">GST Compliant</Badge>
            <Badge variant="secondary">Works Offline</Badge>
            <Badge variant="secondary">Thermal + A4 Print</Badge>
            <Badge variant="secondary">Customer Ledger</Badge>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Manual Billing Is Costing You Time and Money</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Handwritten bills lead to errors. Spreadsheet invoices take too long. Most billing software is either too complex or built for accountants, not business owners.
          </p>
          <p className="text-lg font-semibold mt-4">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing is designed for the person behind the counter — fast, simple, and legally compliant.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fast Billing. Clean Invoices. Zero Stress.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Sales & Invoicing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Create GST invoice in under 30 seconds</li>
                  <li>Barcode scanner support for product selection</li>
                  <li>Item-wise GST rate configuration (0%, 5%, 12%, 18%, 28%)</li>
                  <li>Automatic CGST + SGST / IGST calculation</li>
                  <li>E-way bill reference number support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Package className="w-5 h-5" /> Product & Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Unlimited product catalogue</li>
                  <li>Purchase price, MRP, and selling price tracking</li>
                  <li>Batch and expiry tracking (for pharma / FMCG)</li>
                  <li>Low stock alerts and reorder levels</li>
                  <li>Barcode label printing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><User className="w-5 h-5" /> Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Customer database with contact and address</li>
                  <li>Customer ledger (outstanding balance tracking)</li>
                  <li>Customer-wise purchase history</li>
                  <li>Credit limit management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5" /> Payments & Ledger</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cash, UPI, card, and credit tracking per bill</li>
                  <li>Partial payment and advance receipt</li>
                  <li>Accounts receivable report</li>
                  <li>Daily collection summary</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Printer className="w-5 h-5" /> Printing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>80mm thermal printer (counter billing)</li>
                  <li>A4 / A5 invoice printing</li>
                  <li>Custom header with logo and business details</li>
                  <li>Duplicate copy print</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Daily / weekly / monthly sales report</li>
                  <li>Product-wise sales analysis</li>
                  <li>GST summary (GSTR-1 / GSTR-3B export)</li>
                  <li>Profit and loss estimate</li>
                  <li>Purchase vs sales comparison</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lock className="w-5 h-5" /> Security & Multi-User</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Multi-user with role-based access</li>
                  <li>PIN and password login</li>
                  <li>Transaction audit log</li>
                  <li>Data export to Excel</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Solo</CardTitle>
                <div className="text-3xl font-bold mt-2">₹499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>1 user</li>
                  <li>Unlimited invoices</li>
                  <li>Basic reports</li>
                  <li>A4 printing</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Best Value</Badge>
                <CardTitle>Business</CardTitle>
                <div className="text-3xl font-bold mt-2">₹999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>3 users</li>
                  <li>Barcode scanner support</li>
                  <li>Thermal print support</li>
                  <li>Customer ledger</li>
                  <li>GST reports</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <div className="text-3xl font-bold mt-2">₹1,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>10 users</li>
                  <li>All features</li>
                  <li>Inventory management</li>
                  <li>Multi-branch reports</li>
                  <li>Tally export</li>
                  <li>Priority support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Free 14-day trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Does <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Billing work offline?</h3>
              <p className="text-muted-foreground">Yes. Billing works fully offline. Data syncs to the cloud automatically when you reconnect.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Is it GST compliant?</h3>
              <p className="text-muted-foreground">Yes. Invoices are fully compliant with GST rules, including HSN codes, CGST/SGST/IGST calculation, and GSTR export.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Does it work with barcode scanners?</h3>
              <p className="text-muted-foreground">Yes. USB barcode scanners work out of the box. No configuration needed.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I migrate my existing data?</h3>
              <p className="text-muted-foreground">Yes. We provide templates to import your customer and product data via CSV.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Is my data backed up?</h3>
              <p className="text-muted-foreground">All data is automatically backed up to our secure cloud servers daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Billing?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your free 14-day trial today. No credit card required.
          </p>
          <Link href="/contact">
            <Button size="lg">Start Free Trial</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
