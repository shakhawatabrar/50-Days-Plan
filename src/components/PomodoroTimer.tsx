import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee, BookOpen } from 'lucide-react';

interface PomodoroTimerProps {
  lang: 'en' | 'bn';
}

export const PomodoroTimer = ({ lang }: PomodoroTimerProps) => {
  const [minutes, setMinutes] = useState(50);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'study' | 'break'>('study');

  const t = {
    study: lang === 'en' ? 'Study Session' : 'পড়াশোনার সময়',
    break: lang === 'en' ? 'Short Break' : 'বিরতির সময়',
    focus: lang === 'en' ? 'Focus for 50 minutes' : '৫০ মিনিট মনোযোগ দিন',
    rest: lang === 'en' ? 'Rest for 10 minutes' : '১০ মিনিট বিশ্রাম নিন',
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setIsActive(false);
          if (mode === 'study') {
            setMode('break');
            setMinutes(10);
          } else {
            setMode('study');
            setMinutes(50);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(mode === 'study' ? 50 : 10);
    setSeconds(0);
  };

  return (
    <div className="glass-card p-6 flex flex-col items-center justify-center space-y-4">
      <div className="flex items-center space-x-2 text-primary font-semibold uppercase tracking-wider text-sm">
        {mode === 'study' ? <BookOpen size={18} /> : <Coffee size={18} />}
        <span>{mode === 'study' ? t.study : t.break}</span>
      </div>
      
      <div className="text-6xl font-mono font-bold text-slate-100">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex space-x-3">
        <button 
          onClick={toggleTimer}
          className={`p-3 rounded-full ${isActive ? 'bg-amber-900/30 text-amber-400' : 'bg-primary text-white'} transition-colors`}
        >
          {isActive ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button 
          onClick={resetTimer}
          className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors"
        >
          <RotateCcw size={24} />
        </button>
      </div>

      <p className="text-xs text-slate-400 text-center">
        {mode === 'study' ? t.focus : t.rest}
      </p>
    </div>
  );
};
