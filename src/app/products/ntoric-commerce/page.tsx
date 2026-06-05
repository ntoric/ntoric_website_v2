import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShoppingCart, Receipt, Store, CreditCard, Package, BarChart3, Palette, Plug } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ntoric Commerce',
  description:
    'A complete e-commerce platform for Indian businesses. Manage your store, products, orders, payments, and delivery — all in one place.',
  keywords: [
    'e-commerce platform India',
    'online store software',
    'GST e-commerce',
    'Indian e-commerce solution',
    'UPI payment integration',
    'online store builder',
    'ntoric commerce',
  ],
  openGraph: {
    title: 'Ntoric Commerce — Complete E-commerce Platform for India',
    description: 'A complete e-commerce platform for Indian businesses. Manage your store, products, orders, payments, and delivery — all in one place.',
    url: 'https://ntoric.com/products/ntoric-commerce',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ntoric Commerce — Complete E-commerce Platform for India',
    description: 'A complete e-commerce platform for Indian businesses. Manage your store, products, orders, payments, and delivery — all in one place.',
  },
  alternates: {
    canonical: 'https://ntoric.com/products/ntoric-commerce',
  },
}

export default function NtoricCommercePage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> E-commerce Platform</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Your Complete Online Store, Ready in Minutes
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Launch a professional e-commerce store with everything you need — product listings, inventory, orders, payments, GST invoicing, and delivery management — all in one platform built for Indian businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Request a Demo</Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary">GST-Ready Invoicing</Badge>
            <Badge variant="secondary">UPI + Card + Wallet Payments</Badge>
            <Badge variant="secondary">Multi-device (Mobile + Desktop)</Badge>
            <Badge variant="secondary">WhatsApp Order Notifications</Badge>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">The Challenge with Selling Online</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Setting up an online store in India is harder than it should be. Most global platforms aren't designed for Indian businesses — they don't handle GST correctly, they charge high transaction fees, their payment options are limited, and their interfaces confuse your customers.
          </p>
          <p className="text-lg text-muted-foreground">
            Meanwhile, building a custom store from scratch costs lakhs and takes months.
          </p>
          <p className="text-lg font-semibold mt-4">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce is the middle ground — affordable, India-first, and ready to use.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Online Store Needs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Store className="w-5 h-5" /> Store Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Unlimited product listings with variants (size, colour, material)</li>
                  <li>Product categories and collections</li>
                  <li>Bulk product import via CSV</li>
                  <li>Product images with compression and CDN delivery</li>
                  <li>Stock level tracking and low-stock alerts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Cart & Checkout</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Optimised mobile checkout flow</li>
                  <li>Guest checkout + account-based checkout</li>
                  <li>Abandoned cart recovery</li>
                  <li>Coupon codes and discount rules</li>
                  <li>Minimum order value settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Razorpay integration (UPI, cards, net banking, wallets)</li>
                  <li>Cash on Delivery (COD) with optional COD fee</li>
                  <li>Partial payment / advance booking support</li>
                  <li>Automatic payment confirmation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Package className="w-5 h-5" /> Orders & Fulfilment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Real-time order dashboard</li>
                  <li>Order status management (pending, packed, shipped, delivered)</li>
                  <li>WhatsApp notification to customer at each stage</li>
                  <li>Shiprocket and Delhivery integration (optional)</li>
                  <li>Printable packing slips and invoices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Receipt className="w-5 h-5" /> GST & Invoicing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>GST-compliant tax calculation (CGST + SGST / IGST)</li>
                  <li>Auto-generated PDF invoices with GST breakdown</li>
                  <li>HSN code support</li>
                  <li>GSTR-1 data export</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Analytics & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Sales dashboard with daily/weekly/monthly views</li>
                  <li>Top-selling products report</li>
                  <li>Customer acquisition and repeat purchase data</li>
                  <li>Inventory valuation report</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Palette className="w-5 h-5" /> Storefront Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Professionally designed store themes</li>
                  <li>Custom colour, logo, and banner upload</li>
                  <li>Mobile-responsive design</li>
                  <li>Custom domain support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Plug className="w-5 h-5" /> Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>WhatsApp Business (order notifications)</li>
                  <li>Google Analytics</li>
                  <li>Facebook Pixel</li>
                  <li>Shiprocket / Delhivery</li>
                  <li>Tally export (optional)</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="text-3xl font-bold mt-2">₹999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Up to 100 products</li>
                  <li>Up to 200 orders/month</li>
                  <li>1 admin user</li>
                  <li>Basic themes</li>
                  <li>Email support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Growth</CardTitle>
                <div className="text-3xl font-bold mt-2">₹2,499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Unlimited products</li>
                  <li>Unlimited orders</li>
                  <li>3 admin users</li>
                  <li>All themes + customisation</li>
                  <li>WhatsApp notifications</li>
                  <li>GST invoicing</li>
                  <li>Shiprocket integration</li>
                  <li>Priority support</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <div className="text-3xl font-bold mt-2">₹4,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Everything in Growth</li>
                  <li>10 admin users</li>
                  <li>Multi-warehouse support</li>
                  <li>Tally export</li>
                  <li>Custom domain</li>
                  <li>Dedicated account manager</li>
                  <li>Phone + WhatsApp support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Start Free Trial</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Annual billing available at 2 months free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Do I need technical knowledge to use <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce?</h3>
              <p className="text-muted-foreground">No. The platform is designed for business owners. If you can use WhatsApp, you can use <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Commerce.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I use my own domain?</h3>
              <p className="text-muted-foreground">Yes, on the Growth and Business plans you can connect your custom domain (e.g. yourstore.com).</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Is GST billing included?</h3>
              <p className="text-muted-foreground">Yes. GST-compliant invoices are generated automatically on every order.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">What payment methods does it support?</h3>
              <p className="text-muted-foreground">UPI (GPay, PhonePe, Paytm), credit/debit cards, net banking, wallets, and cash on delivery.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I migrate from another platform?</h3>
              <p className="text-muted-foreground">Yes. We offer assisted migration from Shopify, WooCommerce, and other platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Selling Online?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link href="/contact">
            <Button size="lg">Start Free 14-Day Trial</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
