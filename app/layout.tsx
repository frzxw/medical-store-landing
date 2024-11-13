import './globals.css'
import '../styles/layout.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wira Medical - Your Trusted Healthcare Equipment Partner',
  description: 'Distributor penyedia alat kesehatan terlengkap dan terpercaya',
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