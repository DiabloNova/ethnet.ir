'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/PageLayout'

const sections = [
  {
    id: 'intro',
    title: '۱. مقدمه و دامنه شمول',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
      </svg>
    ),
    content: `اتریوم نت (ethnet.ir) به حریم خصوصی کاربران خود اهمیت ویژه‌ای می‌دهد. این سند سیاست حریم خصوصی ما را تشریح می‌کند و توضیح می‌دهد چه اطلاعاتی جمع‌آوری، چگونه استفاده و چگونه محافظت می‌شود.

این سیاست بر تمامی خدمات ارائه‌شده توسط اتریوم نت، از جمله وب‌سایت، اپلیکیشن موبایل، APIها و هرگونه خدمات مرتبط اعمال می‌شود.

با استفاده از خدمات ما، شما با جمع‌آوری و استفاده از اطلاعات خود به روش‌هایی که در این سند توضیح داده شده موافقت می‌کنید. چنانچه با هر بخشی از این سیاست موافق نیستید، لطفاً از استفاده از خدمات ما خودداری فرمایید.`,
  },
  {
    id: 'collection',
    title: '۲. اطلاعات جمع‌آوری‌شده',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    content: `الف) اطلاعات هویتی:
• نام و نام خانوادگی
• آدرس ایمیل و شماره تلفن
• تصویر مدرک هویتی (برای احراز هویت KYC)
• تاریخ تولد و ملیت
• آدرس کیف پول دیجیتال

ب) اطلاعات مالی:
• تاریخچه تراکنش‌ها و سرمایه‌گذاری‌ها
• موجودی حساب و جریان وجوه
• آدرس‌های بلاکچین مرتبط با حساب

ج) اطلاعات فنی:
• آدرس IP و موقعیت جغرافیایی تقریبی
• نوع دستگاه، سیستم‌عامل و مرورگر
• لاگ‌های دسترسی و زمان‌بندی استفاده
• کوکی‌ها و شناسه‌های جلسه

د) اطلاعات ارتباطی:
• مکاتبات با تیم پشتیبانی
• بازخوردها و نظرات ارسالی`,
  },
  {
    id: 'usage',
    title: '۳. نحوه استفاده از اطلاعات',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    content: `اطلاعات جمع‌آوری‌شده تنها برای اهداف زیر استفاده می‌شود:

• ارائه و بهبود خدمات: پردازش تراکنش‌ها، مدیریت حساب کاربری و بهینه‌سازی عملکرد پلتفرم.

• احراز هویت و امنیت: تایید هویت کاربران، جلوگیری از تقلب، و محافظت از حساب‌ها در برابر دسترسی غیرمجاز.

• رعایت الزامات قانونی: پاسخ به دستورات قانونی، مبارزه با پولشویی (AML) و رعایت مقررات شناخت مشتری (KYC).

• ارتباط با کاربر: ارسال اطلاعیه‌های مهم، به‌روزرسانی‌های امنیتی و خبرنامه (با رضایت کاربر).

• تحلیل و بهبود: بررسی الگوهای استفاده برای بهبود تجربه کاربری و توسعه ویژگی‌های جدید.

ما هرگز اطلاعات شما را نمی‌فروشیم یا برای مقاصد تبلیغاتی شخص ثالث استفاده نمی‌کنیم.`,
  },
  {
    id: 'sharing',
    title: '۴. اشتراک‌گذاری اطلاعات',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    content: `اطلاعات کاربران تنها در موارد محدود زیر با اشخاص ثالث به اشتراک گذاشته می‌شود:

• ارائه‌دهندگان خدمات: شرکای فنی که در پردازش پرداخت، زیرساخت ابری و امنیت سایبری همکاری دارند — تنها به اطلاعاتی که برای ارائه خدماتشان ضروری است دسترسی دارند.

• الزامات قانونی: در صورت درخواست مقامات قضایی یا نظارتی مطابق قوانین جمهوری اسلامی ایران.

• اتفاقات امنیتی: در صورت مشاهده فعالیت مشکوک یا تلاش برای تقلب، اطلاعات لازم ممکن است با نهادهای انتظامی به اشتراک گذاشته شود.

• انتقال کسب‌وکار: در صورت ادغام یا خرید شرکت، با اطلاع قبلی به کاربران، اطلاعات ممکن است منتقل شود.

در تمامی موارد فوق، حداقل اطلاعات لازم به اشتراک گذاشته می‌شود.`,
  },
  {
    id: 'security',
    title: '۵. امنیت داده‌ها',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    content: `اتریوم نت از بالاترین استانداردهای امنیتی برای حفاظت از اطلاعات کاربران استفاده می‌کند:

• رمزنگاری انتها-به-انتها (E2E): تمام داده‌های در حال انتقال با پروتکل TLS 1.3 رمزنگاری می‌شوند.

• رمزنگاری در حالت سکون: اطلاعات حساس با الگوریتم AES-256 در پایگاه داده ذخیره می‌شوند.

• احراز هویت چندعاملی: ورود به حساب کاربری و عملیات حساس نیازمند تایید هویت چندمرحله‌ای است.

• ممیزی منظم: قراردادهای هوشمند و زیرساخت فنی به‌صورت دوره‌ای توسط شرکت‌های مستقل ممیزی می‌شوند.

• تیم واکنش به حوادث: تیم اختصاصی امنیت سایبری به‌صورت ۲۴/۷ شبکه را پایش می‌کند.

در صورت وقوع نقض داده که احتمالاً به حقوق کاربران آسیب می‌رساند، ظرف ۷۲ ساعت به کاربران اطلاع داده خواهد شد.`,
  },
  {
    id: 'retention',
    title: '۶. نگهداری داده‌ها',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    content: `• اطلاعات حساب فعال: تا زمان فعال بودن حساب کاربری و ۵ سال پس از آن (برای الزامات قانونی AML).

• سوابق تراکنش: حداقل ۷ سال طبق قوانین مالیاتی و مبارزه با پولشویی.

• مکاتبات پشتیبانی: ۳ سال از تاریخ آخرین تعامل.

• لاگ‌های امنیتی: ۱ سال برای ردیابی و پیشگیری از تقلب.

• کوکی‌های جلسه: تا پایان جلسه مرورگر یا حداکثر ۳۰ روز.

پس از اتمام دوره نگهداری، اطلاعات به‌صورت امن حذف یا به‌طور برگشت‌ناپذیر ناشناس‌سازی می‌شوند.`,
  },
  {
    id: 'rights',
    title: '۷. حقوق کاربران',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    content: `کاربران در رابطه با داده‌های شخصی خود دارای حقوق زیر هستند:

• حق دسترسی: درخواست کپی کامل اطلاعات شخصی ذخیره‌شده.

• حق اصلاح: درخواست تصحیح اطلاعات نادرست یا ناقص.

• حق حذف: درخواست حذف اطلاعات شخصی (مشروط به رعایت الزامات قانونی).

• حق محدودسازی: درخواست محدودکردن پردازش اطلاعات در موارد خاص.

• حق قابلیت انتقال: دریافت اطلاعات در قالب ساختاریافته و قابل خواندن توسط ماشین.

• حق اعتراض: مخالفت با پردازش اطلاعات برای اهداف بازاریابی.

برای اعمال هریک از این حقوق، با آدرس privacy@ethnet.ir تماس بگیرید. درخواست‌ها ظرف ۳۰ روز پاسخ داده می‌شوند.`,
  },
  {
    id: 'cookies',
    title: '۸. سیاست کوکی',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    content: `ما از کوکی‌های زیر استفاده می‌کنیم:

کوکی‌های ضروری (غیرقابل غیرفعال‌سازی):
• احراز هویت جلسه و نگهداری وضعیت ورود
• تنظیمات امنیتی CSRF
• تنظیمات زبان و منطقه زمانی

کوکی‌های تحلیلی (با رضایت کاربر):
• ردیابی ناشناس رفتار کاربر برای بهبود UX
• اندازه‌گیری عملکرد صفحات

کوکی‌های ترجیحی (با رضایت کاربر):
• ذخیره تنظیمات رابط کاربری
• حفظ تنظیمات نمایش داشبورد

شما می‌توانید کوکی‌های غیرضروری را از بخش تنظیمات حریم خصوصی پلتفرم مدیریت کنید.`,
  },
]

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <PageLayout
      title="سیاست حریم خصوصی"
      subtitle="حفاظت از اطلاعات شخصی کاربران برای ما یک تعهد اساسی است، نه صرفاً یک الزام قانونی."
      breadcrumb={[{ label: 'حریم خصوصی' }]}
    >
      <div className="max-w-5xl mx-auto px-4 pb-24">

        {/* Notice bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl px-5 py-4 mb-10 border"
          style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.2)' }}
        >
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-sm text-slate-300">آخرین به‌روزرسانی: <strong className="text-white">۱۵ آذر ۱۴۰۳</strong></span>
          </div>
          <span className="text-xs text-slate-500 border-r border-white/10 pr-4">مطابق با GDPR و قوانین ایران</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 rounded-2xl p-5 border" style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}>
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">فهرست بخش‌ها</h2>
              <nav className="space-y-1" aria-label="فهرست حریم خصوصی">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setActiveSection(s.id)}
                    className={`flex items-center gap-2.5 text-sm px-3 py-2 rounded-lg transition-all ${
                      activeSection === s.id ? 'text-white font-medium' : 'text-slate-500 hover:text-slate-300'
                    }`}
                    style={activeSection === s.id ? { background: 'rgba(16,185,129,0.12)', borderRight: '2px solid #10b981' } : {}}
                  >
                    <span className={activeSection === s.id ? 'text-emerald-400' : 'text-slate-600'}>{s.icon}</span>
                    <span className="leading-snug">{s.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs text-slate-600 mb-3">سوال درباره حریم خصوصی؟</p>
                <a
                  href="mailto:privacy@ethnet.ir"
                  className="block text-center py-2 px-3 rounded-lg text-xs font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  privacy@ethnet.ir
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 space-y-6">
            {sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onViewportEnter={() => setActiveSection(s.id)}
                className="rounded-2xl p-6 sm:p-8 border"
                style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-emerald-400" style={{ background: 'rgba(16,185,129,0.12)' }}>
                    {s.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-emerald-400">{s.title}</h2>
                </div>
                <div className="text-sm text-slate-300 leading-7 whitespace-pre-line">{s.content}</div>
              </motion.section>
            ))}

            {/* Contact DPO */}
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(0,212,255,0.06))', borderColor: 'rgba(16,185,129,0.15)' }}
            >
              <h2 className="text-lg font-black text-white mb-3">مسئول حفاظت از داده (DPO)</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                برای هرگونه سوال، درخواست یا شکایت مرتبط با حریم خصوصی، می‌توانید مستقیماً با مسئول حفاظت از داده‌های ما در تماس باشید.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'ایمیل', value: 'privacy@ethnet.ir', href: 'mailto:privacy@ethnet.ir' },
                  { label: 'تلفن', value: '۰۲۱-۱۲۳۴-۵۶۷۸', href: 'tel:02112345678' },
                  { label: 'پاسخ‌دهی', value: 'ظرف ۳۰ روز', href: null },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageLayout>
  )
}
