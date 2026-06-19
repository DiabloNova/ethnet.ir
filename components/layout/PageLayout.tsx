'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from './Navbar'
import { Footer } from '@/components/sections/Footer'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

export function PageLayout({ children, title, subtitle, breadcrumb }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: '#050a1a', color: '#f0f4ff' }}>
        {/* Page hero header */}
        <div className="relative pt-24 pb-16 px-4 overflow-hidden">
          {/* Background gradient blobs */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: '#0066ff' }} />
            <div className="absolute top-10 left-1/4 w-56 h-56 rounded-full blur-3xl opacity-15" style={{ background: '#a855f7' }} />
            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
              <defs>
                <pattern id="page-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#page-grid)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            {breadcrumb && breadcrumb.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6"
                aria-label="مسیر صفحه"
              >
                <Link href="/" className="hover:text-slate-300 transition-colors">خانه</Link>
                {breadcrumb.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span>/</span>
                    {item.href ? (
                      <Link href={item.href} className="hover:text-slate-300 transition-colors">{item.label}</Link>
                    ) : (
                      <span className="text-slate-400">{item.label}</span>
                    )}
                  </span>
                ))}
              </motion.nav>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight"
              style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-8 h-px w-24 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #0066ff, #a855f7, transparent)' }}
            />
          </div>
        </div>

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
