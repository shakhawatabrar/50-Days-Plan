import React from 'react';
import { Calendar, Target, ShieldCheck, HelpCircle } from 'lucide-react';

interface MasterPlanProps {
  lang: 'en' | 'bn';
}

export const MasterPlan = ({ lang }: MasterPlanProps) => {
  const t = {
    title: lang === 'en' ? '50-Day Master Plan' : '৫০ দিনের মাস্টার প্ল্যান',
    p1Title: lang === 'en' ? 'Phase 1 (Day 1-30)' : 'ধাপ ১ (দিন ১-৩০)',
    p1Desc: lang === 'en' 
      ? 'Basic & Chapter Closing: 2 days per subject. Focus on top board questions from last 5 years.' 
      : 'বেসিক ও চ্যাপ্টার ক্লোজিং: প্রতিটি বিষয়ের জন্য ২ দিন। গত ৫ বছরের বোর্ড প্রশ্নের ওপর গুরুত্ব দিন।',
    p2Title: lang === 'en' ? 'Phase 2 (Day 31-40)' : 'ধাপ ২ (দিন ৩১-৪০)',
    p2Desc: lang === 'en'
      ? 'Test Paper Solve: Solve board questions and top college test papers with a timer.'
      : 'টেস্ট পেপার সমাধান: বোর্ড প্রশ্ন এবং শীর্ষ কলেজের টেস্ট পেপার টাইমার ধরে সমাধান করুন।',
    p3Title: lang === 'en' ? 'Phase 3 (Day 41-50)' : 'ধাপ ৩ (দিন ৪১-৫০)',
    p3Desc: lang === 'en'
      ? 'Final Revision: Review your notes and fix errors from test papers.'
      : 'ফাইনাল রিভিশন: আপনার নোটগুলো দেখুন এবং টেস্ট পেপারের ভুলগুলো সংশোধন করুন।',
  };

  return (
    <div className="glass-card p-6 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 text-white">
        <Target className="text-primary" />
        {t.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-800">
          <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
            <Calendar size={18} />
            {t.p1Title}
          </div>
          <p className="text-sm text-blue-300">
            {t.p1Desc}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-100 dark:border-amber-800">
          <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
            <ShieldCheck size={18} />
            {t.p2Title}
          </div>
          <p className="text-sm text-amber-300">
            {t.p2Desc}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-900/20 border border-emerald-800">
          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
            <HelpCircle size={18} />
            {t.p3Title}
          </div>
          <p className="text-sm text-emerald-300">
            {t.p3Desc}
          </p>
        </div>
      </div>
    </div>
  );
};
