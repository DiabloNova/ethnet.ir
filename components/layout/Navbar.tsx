'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/about', label: 'درباره ما' },
  { href: '/documents', label: 'مستندات' },
  { href: '/contact', label: 'تماس با ما' },
  { href: '/terms', label: 'شرایط استفاده' },
  { href: '/privacy', label: 'حریم خصوصی' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-[#050a1a]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="اتریوم نت - خانه">
            <motion.div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L3 7l9 5 9-5-9-5z" fill="white" opacity="0.9" />
                <path d="M3 12l9 5 9-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                <path d="M3 17l9 5 9-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </motion.div>
            <div className="leading-none">
              <div className="text-base font-black" style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                اتریوم نت
              </div>
              <div className="text-[10px] text-slate-500 font-light tracking-wider" dir="ltr">ethnet.ir</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="منوی اصلی">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(0,102,255,0.15)', border: '1px solid rgba(0,102,255,0.3)' }}
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)', boxShadow: '0 0 20px rgba(0,102,255,0.3)' }}
            >
              ورود / ثبت نام
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1.5 border border-white/10 bg-white/5"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="باز کردن منو"
              aria-expanded={mobileOpen}
            >
              <motion.span
                className="block w-5 h-px bg-white rounded-full"
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-white rounded-full"
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px bg-white rounded-full"
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 border-b border-white/10"
            style={{ background: '#050a1a' }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="منوی موبایل">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-blue-600/20 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/"
                className="mt-2 flex items-center justify-center px-4 py-3 rounded-xl text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)' }}
              >
                ورود / ثبت نام
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
