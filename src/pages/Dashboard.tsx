import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { getUserProgress } from '../services/dbService';
import { lessonsData } from '../data/lessons';
import { Progress } from '../components/ui/progress';
import { BookOpen, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function Dashboard({ user }: { user: any }) {
  const [progressData, setProgressData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then(data => {
        if (data) setProgressData(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Log in to view your progress</h2>
        <p className="text-muted-foreground w-full max-w-md">You need to be logged in to track your performance on English lessons and view your progress report.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="p-8 text-center text-muted-foreground">Loading dashboard...</div>;
  }

  const completedLessons = progressData.filter(p => p.completed).length;
  const totalLessons = Object.keys(lessonsData).length;
  const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">My Dashboard</h1>
        <p className="text-slate-500 font-medium">Welcome back, {user.displayName || 'student'}!</p>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        
        {/* Main Progress Tracker (Bento main panel) */}
        <div className="md:col-span-8 bg-[#FFD100] text-black p-6 md:p-8 rounded-[2rem] shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black opacity-80 mb-2 uppercase tracking-widest text-black">MY PROGRESS</h3>
            <p className="text-3xl font-black mt-1">Overall Status</p>
          </div>
          <div className="mt-8 flex items-end justify-between">
            <div className="w-full">
              <div className="flex justify-between text-sm mb-3">
                <span className="font-bold text-black">{completedLessons} / {totalLessons} Completed Lessons</span>
                <span className="text-[#E6192B] font-black">{percentage}%</span>
              </div>
              <div className="h-3 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#E6192B] rounded-full" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Small stats (Right side of bento row) */}
        <div className="md:col-span-4 flex flex-col justify-between gap-6">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex-1 flex flex-col justify-center hover:border-[#E6192B] transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#FFD100]/20 text-black rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">Lessons</h3>
            </div>
            <p className="text-3xl font-black text-slate-800">{completedLessons} <span className="text-lg text-slate-400 font-bold ml-1">completed</span></p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex-1 flex flex-col justify-center hover:border-amber-200 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest">History</h3>
            </div>
            <p className="text-3xl font-black text-slate-800">{progressData.length} <span className="text-lg text-slate-400 font-bold ml-1">started</span></p>
          </div>
        </div>

      </div>

      <div className="space-y-6 pt-4">
        <h2 className="text-2xl font-black text-slate-800 px-2 tracking-tight">Recent History</h2>
        
        {progressData.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-dashed border-slate-300 p-12 text-center flex flex-col items-center justify-center">
            <p className="text-slate-500 mb-6 font-medium">You haven't started any lessons yet.</p>
            <Link to="/lessons">
              <button className="bg-[#E6192B] hover:bg-black px-6 py-3 rounded-xl font-bold text-white transition-colors">
                Explore Lessons
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {progressData.map(p => {
              const lessonInfo = lessonsData[p.lessonId];
              if (!lessonInfo) return null;
              
              const dateObj = new Date(p.lastAttemptAt || 0);
              const dateStr = dateObj.toLocaleDateString(navigator.language || 'en-US');

              return (
                <Link key={p.id} to={`/lesson/${p.lessonId}`} className="block group">
                  <div className="bg-white p-5 rounded-[1.5rem] border border-slate-200 hover:border-[#E6192B] hover:shadow-sm transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    <div className="md:col-span-8 flex gap-4 items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${p.completed ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400 group-hover:bg-[#FFD100] group-hover:text-black'}`}>
                        {p.completed ? <CheckCircle2 className="w-6 h-6"/> : <BookOpen className="w-6 h-6"/>}
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Level {lessonInfo.level}</span>
                        <p className="font-bold text-slate-800 leading-tight group-hover:text-[#E6192B] transition-colors">{lessonInfo.title}</p>
                      </div>
                    </div>
                    
                    <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-6 md:border-l border-slate-100 md:pl-6">
                      <div className="text-left md:text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Last Attempt</p>
                        <p className="text-sm font-bold text-slate-700">{dateStr}</p>
                      </div>
                      <div className="text-right w-16">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Score</p>
                        <div className="font-black text-lg text-slate-800">{p.score} <span className="text-xs text-slate-400 font-bold">/ {lessonInfo.exercises.length}</span></div>
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
