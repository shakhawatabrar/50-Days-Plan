import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Timer, 
  BookCheck, 
  CalendarDays, 
  Laptop, 
  ExternalLink,
  BellOff,
  Youtube,
  FileText,
  AlertCircle,
  Languages
} from 'lucide-react';
import { PomodoroTimer } from './components/PomodoroTimer';
import { SubjectTracker } from './components/SubjectTracker';
import { DailyRoutine } from './components/DailyRoutine';
import { MasterPlan } from './components/MasterPlan';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timer' | 'subjects' | 'plan'>('dashboard');
  const [daysLeft, setDaysLeft] = useState(50);
  const [lang, setLang] = useState<'en' | 'bn'>(() => {
    const saved = localStorage.getItem('hsc-lang');
    return (saved as 'en' | 'bn') || 'bn';
  });

  useEffect(() => {
    localStorage.setItem('hsc-lang', lang);
  }, [lang]);

  useEffect(() => {
    const targetDate = new Date('2026-05-27');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }, []);

  const t = {
    dashboard: lang === 'en' ? 'Dashboard' : 'ড্যাশবোর্ড',
    timer: lang === 'en' ? 'Focus Timer' : 'ফোকাস টাইমার',
    subjects: lang === 'en' ? 'Subjects' : 'বিষয়সমূহ',
    plan: lang === 'en' ? 'Master Plan' : 'মাস্টার প্ল্যান',
    title: lang === 'en' ? 'HSC Master' : 'এইচএসসি মাস্টার',
    countdown: lang === 'en' ? 'Countdown' : 'কাউন্টডাউন',
    days: lang === 'en' ? 'days' : 'দিন',
    remaining: lang === 'en' ? 'Remaining for HSC' : 'পরীক্ষার বাকি',
    welcome: lang === 'en' ? 'Welcome back, Scholar!' : 'স্বাগতম, শিক্ষার্থী!',
    welcomeSub: lang === 'en' ? 'Your 50-day journey to excellence starts here.' : 'আপনার সাফল্যের ৫০ দিনের যাত্রা এখান থেকেই শুরু।',
    timerTitle: lang === 'en' ? 'Focus Session' : 'ফোকাস সেশন',
    timerSub: lang === 'en' ? 'Use the Pomodoro technique to maximize productivity.' : 'উৎপাদনশীলতা বাড়াতে পোমোডোরো টেকনিক ব্যবহার করুন।',
    subjectsTitle: lang === 'en' ? 'Subject Tracking' : 'বিষয়ভিত্তিক ট্র্যাকিং',
    subjectsSub: lang === 'en' ? 'Keep track of your 13 subjects and their progress.' : 'আপনার ১৩টি বিষয়ের অগ্রগতি ট্র্যাক করুন।',
    planTitle: lang === 'en' ? '50-Day Strategy' : '৫০ দিনের কৌশল',
    planSub: lang === 'en' ? 'Follow the phased approach for guaranteed results.' : 'নিশ্চিত ফলাফলের জন্য ধাপগুলো অনুসরণ করুন।',
    laptopTitle: lang === 'en' ? 'Laptop Usage Guide' : 'ল্যাপটপ ব্যবহারের নির্দেশিকা',
    laptopDesc: lang === 'en' ? 'Make your laptop your best friend, not a distraction. Use it for video lectures and test papers.' : 'ল্যাপটপকে আপনার সেরা বন্ধু বানান, ডিস্ট্রাকশন নয়। ভিডিও লেকচার এবং টেস্ট পেপারের জন্য এটি ব্যবহার করুন।',
    blockSocial: lang === 'en' ? 'Block Social Media' : 'সোশ্যাল মিডিয়া ব্লক করুন',
    videoLectures: lang === 'en' ? 'Video Lectures' : 'ভিডিও লেকচার',
    pdfPapers: lang === 'en' ? 'PDF Test Papers' : 'পিডিএফ টেস্ট পেপার',
    quickTips: lang === 'en' ? 'Quick Tips' : 'গুরুত্বপূর্ণ টিপস',
    tip1: lang === 'en' ? 'English: Solve 1hr board questions daily.' : 'ইংরেজি: প্রতিদিন ১ ঘণ্টা বোর্ড প্রশ্ন সমাধান করুন।',
    tip2: lang === 'en' ? 'Bangla/Civics: Master CQ writing patterns.' : 'বাংলা/পৌরনীতি: সৃজনশীল লেখার প্যাটার্ন আয়ত্ত করুন।',
    tip3: lang === 'en' ? 'MCQ: Highlight main book lines.' : 'MCQ: মেইন বইয়ের গুরুত্বপূর্ণ লাইনগুলো হাইলাইট করুন।',
    resources: lang === 'en' ? 'Resources' : 'রিসোর্সসমূহ',
    whyPomodoro: lang === 'en' ? 'Why Pomodoro?' : 'কেন পোমোডোরো?',
    pomodoroDesc: lang === 'en' ? 'Studying for 50 minutes followed by a 10-minute break keeps your brain fresh and prevents burnout.' : '৫০ মিনিট পড়াশোনা এবং ১০ মিনিট বিরতি আপনার মস্তিষ্ককে সতেজ রাখে এবং ক্লান্তি দূর করে।',
    strategyTitle: lang === 'en' ? 'The 30-10-10 Strategy' : '৩০-১০-১০ কৌশল',
    phase1: lang === 'en' ? 'Phase 1: Foundation (30 Days)' : 'ধাপ ১: ভিত্তি তৈরি (৩০ দিন)',
    phase1Desc: lang === 'en' ? 'You have 13 subjects. Spend roughly 2 days per subject. Focus on topics that appeared in board exams over the last 5 years.' : 'আপনার ১৩টি বিষয় আছে। প্রতিটি বিষয়ের জন্য প্রায় ২ দিন সময় দিন। গত ৫ বছরের বোর্ড পরীক্ষায় আসা টপিকগুলোতে গুরুত্ব দিন।',
    phase2: lang === 'en' ? 'Phase 2: Simulation (10 Days)' : 'ধাপ ২: সিমুলেশন (১০ দিন)',
    phase2Desc: lang === 'en' ? 'Solve test papers from top colleges. Use a timer to simulate real exam conditions. This builds speed and confidence.' : 'শীর্ষ কলেজগুলোর টেস্ট পেপার সমাধান করুন। আসল পরীক্ষার পরিবেশ তৈরি করতে টাইমার ব্যবহার করুন। এটি আপনার গতি এবং আত্মবিশ্বাস বাড়াবে।',
    phase3: lang === 'en' ? 'Phase 3: Polish (10 Days)' : 'ধাপ ৩: চূড়ান্ত প্রস্তুতি (১০ দিন)',
    phase3Desc: lang === 'en' ? 'Final revision. Look at your notes and the mistakes you made during Phase 2.' : 'চূড়ান্ত রিভিশন। আপনার নোটগুলো এবং ধাপ ২-এ করা ভুলগুলো দেখুন।',
  };

  const navItems = [
    { id: 'dashboard', label: t.dashboard, icon: <LayoutDashboard size={20} /> },
    { id: 'timer', label: t.timer, icon: <Timer size={20} /> },
    { id: 'subjects', label: t.subjects, icon: <BookCheck size={20} /> },
    { id: 'plan', label: t.plan, icon: <CalendarDays size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pb-24 md:pb-0 md:pl-64 transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <GraduationCapIcon />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-white">{t.title}</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 transition-all"
          >
            <Languages size={20} />
            <span className="font-medium">{lang === 'en' ? 'বাংলা (BN)' : 'English (EN)'}</span>
          </button>

          <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
            <div className="text-xs font-bold text-slate-500 uppercase mb-2">{t.countdown}</div>
            <div className="text-3xl font-bold text-primary">{daysLeft} {t.days}</div>
            <div className="text-xs text-slate-400">{t.remaining}</div>
          </div>
        </div>
      </aside>

      {/* Bottom Nav - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 flex justify-around p-3 md:hidden z-50">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              activeTab === item.id ? 'text-primary' : 'text-slate-500'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
        <button 
          onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
          className="flex flex-col items-center gap-1 p-2 rounded-xl text-slate-500"
        >
          <Languages size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider">{lang === 'en' ? 'BN' : 'EN'}</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-5xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {activeTab === 'dashboard' && t.welcome}
              {activeTab === 'timer' && t.timerTitle}
              {activeTab === 'subjects' && t.subjectsTitle}
              {activeTab === 'plan' && t.planTitle}
            </h2>
            <p className="text-slate-400">
              {activeTab === 'dashboard' && t.welcomeSub}
              {activeTab === 'timer' && t.timerSub}
              {activeTab === 'subjects' && t.subjectsSub}
              {activeTab === 'plan' && t.planSub}
            </p>
          </div>
          <div className="md:hidden flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
            <CalendarDays size={18} />
            {daysLeft} {t.days} {lang === 'en' ? 'left' : 'বাকি'}
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="glass-card p-6 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">{t.laptopTitle}</h3>
                      <p className="text-white/80 text-sm mb-4 max-w-md">
                        {t.laptopDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <BellOff size={12} /> {t.blockSocial}
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <Youtube size={12} /> {t.videoLectures}
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <FileText size={12} /> {t.pdfPapers}
                        </span>
                      </div>
                    </div>
                    <Laptop className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 rotate-12" />
                  </div>
                  
                  <DailyRoutine lang={lang} />
                  <MasterPlan lang={lang} />
                </div>
                
                <div className="space-y-6">
                  <PomodoroTimer lang={lang} />
                  <div className="glass-card p-6 space-y-4">
                    <h4 className="font-bold flex items-center gap-2 text-white">
                      <AlertCircle size={18} className="text-amber-500" />
                      {t.quickTips}
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        {t.tip1}
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        {t.tip2}
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        {t.tip3}
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-6">
                    <h4 className="font-bold mb-4 text-white">{t.resources}</h4>
                    <div className="space-y-2">
                      <ResourceLink label={lang === 'en' ? '10 Minute School' : '১০ মিনিট স্কুল'} url="https://10minuteschool.com" />
                      <ResourceLink label={lang === 'en' ? 'Shikho Learning' : 'শিখো লার্নিং'} url="https://shikho.com" />
                      <ResourceLink label={lang === 'en' ? 'HSC Board Questions' : 'এইচএসসি বোর্ড প্রশ্ন'} url="#" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timer' && (
              <div className="max-w-md mx-auto">
                <PomodoroTimer lang={lang} />
                <div className="mt-8 glass-card p-6">
                  <h3 className="font-bold mb-4 text-white">{t.whyPomodoro}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {t.pomodoroDesc}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'subjects' && <SubjectTracker lang={lang} />}

            {activeTab === 'plan' && (
              <div className="space-y-6">
                <MasterPlan lang={lang} />
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{t.strategyTitle}</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold shrink-0">১</div>
                      <div>
                        <h4 className="font-bold text-slate-200">{t.phase1}</h4>
                        <p className="text-sm text-slate-400 mt-1">
                          {t.phase1Desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-400 font-bold shrink-0">২</div>
                      <div>
                        <h4 className="font-bold text-slate-200">{t.phase2}</h4>
                        <p className="text-sm text-slate-400 mt-1">
                          {t.phase2Desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-bold shrink-0">৩</div>
                      <div>
                        <h4 className="font-bold text-slate-200">{t.phase3}</h4>
                        <p className="text-sm text-slate-400 mt-1">
                          {t.phase3Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function ResourceLink({ label, url }: { label: string, url: string }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 transition-colors group"
    >
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <ExternalLink size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
    </a>
  );
}
