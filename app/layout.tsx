import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from '../lib/seo'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Zizi Solutions | Websites, Business Automation & Data Analytics', template: '%s | Zizi Solutions' },
  description: 'Website development and SEO, business automation and AI integration, and data dashboards and reporting for small and medium businesses in South Africa and beyond.',
}

const business = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Zizi Solutions',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Website development and SEO, business automation and AI integration, and data dashboards and reporting.',
  email: 'admin@zizisolutions.co.za',
  telephone: '+27781897780',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, '\\u003c') }} />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
