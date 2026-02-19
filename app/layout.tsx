import React from "react"
import type { Metadata } from 'next'
import { Syne, DM_Mono, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _syne   = Syne({ subsets: ["latin"], variable: '--font-syne' });
const _dmMono = DM_Mono({ subsets: ["latin"], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-dm-mono' });
const _outfit = Outfit({ subsets: ["latin"], weight: ['300', '400', '500', '600'], variable: '--font-outfit' });

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
      <body className={`${_syne.variable} ${_dmMono.variable} ${_outfit.variable} font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
