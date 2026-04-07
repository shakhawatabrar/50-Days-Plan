import React from 'react';
import { CheckCircle2, Circle, GraduationCap } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_SUBJECTS: Subject[] = [
  { id: 'b1', name: 'বাংলা ১ম পত্র', completed: false },
  { id: 'b2', name: 'বাংলা ২য় পত্র', completed: false },
  { id: 'e1', name: 'ইংরেজি ১ম পত্র', completed: false },
  { id: 'e2', name: 'ইংরেজি ২য় পত্র', completed: false },
  { id: 'ict', name: 'আইসিটি (ICT)', completed: false },
  { id: 'civ1', name: 'পৌরনীতি ১ম পত্র', completed: false },
  { id: 'civ2', name: 'পৌরনীতি ২য় পত্র', completed: false },
  { id: 'eco1', name: 'অর্থনীতি ১ম পত্র', completed: false },
  { id: 'eco2', name: 'অর্থনীতি ২য় পত্র', completed: false },
  { id: 'geo1', name: 'ভূগোল ১ম পত্র', completed: false },
  { id: 'geo2', name: 'ভূগোল ২য় পত্র', completed: false },
  { id: 'log1', name: 'যুক্তিবিদ্যা ১ম পত্র', completed: false },
  { id: 'log2', name: 'যুক্তিবিদ্যা ২য় পত্র', completed: false },
];

export const SubjectTracker = () => {
  const [subjects, setSubjects] = React.useState<Subject[]>(() => {
    const saved = localStorage.getItem('hsc-subjects');
    return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
  });

  React.useEffect(() => {
    localStorage.setItem('hsc-subjects', JSON.stringify(subjects));
  }, [subjects]);

  const toggleSubject = (id: string) => {
    setSubjects(prev => prev.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
  };

  const completedCount = subjects.filter(s => s.completed).length;
  const percentage = Math.round((completedCount / subjects.length) * 100);

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
          <GraduationCap className="text-primary" />
          বিষয়ভিত্তিক অগ্রগতি
        </h2>
        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
          {percentage}% সম্পন্ন
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {subjects.map(subject => (
          <button
            key={subject.id}
            onClick={() => toggleSubject(subject.id)}
            className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
              subject.completed 
                ? 'bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' 
                : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 hover:border-primary/50'
            }`}
          >
            <span className="text-sm font-medium">{subject.name}</span>
            {subject.completed ? (
              <CheckCircle2 size={18} className="text-green-600 dark:text-green-400" />
            ) : (
              <Circle size={18} className="text-slate-300 dark:text-slate-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
