'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageLayout } from '@/components/layout/PageLayout'

const categories = [
  { id: 'all', label: 'همه' },
  { id: 'technical', label: 'فنی' },
  { id: 'legal', label: 'حقوقی' },
  { id: 'financial', label: 'مالی' },
  { id: 'guide', label: 'راهنما' },
]

const documents = [
  {
    id: 1,
    category: 'technical',
    title: 'مستندات قرارداد هوشمند DAO',
    desc: 'توضیحات فنی کامل قراردادهای هوشمند حاکمیتی DAO شامل ABI، توابع، رویدادها و مثال‌های تعاملی.',
    version: 'v2.1.0',
    date: '۱۵ آذر ۱۴۰۳',
    size: '۲.۴ مگابایت',
    badge: 'بروز',
    badgeColor: '#10b981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Solidity', 'Ethereum', 'ERC-20'],
  },
  {
    id: 2,
    category: 'technical',
    title: 'راهنمای یکپارچه‌سازی API',
    desc: 'مستندات کامل REST API و WebSocket برای توسعه‌دهندگانی که می‌خواهند خدمات اتریوم نت را در پروژه‌های خود ادغام کنند.',
    version: 'v3.0.2',
    date: '۱ آذر ۱۴۰۳',
    size: '۱.۸ مگابایت',
    badge: 'بروز',
    badgeColor: '#10b981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
    tags: ['REST', 'WebSocket', 'JSON'],
  },
  {
    id: 3,
    category: 'technical',
    title: 'گزارش ممیزی امنیتی',
    desc: 'نتایج کامل ممیزی امنیتی قراردادهای هوشمند توسط شرکت مستقل CertiK شامل یافته‌ها، اصلاحات و امتیاز نهایی.',
    version: 'v2024-Q4',
    date: '۱۰ آبان ۱۴۰۳',
    size: '۵.۲ مگابایت',
    badge: 'تایید شده',
    badgeColor: '#0066ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-500',
    tags: ['Security', 'CertiK', 'Audit'],
  },
  {
    id: 4,
    category: 'legal',
    title: 'توافق‌نامه سطح خدمات (SLA)',
    desc: 'شرایط و تعهدات پلتفرم در قبال کاربران شامل زمان کارکرد تضمین‌شده، جریمه‌های عدم تعهد و روش‌های جبران خسارت.',
    version: 'v1.3',
    date: '۲۰ مهر ۱۴۰۳',
    size: '۰.۸ مگابایت',
    badge: 'قانونی',
    badgeColor: '#a855f7',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-500',
    tags: ['SLA', 'قانونی', 'تعهدات'],
  },
  {
    id: 5,
    category: 'legal',
    title: 'سیاست مبارزه با پولشویی (AML)',
    desc: 'رویه‌های اتریوم نت برای تطابق با مقررات مبارزه با پولشویی، تامین مالی تروریسم و الزامات KYC.',
    version: 'v2.0',
    date: '۵ مهر ۱۴۰۳',
    size: '۱.۱ مگابایت',
    badge: 'قانونی',
    badgeColor: '#a855f7',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
    tags: ['AML', 'KYC', 'Compliance'],
  },
  {
    id: 6,
    category: 'financial',
    title: 'گزارش مالی سه‌ماهه سوم ۱۴۰۳',
    desc: 'عملکرد مالی پلتفرم، حجم تراکنش‌ها، توزیع سود، ترکیب دارایی‌ها و پیش‌بینی‌های مالی برای دوره آتی.',
    version: 'Q3-1403',
    date: '۱ آذر ۱۴۰۳',
    size: '۳.۷ مگابایت',
    badge: 'گزارش',
    badgeColor: '#f59e0b',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-500',
    tags: ['مالی', 'گزارش', 'Q3 1403'],
  },
  {
    id: 7,
    category: 'financial',
    title: 'سند توکن‌نومیکس EN',
    desc: 'توضیح کامل ساختار اقتصادی توکن EN شامل توزیع اولیه، برنامه استیکینگ، مکانیزم سوزاندن و پیش‌بینی تورم.',
    version: 'v1.5',
    date: '۱۵ شهریور ۱۴۰۳',
    size: '۱.۶ مگابایت',
    badge: 'بروز',
    badgeColor: '#10b981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    gradient: 'from-amber-500 to-yellow-500',
    tags: ['Tokenomics', 'EN', 'Staking'],
  },
  {
    id: 8,
    category: 'guide',
    title: 'راهنمای شروع سرمایه‌گذاری',
    desc: 'مرحله‌به‌مرحله از ایجاد حساب تا اولین سرمایه‌گذاری: ثبت‌نام، احراز هویت، واریز و مدیریت سبد.',
    version: 'v4.0',
    date: '۱۰ آذر ۱۴۰۳',
    size: '۲.۰ مگابایت',
    badge: 'راهنما',
    badgeColor: '#00d4ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8l4 4-4 4M8 12h7" />
      </svg>
    ),
    gradient: 'from-cyan-500 to-blue-500',
    tags: ['راهنما', 'مبتدی', 'KYC'],
  },
  {
    id: 9,
    category: 'guide',
    title: 'راهنمای مشارکت در DAO',
    desc: 'آموزش کامل نحوه رای‌گیری، ارائه پیشنهاد، واگذاری رای و مشارکت موثر در حاکمیت پلتفرم.',
    version: 'v2.2',
    date: '۲۵ آبان ۱۴۰۳',
    size: '۱.۳ مگابایت',
    badge: 'راهنما',
    badgeColor: '#00d4ff',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-violet-500',
    tags: ['DAO', 'حاکمیت', 'رای'],
  },
]

