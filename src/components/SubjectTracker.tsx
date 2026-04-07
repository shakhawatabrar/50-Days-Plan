import React from 'react';
import { CheckCircle2, Circle, GraduationCap } from 'lucide-react';

interface Subject {
  id: string;
  nameEn: string;
  nameBn: string;
  completed: boolean;
}

interface SubjectTrackerProps {
  lang: 'en' | 'bn';
}

const INITIAL_SUBJECTS: Subject[] = [
  { id: 'b1', nameEn: 'Bangla 1st Paper', nameBn: 'বাংলা ১ম পত্র', completed: false },
  { id: 'b2', nameEn: 'Bangla 2nd Paper', nameBn: 'বাংলা ২য় পত্র', completed: false },
  { id: 'e1', nameEn: 'English 1st Paper', nameBn: 'ইংরেজি ১ম পত্র', completed: false },
  { id: 'e2', nameEn: 'English 2nd Paper', nameBn: 'ইংরেজি ২য় পত্র', completed: false },
  { id: 'ict', nameEn: 'ICT', nameBn: 'আইসিটি (ICT)', completed: false },
  { id: 'civ1', nameEn: 'Civics 1st Paper', nameBn: 'পৌরনীতি ১ম পত্র', completed: false },
  { id: 'civ2', nameEn: 'Civics 2nd Paper', nameBn: 'পৌরনীতি ২য় পত্র', completed: false },
  { id: 'eco1', nameEn: 'Economics 1st Paper', nameBn: 'অর্থনীতি ১ম পত্র', completed: false },
  { id: 'eco2', nameEn: 'Economics 2nd Paper', nameBn: 'অর্থনীতি ২য় পত্র', completed: false },
  { id: 'geo1', nameEn: 'Geography 1st Paper', nameBn: 'ভূগোল ১ম পত্র', completed: false },
  { id: 'geo2', nameEn: 'Geography 2nd Paper', nameBn: 'ভূগোল ২য় পত্র', completed: false },
  { id: 'log1', nameEn: 'Logic 1st Paper', nameBn: 'যুক্তিবিদ্যা ১ম পত্র', completed: false },
  { id: 'log2', nameEn: 'Logic 2nd Paper', nameBn: 'যুক্তিবিদ্যা ২য় পত্র', completed: false },
];

export const SubjectTracker = ({ lang }: SubjectTrackerProps) => {
  const [subjects, setSubjects] = React.useState<Subject[]>(() => {
    const saved = localStorage.getItem('hsc-subjects-v2');
    return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
  });

  React.useEffect(() => {
    localStorage.setItem('hsc-subjects-v2', JSON.stringify(subjects));
  }, [subjects]);

  const toggleSubject = (id: string) => {
    setSubjects(prev => prev.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
  };

  const completedCount = subjects.filter(s => s.completed).length;
  const percentage = Math.round((completedCount / subjects.length) * 100);

  const t = {
    title: lang === 'en' ? 'Subject Progress' : 'বিষয়ভিত্তিক অগ্রগতি',
    done: lang === 'en' ? 'Done' : 'সম্পন্ন',
  };

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2 text-white">
          <GraduationCap className="text-primary" />
          {t.title}
        </h2>
        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
          {percentage}% {t.done}
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
                ? 'bg-green-900/20 border-green-800 text-green-400' 
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-primary/50'
            }`}
          >
            <span className="text-sm font-medium">{lang === 'en' ? subject.nameEn : subject.nameBn}</span>
            {subject.completed ? (
              <CheckCircle2 size={18} className="text-green-400" />
            ) : (
              <Circle size={18} className="text-slate-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
