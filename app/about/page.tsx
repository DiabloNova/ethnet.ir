'use client'

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

const teamMembers = [
  {
    name: 'دکتر علی رضایی',
    role: 'مدیرعامل و هم‌بنیان‌گذار',
    bio: 'دکترای مهندسی نرم‌افزار از دانشگاه تهران، بیش از ۱۵ سال تجربه در حوزه بلاکچین و امور مالی غیرمتمرکز.',
    gradient: 'from-blue-500 to-cyan-500',
    initials: 'ع ر',
  },
  {
    name: 'مهندس سارا موسوی',
    role: 'مدیر فنی ارشد',
    bio: 'متخصص قراردادهای هوشمند اتریوم، مشارکت‌کننده در پروتکل‌های برجسته DeFi با بیش از ۵۰ پروژه موفق.',
    gradient: 'from-purple-500 to-pink-500',
    initials: 'س م',
  },
  {
    name: 'محمد حسینی',
    role: 'مدیر محصول',
    bio: 'کارشناس ارشد تجربه کاربری در حوزه فین‌تک، طراح استراتژی محصولات دیجیتال با تمرکز بر بازارهای نوظهور.',
    gradient: 'from-emerald-500 to-teal-500',
    initials: 'م ح',
  },
  {
    name: 'زهرا کریمی',
    role: 'مدیر امنیت اطلاعات',
    bio: 'حسابرس امنیتی قراردادهای هوشمند، متخصص رمزنگاری و پروتکل‌های اجماع با مدرک CEH و CISSP.',
    gradient: 'from-orange-500 to-red-500',
    initials: 'ز ک',
  },
]

