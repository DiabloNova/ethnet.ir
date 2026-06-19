'use client'

import { motion } from 'framer-motion'
import { InvestmentCard } from '@/components/cards/InvestmentCard'
import { MorphingButton } from '@/components/ui/MorphingButton'

export function InvestmentSection() {
  const investments = [
    {
      title: 'DAO سرمایه گذاری',
      description: 'اتحاد خرد سرمایه گذاران',
      value: 45230.85,
      change: 12.5,
      icon: '🏛️',
    },
    {
      title: 'فلش لن',
      description: 'وام های فلش رمزنگاری',
      value: 23456.50,
      change: 18.3,
      icon: '⚡',
    },
    {
      title: 'سود جمع',
      description: 'درآمد تجمیع شده',
      value: 8932.75,
      change: 6.7,
      icon: '💎',
    },
  ]

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">
              💼 سرمایه گذاری
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-6"
          >
            <span className="gradient-text">پورتفوی سرمایه گذاری</span> شما
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            مشاهده عملکرد سرمایه گذاری های خود در طول زمان
          </motion.p>
        </motion.div>

        {/* Investment cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {investments.map((investment, i) => (
            <InvestmentCard key={i} {...investment} index={i} />
          ))}
        </motion.div>

        {/* Details section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">نحوه کار</h3>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'سپرده گذاری کنید',
                desc: 'مبلغ کمی از ارز دیجیتال را سپرده کنید',
              },
              {
                step: '2',
                title: 'سرمایه گذاری خودکار',
                desc: 'الگوریتم ما بهترین فرصات سرمایه گذاری را انتخاب می کند',
              },
              {
                step: '3',
                title: 'سود دریافت کنید',
                desc: 'سود تولید شده را هر روز دریافت کنید',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 items-start"
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center font-bold text-white flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.step}
                </motion.div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <MorphingButton
            label="به سرمایه گذاری بپردازید"
            variant="primary"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
