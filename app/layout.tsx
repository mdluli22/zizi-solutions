import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zizi Solutions',
  description: 'Intelligent solutions built around you.',
  keywords: [
    "web development South Africa",
    "software company Durban",
    "website design South Africa",
    "custom software development",
    "Next.js developers South Africa",
  ],
  metadataBase: new URL("https://www.zizisolutions.co.za"),
  openGraph: {
    title: "Zizi Solutions",
    description:
      "Web development and software solutions for modern businesses.",
    url: "https://www.zizisolutions.co.za",
    siteName: "Zizi Solutions",
    locale: "en_ZA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
