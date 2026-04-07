import React from 'react';
import { Calendar, Target, ShieldCheck, HelpCircle } from 'lucide-react';

export const MasterPlan = () => {
  return (
    <div className="glass-card p-6 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
        <Target className="text-primary" />
        ৫০ দিনের মাস্টার প্ল্যান
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold mb-2">
            <Calendar size={18} />
            ধাপ ১ (দিন ১-৩০)
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-300">
            <strong>বেসিক ও চ্যাপ্টার ক্লোজিং:</strong> প্রতিটি বিষয়ের জন্য ২ দিন। গত ৫ বছরের বোর্ড প্রশ্নের ওপর গুরুত্ব দিন।
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold mb-2">
            <ShieldCheck size={18} />
            ধাপ ২ (দিন ৩১-৪০)
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-300">
            <strong>টেস্ট পেপার সমাধান:</strong> বোর্ড প্রশ্ন এবং শীর্ষ কলেজের টেস্ট পেপার টাইমার ধরে সমাধান করুন।
          </p>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-2">
            <HelpCircle size={18} />
            ধাপ ৩ (দিন ৪১-৫০)
          </div>
          <p className="text-sm text-emerald-600 dark:text-emerald-300">
            <strong>ফাইনাল রিভিশন:</strong> আপনার নোটগুলো দেখুন এবং টেস্ট পেপারের ভুলগুলো সংশোধন করুন।
          </p>
        </div>
      </div>
    </div>
  );
};
