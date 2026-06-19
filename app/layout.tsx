import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'اتریوم نت - Ethnet.ir | سرمایه گذاری خرد رمزنگاری',
  description: 'پلتفرم سرمایه گذاری خرد در رمزنگاری با بهره گیری از DAO و فلش لن | Micro Investment Platform',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  keywords: ['سرمایه گذاری', 'رمزنگاری', 'DAO', 'فلش لن', 'crypto', 'investment'],
  openGraph: {
    title: 'اتریوم نت - Ethnet.ir',
    description: 'سرمایه گذاری خرد امن در رمزنگاری',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0066ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0066ff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`} style={{ backgroundColor: '#050a1a', color: '#f0f4ff' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden" style={{ backgroundColor: '#050a1a', color: '#f0f4ff' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