const milestones = [
  { year: '۱۴۰۱', title: 'تاسیس شرکت', desc: 'اتریوم نت با هدف دموکراتیزه‌کردن سرمایه‌گذاری رمزنگاری تاسیس شد.' },
  { year: '۱۴۰۱', title: 'اولین سرمایه‌گذار', desc: 'جذب نخستین گروه سرمایه‌گذاران و آغاز آزمون بتا با ۵۰۰ کاربر.' },
  { year: '۱۴۰۲', title: 'راه‌اندازی DAO', desc: 'پیاده‌سازی حاکمیت غیرمتمرکز و واگذاری تصمیم‌گیری به جامعه کاربران.' },
  { year: '۱۴۰۲', title: 'یک میلیون دلار', desc: 'تجاوز حجم تجمیع سرمایه از مرز یک میلیون دلار و پیوستن ۵۰۰۰ کاربر.' },
  { year: '۱۴۰۳', title: 'گسترش بین‌المللی', desc: 'توسعه پلتفرم به زبان انگلیسی و آغاز خدمات‌رسانی به کاربران بین‌المللی.' },
  { year: '۱۴۰۳', title: 'امروز', desc: 'بیش از ۱۰,۰۰۰ کاربر فعال و مدیریت بیش از ۵ میلیون دلار سرمایه.' },
]

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'امنیت اول',
    desc: 'تمامی دارایی‌ها توسط قراردادهای هوشمند ممیزی‌شده محافظت می‌شوند و هیچ‌گاه تحت کنترل متمرکز قرار نمی‌گیرند.',
    color: '#0066ff',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'شفافیت کامل',
    desc: 'تمام تراکنش‌ها و عملیات‌های مالی به‌صورت عمومی روی بلاکچین ثبت و قابل ردیابی هستند.',
    color: '#a855f7',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'حاکمیت مردمی',
    desc: 'هر سرمایه‌گذار متناسب با سهم خود در تصمیم‌گیری‌های کلیدی پلتفرم حق رای دارد.',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'نوآوری مستمر',
    desc: 'تیم فنی ما پیوسته در حال توسعه الگوریتم‌های جدید برای بهینه‌سازی سود و کاهش ریسک است.',
    color: '#10b981',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-black mb-3 leading-snug"
      style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
    >
      {children}
    </h2>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 border ${className}`}
      style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.07)' }}
    >
      {children}
    </div>
  )
}

export default function AboutPage() {
  return (
    <PageLayout
      title="درباره اتریوم نت"
      subtitle="ما یک تیم متخصص از مهندسان بلاکچین، متخصصان مالی و طراحان محصول هستیم که با هدف دسترسی عادلانه به سرمایه‌گذاری رمزنگاری گرد هم آمده‌ایم."
      breadcrumb={[{ label: 'درباره ما' }]}
    >
      <div className="max-w-5xl mx-auto px-4 pb-24 space-y-20">

        {/* Mission */}
        <motion.section variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <SectionTitle>ماموریت ما</SectionTitle>
                <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                  <p>
                    اتریوم نت با این باور بنیان گذاشته شده که سرمایه‌گذاری در دارایی‌های دیجیتال نباید امتیاز اختصاصی سرمایه‌گذاران بزرگ باشد. ما پلتفرمی ساخته‌ایم که هر فردی — صرف‌نظر از میزان سرمایه اولیه — بتواند از مزایای اکوسیستم مالی غیرمتمرکز بهره‌مند شود.
                  </p>
                  <p>
                    با استفاده از فناوری‌های پیشرفته‌ای چون DAO (سازمان مستقل غیرمتمرکز) و فلش لن، سرمایه‌های خرد کاربران را تجمیع کرده و در موقعیت‌های سودآور و کم‌ریسک سرمایه‌گذاری می‌کنیم. سود حاصله به‌طور خودکار و شفاف میان تمام سرمایه‌گذاران توزیع می‌شود.
                  </p>
                  <p>
                    چشم‌انداز بلندمدت ما ایجاد یک اکوسیستم مالی کاملاً غیرمتمرکز است که در آن جامعه کاربران نه‌تنها سرمایه‌گذاران، بلکه صاحبان و تصمیم‌گیران واقعی پلتفرم باشند.
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-56">
                {[
                  { num: '+۱۰K', label: 'کاربر فعال' },
                  { num: '$۵M+', label: 'سرمایه مدیریتی' },
                  { num: '۲۴.۵٪', label: 'میانگین سود سالانه' },
                  { num: '۳', label: 'سال تجربه' },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.15)' }}>
                    <div className="text-xl font-black text-blue-400">{stat.num}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Values */}
        <motion.section variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-center mb-10">
            <SectionTitle>ارزش‌های بنیادین ما</SectionTitle>
            <p className="text-slate-400 max-w-xl mx-auto">اصولی که هر تصمیم و اقدام ما بر پایه آن‌ها بنا شده است.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${v.color}20`, color: v.color, border: `1px solid ${v.color}30` }}
                    >
                      {v.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{v.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-center mb-10">
            <SectionTitle>تیم رهبری</SectionTitle>
            <p className="text-slate-400 max-w-xl mx-auto">متخصصانی با سابقه درخشان در حوزه‌های بلاکچین، امور مالی و فناوری.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i * 0.5}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-blue-400 mb-2">{member.role}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-center mb-10">
            <SectionTitle>مسیر رشد ما</SectionTitle>
            <p className="text-slate-400 max-w-xl mx-auto">از ایده تا یک پلتفرم معتبر سرمایه‌گذاری رمزنگاری.</p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-[27px] sm:right-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #0066ff, #a855f7, transparent)' }} aria-hidden="true" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-start gap-4 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1 sm:px-8">
                    <div
                      className="rounded-xl p-4 sm:p-5 border"
                      style={{ background: '#0d1a35', borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                      <span className="text-xs font-bold text-blue-400 mb-1 block">{m.year}</span>
                      <h3 className="font-bold text-white mb-1">{m.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="sm:relative sm:flex-shrink-0 mt-4">
                    <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)', boxShadow: '0 0 10px rgba(0,102,255,0.5)' }} />
                  </div>
                  {/* Empty side for desktop alternating */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div
            className="rounded-2xl p-8 sm:p-12 text-center border"
            style={{ background: 'linear-gradient(135deg, rgba(0,102,255,0.1), rgba(168,85,247,0.1))', borderColor: 'rgba(0,102,255,0.2)' }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">به جامعه ما بپیوندید</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              همین امروز سرمایه‌گذاری خود را شروع کنید و از مزایای یک پلتفرم امن و شفاف بهره‌مند شوید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #0066ff, #a855f7)', boxShadow: '0 0 25px rgba(0,102,255,0.35)' }}
              >
                شروع سرمایه‌گذاری
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                تماس با تیم ما
              </a>
            </div>
          </div>
        </motion.section>

      </div>
    </PageLayout>
  )
}
