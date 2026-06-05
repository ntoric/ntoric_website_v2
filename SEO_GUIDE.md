# SEO Guide for Ntoric Website

This guide documents the SEO implementation for the Ntoric website and serves as a reference for future SEO improvements.

## Table of Contents
1. [Current SEO Implementation](#current-seo-implementation)
2. [Page Metadata Structure](#page-metadata-structure)
3. [Structured Data (Schema.org)](#structured-data-schemaorg)
4. [Technical SEO](#technical-seo)
5. [Best Practices](#best-practices)
6. [Future Improvements](#future-improvements)

---

## Current SEO Implementation

### Files Modified for SEO

**Page Metadata Files:**
- `src/app/page.tsx` - Home page
- `src/app/about/page.tsx` - About page
- `src/app/services/page.tsx` - Services page
- `src/app/contact/page.tsx` - Contact page
- `src/app/products/page.tsx` - Products page
- `src/app/products/ntoric-commerce/page.tsx` - Commerce product
- `src/app/products/ntoric-restaurant/page.tsx` - Restaurant product
- `src/app/products/ntoric-billing/page.tsx` - Billing product

**Technical SEO Files:**
- `src/app/layout.tsx` - Global metadata and structured data
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `public/robots.txt` - Crawler instructions

---

## Page Metadata Structure

### Standard Metadata for All Pages

Every page should include the following metadata in the `metadata` export:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Compelling description under 160 characters',
  keywords: [
    'primary keyword',
    'secondary keyword',
    'location-specific keyword',
    'service-specific keyword',
  ],
  openGraph: {
    title: 'OG Title (can be same as page title)',
    description: 'OG description (can be same as page description)',
    url: 'https://ntoric.com/page-path',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Card Title',
    description: 'Twitter Card Description',
  },
  alternates: {
    canonical: 'https://ntoric.com/page-path',
  },
}
```

### Title Guidelines
- Keep under 60 characters for optimal display
- Include brand name: "Page Title | Ntoric" (handled by layout template)
- Use descriptive, keyword-rich titles
- Front-load important keywords

### Description Guidelines
- Keep under 160 characters
- Write compelling copy that encourages clicks
- Include primary keywords naturally
- Describe the page content accurately

### Keywords Guidelines
- Use 5-10 relevant keywords per page
- Focus on long-tail keywords (3+ words)
- Include location-specific terms (India, Kerala, etc.)
- Mix of service and product keywords
- Avoid keyword stuffing

### Open Graph Tags
- Used for social media sharing (Facebook, LinkedIn, etc.)
- Ensure `url` matches the canonical URL
- `locale: 'en_IN'` for Indian English
- Add `images` array when OG images are available

### Twitter Card Tags
- `card: 'summary_large_image'` for rich tweets
- Add `images` when Twitter card images are available
- Keep titles and descriptions consistent with OG tags

### Canonical URLs
- Prevents duplicate content issues
- Must be absolute URLs (https://ntoric.com/...)
- Match the page's primary URL
- Use lowercase for consistency

---

## Structured Data (Schema.org)

### Current Implementation

The site uses two schema types in `src/app/layout.tsx`:

#### 1. Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ntoric",
  "url": "https://ntoric.com",
  "logo": "https://ntoric.com/logo.png",
  "description": "Software development and SaaS company...",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://linkedin.com/company/ntoric",
    "https://github.com/ntoric"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8129490227",
    "contactType": "sales",
    "email": "hello@ntoric.com",
    "availableLanguage": "English"
  }
}
```

#### 2. WebSite Schema
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ntoric",
  "url": "https://ntoric.com",
  "description": "Software development and SaaS company...",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ntoric.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### Future Schema Opportunities

Consider adding these schemas when relevant:

**Product Schema** (for product pages)
```json
{
  "@type": "Product",
  "name": "Ntoric Commerce",
  "description": "E-commerce platform...",
  "offers": {
    "@type": "Offer",
    "price": "999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
}
```

**Service Schema** (for services page)
```json
{
  "@type": "Service",
  "name": "Web Development",
  "description": "Custom web development services...",
  "provider": {
    "@type": "Organization",
    "name": "Ntoric"
  }
}
```

**FAQ Schema** (for FAQ sections)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

**BreadcrumbList Schema** (for navigation)
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ntoric.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://ntoric.com/products"
    }
  ]
}
```

---

## Technical SEO

### Robots.txt
Located at `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://ntoric.com/sitemap.xml
```

- Allows all crawlers to access the site
- References the sitemap for discovery

### Sitemap
Located at `src/app/sitemap.ts`:
- Dynamically generates XML sitemap
- Includes all main pages with appropriate priorities
- Sets change frequency for each page type
- Automatically updates when pages change

**Priority Guidelines:**
- Home: 1.0 (highest)
- Products: 0.9 (high - frequently updated)
- Main pages (about, services, contact): 0.8
- Product subpages: 0.7

**Change Frequency Guidelines:**
- Home: weekly
- Products: weekly
- Main pages: monthly
- Product subpages: monthly

### Global Metadata (layout.tsx)
The root layout includes:
- Default title template: `%s | Ntoric`
- Default description
- Default keywords
- OpenGraph configuration
- Twitter Card configuration
- Robots meta (index: true, follow: true)
- metadataBase for absolute URLs

---

## Best Practices

### When Adding New Pages

1. **Add to sitemap.ts** - Include the new page with appropriate priority and change frequency
2. **Add metadata** - Include title, description, keywords, OG tags, Twitter tags, canonical URL
3. **Use semantic HTML** - Proper heading hierarchy (h1, h2, h3)
4. **Add alt text** - All images must have descriptive alt attributes
5. **Internal linking** - Link to relevant pages using descriptive anchor text
6. **URL structure** - Use lowercase, hyphen-separated URLs

### Content Guidelines

- **Headings**: Use one H1 per page, followed by H2s and H3s in hierarchy
- **Content length**: Aim for 300+ words per page for better SEO
- **Keyword density**: 1-2% natural keyword usage
- **Internal links**: 3-5 relevant internal links per page
- **External links**: Link to authoritative sources when relevant

### Image Optimization

- Use WebP format when possible
- Compress images before uploading
- Include descriptive alt text
- Use appropriate dimensions (avoid unnecessarily large images)
- Consider lazy loading for below-fold images

### Performance

- Optimize Core Web Vitals (LCP, FID, CLS)
- Minimize JavaScript bundle size
- Use Next.js Image component for automatic optimization
- Enable compression on server
- Implement caching strategies

---

## Future Improvements

### High Priority

1. **Add Open Graph Images**
   - Create OG images for each page (1200x630px)
   - Add `images` array to openGraph metadata
   - Add Twitter card images

2. **Add Product Schema**
   - Implement Product schema for each product page
   - Include pricing, availability, and reviews

3. **Add FAQ Schema**
   - Implement FAQPage schema for FAQ sections
   - Helps with rich snippets in search results

4. **Add Breadcrumb Schema**
   - Implement BreadcrumbList schema
   - Improves navigation in search results

### Medium Priority

5. **Add Service Schema**
   - Implement Service schema for services page
   - Detail each service offering

6. **Implement Local SEO**
   - Add LocalBusiness schema
   - Include full address details
   - Add Google Maps integration
   - Encourage Google reviews

7. **Add Article Schema**
   - If adding blog/content section
   - Include author, publish date, etc.

8. **Hreflang Tags**
   - If adding multiple language versions
   - Implement hreflang for language targeting

### Low Priority

9. **Add Review Schema**
   - When customer reviews are available
   - Aggregate rating schema

10. **Add Event Schema**
    - For webinars, events, or launches

11. **Video SEO**
    - Add VideoObject schema for any videos
    - Video sitemap

12. **AMP Pages**
    - Consider AMP for blog content
    - Faster mobile loading

---

## Monitoring and Maintenance

### Tools to Use

**Google Search Console**
- Submit sitemap
- Monitor indexing status
- Check for crawl errors
- Review performance reports
- Submit for indexing when content changes

**Google Analytics**
- Track organic traffic
- Monitor user behavior
- Identify top-performing pages
- Track conversion goals

**PageSpeed Insights**
- Monitor Core Web Vitals
- Identify performance issues
- Mobile and desktop scores

### Regular Tasks

**Monthly:**
- Check Search Console for errors
- Review organic traffic trends
- Update sitemap if pages added/removed
- Check for broken links

**Quarterly:**
- Review keyword rankings
- Update content based on performance
- Audit internal linking structure
- Check competitor SEO strategies

**Annually:**
- Full SEO audit
- Update keyword strategy
- Review and update metadata
- Check for deprecated SEO practices

---

## Common SEO Issues to Avoid

1. **Duplicate Content**
   - Use canonical URLs
   - Avoid copying content from other sites
   - Use 301 redirects for moved pages

2. **Broken Links**
   - Regularly check for 404 errors
   - Fix or redirect broken links
   - Update internal links when pages move

3. **Thin Content**
   - Ensure each page has substantial content
   - Avoid doorway pages
   - Provide value to users

4. **Keyword Stuffing**
   - Write naturally for users first
   - Avoid excessive keyword repetition
   - Focus on semantic relevance

5. **Missing Alt Text**
   - All images must have alt attributes
   - Describe images accurately
   - Include keywords when relevant

6. **Slow Page Speed**
   - Optimize images
   - Minimize JavaScript
   - Use caching
   - Choose fast hosting

7. **Mobile Issues**
   - Ensure responsive design
   - Test on various devices
   - Avoid intrusive interstitials

8. **Technical Errors**
   - Fix 5xx server errors
   - Resolve 4xx client errors
   - Ensure proper SSL/HTTPS

---

## Quick Reference

### Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Description (under 160 chars)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: 'https://ntoric.com/path',
    siteName: 'Ntoric',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
  },
  alternates: {
    canonical: 'https://ntoric.com/path',
  },
}
```

### Adding to Sitemap
```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

### Schema Template
```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "SchemaType",
  // schema properties
}
```

---

## Contact & Support

For SEO-related questions or updates, refer to this guide first. When making significant SEO changes, consider:

1. Testing in a staging environment first
2. Monitoring impact in Search Console
3. Documenting changes for future reference
4. Keeping this guide updated with new practices

Last updated: June 2026
