import React from 'react';
import { Clock, Sun, Moon, Coffee, Zap } from 'lucide-react';

const ROUTINE = [
  { time: 'সকাল ০৬:০০ - ১০:০০', task: 'অর্থনীতি, যুক্তিবিদ্যা অথবা ইংরেজি', icon: <Sun className="text-amber-500" />, desc: 'মস্তিষ্ক যখন সতেজ থাকে তখন কঠিন বিষয়গুলো পড়ুন।' },
  { time: 'দুপুর ১২:০০ - ০৩:০০', task: 'পৌরনীতি, ভূগোল অথবা বাংলা', icon: <Zap className="text-blue-500" />, desc: 'বর্ণনামূলক বিষয়গুলো রিডিং পড়ুন।' },
  { time: 'বিকাল ০৫:০০ - ০৬:০০', task: 'বিরতি ও ভিডিও লেকচার', icon: <Coffee className="text-emerald-500" />, desc: 'কঠিন টপিকগুলোর জন্য ইউটিউব টিউটোরিয়াল দেখুন।' },
  { time: 'রাত ০৮:০০ - ১২:০০', task: 'প্র্যাকটিস ও রিভিশন', icon: <Moon className="text-indigo-500" />, desc: 'আইসিটি প্র্যাকটিস, ইংরেজি গ্রামার এবং বোর্ড প্রশ্ন সমাধান।' },
];

export const DailyRoutine = () => {
  return (
    <div className="glass-card p-6 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
        <Clock className="text-primary" />
        দৈনিক রুটিন
      </h2>

      <div className="space-y-4">
        {ROUTINE.map((item, idx) => (
          <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
            <div className="mt-1">{item.icon}</div>
            <div>
              <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{item.time}</div>
              <div className="font-bold text-slate-800 dark:text-slate-200">{item.task}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
