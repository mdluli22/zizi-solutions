import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from '../lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Zizi Solutions | Website Development & Custom Software', template: '%s | Zizi Solutions' },
  description: 'Website development, custom software, brand identity, data analytics and AI integration for businesses in South Africa and beyond.',
}

const business = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Zizi Solutions',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'Website development, custom software, brand identity, data analytics and AI integration.',
  email: 'admin@zizisolutions.co.za',
  telephone: '+27681545803',
  sameAs: ['https://www.tiktok.com/@zizisolutions', 'https://www.facebook.com/zizisolutions'],
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
      </body>
    </html>
  )
}
