import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Farhan Khan - Backend Engineer',
  description: 'Backend engineer',
  icons: {
    icon: [
      {
        url: '/MYFACE.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/MYFACE.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/MYFACE.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/MYFACE.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
