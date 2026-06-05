import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import TidioChat from "@/components/TidioChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ntoric — Building Software That Works",
    template: "%s | Ntoric",
  },
  description:
    "Ntoric is a software development and SaaS company from India. We build web apps, mobile apps, desktop software, and AI-powered solutions for startups and businesses.",
  keywords: [
    "software development",
    "SaaS",
    "web apps",
    "mobile apps",
    "AI solutions",
    "India",
    "Kerala",
    "Flutter",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ntoric" }],
  creator: "Ntoric",
  metadataBase: new URL("https://ntoric.com"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Ntoric",
    title: "Ntoric — Building Software That Works",
    description:
      "Software development and SaaS company. We build web apps, mobile apps, desktop software, and AI-powered solutions for businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ntoric — Building Software That Works",
    description:
      "Software development and SaaS company. We build web apps, mobile apps, desktop software, and AI-powered solutions for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ntoric",
  url: "https://ntoric.com",
  logo: "https://ntoric.com/logo.png",
  description:
    "Software development and SaaS company building web apps, mobile apps, desktop software, and AI-powered solutions.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/ntoric",
    "https://github.com/ntoric",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8129490227",
    contactType: "sales",
    email: "hello@ntoric.com",
    availableLanguage: "English",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ntoric",
  url: "https://ntoric.com",
  description: "Software development and SaaS company from India building web apps, mobile apps, desktop software, and AI-powered solutions.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ntoric.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LoadingScreen />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <TidioChat />
      </body>
    </html>
  );
}
