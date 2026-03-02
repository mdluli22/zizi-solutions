import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zizi Solutions',
  description: 'Intelligence solutions built around you.',
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
