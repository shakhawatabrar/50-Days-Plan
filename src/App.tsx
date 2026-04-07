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
  Sun,
  Moon
} from 'lucide-react';
import { PomodoroTimer } from './components/PomodoroTimer';
import { SubjectTracker } from './components/SubjectTracker';
import { DailyRoutine } from './components/DailyRoutine';
import { MasterPlan } from './components/MasterPlan';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timer' | 'subjects' | 'plan'>('dashboard');
  const [daysLeft, setDaysLeft] = useState(50);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const targetDate = new Date('2026-05-27');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }, []);

  const navItems = [
    { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: <LayoutDashboard size={20} /> },
    { id: 'timer', label: 'ফোকাস টাইমার', icon: <Timer size={20} /> },
    { id: 'subjects', label: 'বিষয়সমূহ', icon: <BookCheck size={20} /> },
    { id: 'plan', label: 'মাস্টার প্ল্যান', icon: <CalendarDays size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 md:pb-0 md:pl-64 transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <GraduationCapIcon />
          </div>
          <h1 className="font-bold text-xl tracking-tight dark:text-white">এইচএসসি মাস্টার</h1>
        </div>

        <nav className="space-y-2 flex-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="font-medium">{isDarkMode ? 'লাইট মোড' : 'ডার্ক মোড'}</span>
          </button>

          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">কাউন্টডাউন</div>
            <div className="text-3xl font-bold text-primary">{daysLeft} দিন</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">পরীক্ষার বাকি</div>
          </div>
        </div>
      </aside>

      {/* Bottom Nav - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around p-3 md:hidden z-50">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
              activeTab === item.id ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex flex-col items-center gap-1 p-2 rounded-xl text-slate-400 dark:text-slate-500"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-[10px] font-bold uppercase tracking-wider">{isDarkMode ? 'লাইট' : 'ডার্ক'}</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-5xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {activeTab === 'dashboard' && 'স্বাগতম, শিক্ষার্থী!'}
              {activeTab === 'timer' && 'ফোকাস সেশন'}
              {activeTab === 'subjects' && 'বিষয়ভিত্তিক ট্র্যাকিং'}
              {activeTab === 'plan' && '৫০ দিনের কৌশল'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {activeTab === 'dashboard' && 'আপনার সাফল্যের ৫০ দিনের যাত্রা এখান থেকেই শুরু।'}
              {activeTab === 'timer' && 'উৎপাদনশীলতা বাড়াতে পোমোডোরো টেকনিক ব্যবহার করুন।'}
              {activeTab === 'subjects' && 'আপনার ১৩টি বিষয়ের অগ্রগতি ট্র্যাক করুন।'}
              {activeTab === 'plan' && 'নিশ্চিত ফলাফলের জন্য ধাপগুলো অনুসরণ করুন।'}
            </p>
          </div>
          <div className="md:hidden flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
            <CalendarDays size={18} />
            {daysLeft} দিন বাকি
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
                      <h3 className="text-xl font-bold mb-2">ল্যাপটপ ব্যবহারের নির্দেশিকা</h3>
                      <p className="text-white/80 text-sm mb-4 max-w-md">
                        ল্যাপটপকে আপনার সেরা বন্ধু বানান, ডিস্ট্রাকশন নয়। ভিডিও লেকচার এবং টেস্ট পেপারের জন্য এটি ব্যবহার করুন।
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <BellOff size={12} /> সোশ্যাল মিডিয়া ব্লক করুন
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <Youtube size={12} /> ভিডিও লেকচার
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          <FileText size={12} /> পিডিএফ টেস্ট পেপার
                        </span>
                      </div>
                    </div>
                    <Laptop className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 rotate-12" />
                  </div>
                  
                  <DailyRoutine />
                  <MasterPlan />
                </div>
                
                <div className="space-y-6">
                  <PomodoroTimer />
                  <div className="glass-card p-6 space-y-4">
                    <h4 className="font-bold flex items-center gap-2 dark:text-white">
                      <AlertCircle size={18} className="text-amber-500" />
                      গুরুত্বপূর্ণ টিপস
                    </h4>
                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        ইংরেজি: প্রতিদিন ১ ঘণ্টা বোর্ড প্রশ্ন সমাধান করুন।
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        বাংলা/পৌরনীতি: সৃজনশীল লেখার প্যাটার্ন আয়ত্ত করুন।
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        MCQ: মেইন বইয়ের গুরুত্বপূর্ণ লাইনগুলো হাইলাইট করুন।
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card p-6">
                    <h4 className="font-bold mb-4 dark:text-white">রিসোর্সসমূহ</h4>
                    <div className="space-y-2">
                      <ResourceLink label="১০ মিনিট স্কুল" url="https://10minuteschool.com" />
                      <ResourceLink label="শিখো লার্নিং" url="https://shikho.com" />
                      <ResourceLink label="এইচএসসি বোর্ড প্রশ্ন" url="#" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timer' && (
              <div className="max-w-md mx-auto">
                <PomodoroTimer />
                <div className="mt-8 glass-card p-6">
                  <h3 className="font-bold mb-4 dark:text-white">কেন পোমোডোরো?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    ৫০ মিনিট পড়াশোনা এবং ১০ মিনিট বিরতি আপনার মস্তিষ্ককে সতেজ রাখে এবং ক্লান্তি দূর করে। 
                    এই শেষ ৫০ দিনে প্রতিদিন ১০-১২ ঘণ্টা পড়ার জন্য এটি অত্যন্ত কার্যকর।
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'subjects' && <SubjectTracker />}

            {activeTab === 'plan' && (
              <div className="space-y-6">
                <MasterPlan />
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">৩০-১০-১০ কৌশল</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold shrink-0">১</div>
                      <div>
                        <h4 className="font-bold dark:text-slate-200">ধাপ ১: ভিত্তি তৈরি (৩০ দিন)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          আপনার ১৩টি বিষয় আছে। প্রতিটি বিষয়ের জন্য প্রায় ২ দিন সময় দিন। সব পড়ার দরকার নেই; গত ৫ বছরের বোর্ড পরীক্ষায় আসা টপিকগুলোতে গুরুত্ব দিন।
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold shrink-0">২</div>
                      <div>
                        <h4 className="font-bold dark:text-slate-200">ধাপ ২: সিমুলেশন (১০ দিন)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          শীর্ষ কলেজগুলোর টেস্ট পেপার সমাধান করুন। আসল পরীক্ষার পরিবেশ তৈরি করতে টাইমার ব্যবহার করুন। এটি আপনার গতি এবং আত্মবিশ্বাস বাড়াবে।
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold shrink-0">৩</div>
                      <div>
                        <h4 className="font-bold dark:text-slate-200">ধাপ ৩: চূড়ান্ত প্রস্তুতি (১০ দিন)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          চূড়ান্ত রিভিশন। আপনার নোটগুলো এবং ধাপ ২-এ করা ভুলগুলো দেখুন। নিশ্চিত করুন যে সৃজনশীল প্রশ্নের ফরম্যাটগুলো আপনার মুখস্থ আছে।
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
      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-colors group"
    >
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <ExternalLink size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
    </a>
  );
}
