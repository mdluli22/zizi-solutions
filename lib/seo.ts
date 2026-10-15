import type { Metadata } from 'next'

export const siteUrl = 'https://www.zizisolutions.co.za'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Zizi Solutions`, description,
      url: path, siteName: 'Zizi Solutions', locale: 'en_ZA', type: 'website',
    },
    twitter: { card: 'summary', title: `${title} | Zizi Solutions`, description },
  }
}
