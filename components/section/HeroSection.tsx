'use client'

import { motion } from 'framer-motion'
import { CryptoScene } from '@/components/3d/CryptoScene'
import { MorphingButton } from '@/components/ui/MorphingButton'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden" style={{ backgroundColor: '#050a1a' }}>
      {/* Background effects */}
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: '#050a1a' }}>
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Radial gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl"
      >
        {/* Top badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-cyan-400 font-semibold">🚀 سرمایه گذاری خرد | Micro Investing</span>
          </motion.div>
        </motion.div>

        {/* Main title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="gradient-text">اتریوم نت</span>
            <br />
            <span className="text-4xl md:text-6xl text-slate-300">Ethnet.ir</span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            سرمایه‌گذاری امن در رمزنگاری با استفاده از فناوری‌های DAO و فلش لن
            <br />
            <span className="text-slate-400">Safe cryptocurrency micro investments using DAO & Flash Loans</span>
          </motion.p>
        </motion.div>

        {/* 3D Scene */}
        <motion.div variants={itemVariants} className="mb-16">
          <CryptoScene mobile={isMobile} />
        </motion.div>

        {/* Features grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '🔒', title: 'محفوظ', subtitle: 'Smart Contracts' },
            { icon: '⚡', title: 'سریع', subtitle: 'Flash Loans' },
            { icon: '💰', title: 'سود بخش', subtitle: 'DAO Benefits' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 text-center cursor-pointer group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="text-4xl mb-4 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-white font-bold mb-1 dir-rtl">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.subtitle}</p>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
          <MorphingButton label="شروع سرمایه گذاری" variant="primary" size="lg" />
          <MorphingButton label="درباره پروژه" variant="outline" size="lg" />
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '+10K', label: 'کاربر فعال' },
            { value: '$5M+', label: 'سرمایه تجمیع' },
            { value: '24.5%', label: 'میانگین سود' },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <motion.div className="text-4xl font-black gradient-text mb-2">
                {stat.value}
              </motion.div>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
