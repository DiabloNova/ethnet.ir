'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

interface InvestmentCardProps {
  title: string
  description: string
  value: number
  change: number
  icon?: React.ReactNode
  index?: number
}

export function InvestmentCard({
  title,
  description,
  value,
  change,
  icon,
  index = 0,
}: InvestmentCardProps) {
  const isPositive = change >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="crypto-card relative overflow-hidden border border-white/10 hover:border-blue-400/50 transition-colors">
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 dir-rtl">{title}</h3>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
            {icon && (
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                className="text-2xl"
              >
                {icon}
              </motion.div>
            )}
          </div>

          {/* Value and change */}
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold gradient-text">
                <AnimatedCounter value={value} decimals={2} />
              </span>
              <span className="text-xs text-slate-400">USD</span>
            </div>

            {/* Change percentage */}
            <motion.div
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold ${
                isPositive
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              <span>{isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(change).toFixed(2)}%</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        />
      </div>
    </motion.div>
  )
}
