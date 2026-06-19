'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/PageLayout'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const contactChannels = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: 'پست الکترونیک',
    value: 'support@ethnet.ir',
    desc: 'پاسخگویی در کمتر از ۲۴ ساعت',
    color: '#0066ff',
    href: 'mailto:support@ethnet.ir',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.35 2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'تلفن پشتیبانی',
    value: '۰۲۱-۱۲۳۴-۵۶۷۸',
    desc: 'شنبه تا چهارشنبه ۹ تا ۱۷',
    color: '#a855f7',
    href: 'tel:02112345678',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'تلگرام',
    value: '@ethnet_support',
    desc: 'پاسخگویی آنی در ساعات کاری',
    color: '#00d4ff',
    href: 'https://t.me/ethnet_support',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'آدرس دفتر',
    value: 'تهران، خیابان ولیعصر، برج آرمان، طبقه ۱۲',
    desc: 'ملاقات حضوری با وقت قبلی',
    color: '#10b981',
    href: '#',
  },
]

const faqItems = [
  {
    q: 'حداقل مبلغ سرمایه‌گذاری چقدر است؟',
    a: 'حداقل مبلغ سرمایه‌گذاری در اتریوم نت معادل ۱۰ دلار است. این امکان به همه افراد اجازه می‌دهد بدون نیاز به سرمایه کلان وارد دنیای سرمایه‌گذاری رمزنگاری شوند.',
  },
  {
    q: 'سود چه زمانی پرداخت می‌شود؟',
    a: 'سود حاصل از سرمایه‌گذاری به‌صورت روزانه محاسبه و به‌صورت هفتگی به کیف پول شما واریز می‌شود. تمام محاسبات به‌صورت خودکار و شفاف روی بلاکچین انجام می‌پذیرد.',
  },
  {
    q: 'آیا می‌توانم سرمایه‌ام را هر زمان برداشت کنم؟',
    a: 'بله، سرمایه‌گذاران می‌توانند در هر زمان درخواست برداشت دهند. برداشت‌ها معمولاً ظرف ۲۴ تا ۴۸ ساعت پردازش می‌شوند.',
  },
  {
    q: 'پلتفرم چه ارزهای دیجیتالی را پشتیبانی می‌کند؟',
    a: 'در حال حاضر اتریوم نت از ارزهای ETH، USDT، USDC و DAI پشتیبانی می‌کند. در آینده ارزهای بیشتری اضافه خواهند شد.',
  },
]

function InputField({
  label, id, type = 'text', placeholder, required, value, onChange, as,
}: {
  label: string; id: string; type?: string; placeholder?: string; required?: boolean;
  value: string; onChange: (v: string) => void; as?: 'textarea'
}) {
  const baseClass = `w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 border focus:outline-none focus:ring-1 transition-all`
  const style = { background: '#050a1a', borderColor: 'rgba(255,255,255,0.1)' }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} resize-none`}
          style={style}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClass}
          style={style}
        />
      )}
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout
      title="تماس با ما"
      subtitle="هر سوال، پیشنهاد یا انتقادی دارید با تیم پشتیبانی اتریوم نت در میان بگذارید. ما پاسخگوی شما هستیم."
      breadcrumb={[{ label: 'تماس با ما' }]}
    >
      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-16">

        {/* Contact channels */}
        <motion.section variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactChannels.map((ch, i) => (
              <motion.a
                key={i}
                href={ch.href}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="block rounded-2xl p-5 border text-center group transition-all"
                style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `${ch.color}18`, color: ch.color, border: `1px solid ${ch.color}25` }}
                >
                  {ch.icon}
                </div>
                <h3 className="font-bold text-white mb-1 text-sm">{ch.title}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: ch.color }}>{ch.value}</p>
                <p className="text-xs text-slate-500">{ch.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact form */}
        <motion.section
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-8"
        >
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}>
              <h2 className="text-xl font-black text-white mb-6">ارسال پیام مستقیم</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">پیام شما ارسال شد!</h3>
                  <p className="text-slate-400 text-sm">تیم پشتیبانی ما در اسرع وقت با شما تماس خواهد گرفت.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    ارسال پیام دیگر
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField label="نام و نام خانوادگی" id="name" placeholder="علی رضایی" required value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} />
                    <InputField label="آدرس ایمیل" id="email" type="email" placeholder="ali@example.com" required value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
                  </div>
                  <InputField label="موضوع" id="subject" placeholder="موضوع پیام خود را بنویسید" required value={form.subject} onChange={(v) => setForm((f) => ({ ...f, subject: v }))} />
                  <InputField label="متن پیام" id="message" placeholder="پیام تفصیلی خود را اینجا بنویسید..." required as="textarea" value={form.message} onChange={(v) => setForm((f) => ({ ...f, message: v }))} />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)', boxShadow: '0 0 25px rgba(0,102,255,0.3)' }}
                  >
                    ارسال پیام
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl p-6 border" style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}>
              <h3 className="font-bold text-white mb-4">ساعات پشتیبانی</h3>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'شنبه تا چهارشنبه', hours: '۹:۰۰ — ۱۷:۰۰' },
                  { day: 'پنج‌شنبه', hours: '۹:۰۰ — ۱۳:۰۰' },
                  { day: 'جمعه', hours: 'تعطیل' },
                  { day: 'پشتیبانی آنلاین', hours: '۲۴/۷' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-slate-400">{row.day}</span>
                    <span className={row.hours === 'تعطیل' ? 'text-slate-600' : 'text-white font-medium'} dir="ltr">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 border" style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.08), rgba(168,85,247,0.08))', borderColor: 'rgba(0,102,255,0.15)' }}>
              <h3 className="font-bold text-white mb-2">پشتیبانی اضطراری</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">در صورت بروز مشکل فنی یا امنیتی با اشکال در سرمایه‌گذاری، بلافاصله با خط اضطراری تماس بگیرید.</p>
              <a href="tel:02112345679" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.6 4.35 2 2 0 0 1 3.57 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span dir="ltr">۰۲۱-۱۲۳۴-۵۶۷۹</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">سوالات متداول</h2>
            <p className="text-slate-400">پاسخ سوالات رایج کاربران را اینجا بیابید.</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{ background: '#0d1a35', borderColor: openFaq === i ? 'rgba(0,102,255,0.3)' : 'rgba(255,255,255,0.07)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-right text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mr-3 text-slate-500"
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </PageLayout>
  )
}