const stats = [
  { value: '۹', label: 'سند منتشر شده' },
  { value: '۳', label: 'ممیزی مستقل' },
  { value: '۱۰۰٪', label: 'شفافیت مالی' },
  { value: '۲۴ ساعت', label: 'به‌روزرسانی' },
]

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = documents.filter((doc) => {
    const matchCategory = activeCategory === 'all' || doc.category === activeCategory
    const q = search.trim().toLowerCase()
    const matchSearch = !q || doc.title.toLowerCase().includes(q) || doc.desc.toLowerCase().includes(q) || doc.tags.some((t) => t.toLowerCase().includes(q))
    return matchCategory && matchSearch
  })

  return (
    <PageLayout
      title="مستندات و اسناد"
      subtitle="دسترسی به تمام مستندات فنی، حقوقی، مالی و راهنماهای استفاده از اتریوم نت در یک مکان."
      breadcrumb={[{ label: 'مستندات' }]}
    >
      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-10">

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl p-4 text-center border" style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="text-lg font-black text-white mb-0.5">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              placeholder="جستجو در مستندات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 border focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
              style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.1)' }}
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap"
                style={
                  activeCategory === cat.id
                    ? { background: 'linear-gradient(135deg, #0066ff, #a855f7)', color: '#fff' }
                    : { background: '#0d1a35', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-sm text-slate-500">
          {filtered.length} سند یافت شد
        </p>

        {/* Documents grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-5 border flex flex-col gap-4 group"
                  style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${doc.gradient} text-white flex-shrink-0`}>
                      {doc.icon}
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: `${doc.badgeColor}18`, color: doc.badgeColor, border: `1px solid ${doc.badgeColor}30` }}
                    >
                      {doc.badge}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2 leading-snug">{doc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{doc.desc}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {doc.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-md text-slate-500" style={{ background: 'rgba(255,255,255,0.05)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta + download */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="text-xs text-slate-600 space-y-0.5">
                      <p>{doc.version} &bull; {doc.size}</p>
                      <p>{doc.date}</p>
                    </div>
                    <button
                      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                      style={{ background: 'rgba(0,102,255,0.12)', color: '#60a5fa', border: '1px solid rgba(0,102,255,0.2)' }}
                      aria-label={`دانلود ${doc.title}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      دانلود
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center rounded-2xl border"
              style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <p className="text-slate-500 text-sm">سندی با این مشخصات یافت نشد.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all') }} className="mt-4 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2">
                پاک کردن فیلترها
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Request document CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl p-6 sm:p-8 border text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.07), rgba(168,85,247,0.07))', borderColor: 'rgba(0,102,255,0.15)' }}
        >
          <h2 className="text-lg font-black text-white mb-2">سند مورد نظر را نیافتید؟</h2>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">در صورت نیاز به اطلاعات بیشتر یا درخواست اسناد تخصصی با تیم ما تماس بگیرید.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            تماس با تیم
          </a>
        </motion.div>

      </div>
    </PageLayout>
  )
}
