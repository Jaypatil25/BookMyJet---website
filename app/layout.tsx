import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BookMyJet',
  description: 'Created by Jay',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
