'use client'

import { motion } from 'framer-motion'

export function FeaturesSection() {
  const features = [
    {
      icon: '🔐',
      title: 'امنیت تمام',
      description: 'تمام تراکنش ها با قرارداد های هوشمند محفوظ هستند',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '⚡',
      title: 'سرعت فوق العاده',
      description: 'فلش لن برای سرمایه گذاری فوری و بازگشت سود',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💰',
      title: 'سود بالا',
      description: 'متوسط سود 20-25 درصد در سال',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🌍',
      title: 'دسترسی جهانی',
      description: 'هر جا که باشید می توانید سرمایه گذاری کنید',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '📊',
      title: 'داشبورد هوشمند',
      description: 'تحلیل بلادرنگ عملکرد سرمایه گذاری',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '🤝',
      title: 'جامعه قوی',
      description: 'حمایت از گروه کاربران و توسعه پروژه',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-50 animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">
            ✨ ویژگی ها
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
            <span className="gradient-text">قابلیت های پیشرفته</span> سیستم
          </h2>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 relative h-full overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4 inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 dir-rtl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed dir-rtl">
                    {feature.description}
                  </p>

                  {/* Bottom gradient line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            نظر <span className="gradient-text">کاربران</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'علی محمدی',
                role: 'سرمایه گذار',
                quote: 'بهترین پلتفرم سرمایه گذاری که تاکنون استفاده کرده ام. سود بسیار خوب و پشتیبانی عالی.',
                avatar: '👨',
              },
              {
                name: 'فاطمه احمدی',
                role: 'متخصص رمزنگاری',
                quote: 'امنیت و شفافیت در این سیستم بی نظیر است. توصیه می کنم.',
                avatar: '👩',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
