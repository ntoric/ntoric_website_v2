import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Printer, Receipt, Cloud, Utensils, Armchair, Clipboard, Bike, Users, BarChart3, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ntoric Restaurant',
  description:
    'A complete restaurant management and billing system for dine-in, takeaway, and parcel orders. Handle KOT printing, table management, billing, and staff management.',
  keywords: [
    'restaurant management software',
    'restaurant billing system',
    'KOT printing software',
    'table management system',
    'GST restaurant billing',
    'restaurant POS India',
    'ntoric restaurant',
  ],
  openGraph: {
    title: 'Ntoric Restaurant — Complete Restaurant Management System',
    description: 'A complete restaurant management and billing system for dine-in, takeaway, and parcel orders. Handle KOT printing, table management, billing, and staff management.',
    url: 'https://ntoric.com/products/ntoric-restaurant',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ntoric Restaurant — Complete Restaurant Management System',
    description: 'A complete restaurant management and billing system for dine-in, takeaway, and parcel orders. Handle KOT printing, table management, billing, and staff management.',
  },
  alternates: {
    canonical: 'https://ntoric.com/products/ntoric-restaurant',
  },
}

export default function NtoricRestaurantPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 flex items-center gap-2"><Utensils className="w-4 h-4" /> Restaurant Management System</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Run Your Restaurant Smarter, Not Harder
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            A complete restaurant management and billing system for dine-in, takeaway, and parcel orders. Handle KOT printing, table management, billing, staff management, and daily reports — all from one screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Request a Demo</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Start Free Trial</Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary">KOT Printer Ready</Badge>
            <Badge variant="secondary">Dine-in + Parcel + Takeaway</Badge>
            <Badge variant="secondary">GST Billing</Badge>
            <Badge variant="secondary">Real-time Order Dashboard</Badge>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Restaurant Operations Are Chaotic. They Don't Have to Be.</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Between managing tables, handling parcel orders on the phone, printing kitchen tickets, calculating bills, managing staff, and tracking daily sales — restaurant operations are stressful and error-prone.
          </p>
          <p className="text-lg font-semibold mt-4">
            <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant is built specifically for how Indian restaurants actually work.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Run Your Restaurant</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Armchair className="w-5 h-5" /> Table Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Visual floor plan with table status (available, occupied, billed)</li>
                  <li>Multi-section support (AC, non-AC, rooftop, garden)</li>
                  <li>Table transfer and merging</li>
                  <li>Cover count tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clipboard className="w-5 h-5" /> Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Category-wise menu with pricing</li>
                  <li>Quick item search and add to order</li>
                  <li>Modifier support (no onion, extra spicy, half portion)</li>
                  <li>Special instructions per item</li>
                  <li>Edit order before KOT print</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Printer className="w-5 h-5" /> KOT Printing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Instant KOT print to kitchen printer on order confirmation</li>
                  <li>Support for multiple printers (hot kitchen, cold section, bar)</li>
                  <li>KOT cancellation and void handling</li>
                  <li>Reprint KOT on request</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bike className="w-5 h-5" /> Parcel & Takeaway Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Separate parcel order flow</li>
                  <li>Customer phone number with order history</li>
                  <li>Estimated ready time notification</li>
                  <li>Packing charge support</li>
                  <li>Delivery partner assignment (manual)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Receipt className="w-5 h-5" /> Billing & Invoicing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Itemised bill with tax breakup (CGST + SGST)</li>
                  <li>Discount by percentage or fixed amount</li>
                  <li>Split bill support</li>
                  <li>Multiple payment modes (cash, UPI, card, credit)</li>
                  <li>Complementary / staff meal marking</li>
                  <li>Thermal bill printer support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5" /> Staff Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Staff roles (manager, captain, cashier, kitchen)</li>
                  <li>Login with PIN or password</li>
                  <li>Shift tracking and attendance log</li>
                  <li>Staff-wise sales and performance report</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Daily sales summary</li>
                  <li>Item-wise sales report</li>
                  <li>Category performance report</li>
                  <li>GST-ready tax reports</li>
                  <li>Cash vs digital payment split</li>
                  <li>Void and discount report</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Settings className="w-5 h-5" /> Menu Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Add/edit/delete categories and items</li>
                  <li>Mark items as unavailable for the day</li>
                  <li>Set happy hour / time-based pricing</li>
                  <li>Multi-language menu support (English + regional)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Cloud className="w-5 h-5" /> Cloud Sync & Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Real-time cloud backup of all transactions</li>
                  <li>Access reports from any device</li>
                  <li>Multi-outlet support (enterprise plan)</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Built for Restaurants</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <div className="text-3xl font-bold mt-2">₹1,499<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Up to 20 tables</li>
                  <li>1 billing terminal</li>
                  <li>1 KOT printer</li>
                  <li>Dine-in + Parcel orders</li>
                  <li>Basic reports</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Book a Demo</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Badge className="w-fit mb-2">Recommended</Badge>
                <CardTitle>Standard</CardTitle>
                <div className="text-3xl font-bold mt-2">₹2,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Unlimited tables</li>
                  <li>2 billing terminals</li>
                  <li>2 KOT printers</li>
                  <li>Full reporting suite</li>
                  <li>Staff management</li>
                  <li>WhatsApp order updates</li>
                  <li>GST reports</li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">Book a Demo</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <div className="text-3xl font-bold mt-2">₹5,999<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Everything in Standard</li>
                  <li>Multi-outlet management</li>
                  <li>Central menu management</li>
                  <li>Advanced analytics</li>
                  <li>Dedicated onboarding support</li>
                  <li>Priority phone support</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Book a Demo</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            One-time hardware setup assistance available.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Do I need internet for the system to work?</h3>
              <p className="text-muted-foreground">The billing module works in offline mode. Orders and bills are synced to the cloud when internet is restored.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Which printers are supported?</h3>
              <p className="text-muted-foreground">We support all standard 80mm thermal printers (Epson, TVS, Bixolon, Generic). USB and network printers supported.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I manage multiple outlets from one account?</h3>
              <p className="text-muted-foreground">Yes, the Premium plan supports multi-outlet management with a central dashboard.</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Is training provided?</h3>
              <p className="text-muted-foreground">Yes. All plans include onboarding training via video call or on-site (for Kozhikode/Malappuram region).</p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I import my existing menu?</h3>
              <p className="text-muted-foreground">Yes. We assist with menu import via Excel/CSV as part of onboarding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo to see how <span style={{ color: 'lab(40 -28.07 -22.07)' }}>ntoric</span> Restaurant can streamline your operations.
          </p>
          <Link href="/contact">
            <Button size="lg">Book a Demo</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
