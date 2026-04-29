import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, BookCheck, Lightbulb, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lessonsData } from '../data/lessons';

export default function Home() {
  const lessons = Object.values(lessonsData);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-[#FFF9D6] text-black p-8 md:p-12 rounded-[2rem] border border-[#FFE44D] relative overflow-hidden shadow-sm flex flex-col justify-between min-h-[320px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE44D] rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <div>
            <h3 className="text-sm font-black text-amber-600/80 mb-2 uppercase tracking-wider">Start Your Journey</h3>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              english<span className="text-[#E6192B]">exclusive</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-black/80 max-w-xl font-medium leading-relaxed">
            Master the grammar you actually need for the modern world. Track your progress and never get stuck with our built-in AI tutor.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4 text-sm font-bold">
            <div className="flex gap-2 items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#FFE44D]/50 shadow-sm"><BookOpen className="text-black/80 w-4 h-4"/> 10+ Modern Modules</div>
            <div className="flex gap-2 items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#FFE44D]/50 shadow-sm"><Lightbulb className="text-[#E6192B] w-4 h-4"/> AI Power-ups</div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6">
        {/* Left Column: Lesson Content */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-800">Grammar Tracks</h2>
            <p className="text-sm font-bold text-slate-500 mt-1 uppercase tracking-wider">Choose a module to begin</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Table of Contents Card (First in the list) */}
            <Link to="/contents" className="block group h-full">
              <div className="bg-slate-800 p-6 rounded-[2rem] border border-slate-700 shadow-sm h-full flex flex-col hover:border-slate-500 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600 rounded-full blur-[50px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <span className="px-3 py-1 bg-[#E6192B] text-white text-[10px] font-black rounded-full uppercase tracking-widest">Index</span>
                    <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#FFD100] transition-colors leading-tight">Table of Grammar Contents - A1</h3>
                  </div>
                </div>
                
                <p className="text-sm text-slate-400 font-medium mb-6 line-clamp-2 relative z-10">
                  View the full list of {lessons.length} grammar modules available in the A1 level.
                </p>

                <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-between relative z-10">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">All Modules</span>
                  <button className="flex items-center gap-2 text-xs font-black bg-slate-700 text-slate-200 px-4 py-2 rounded-xl group-hover:bg-[#FFD100] group-hover:text-black transition-colors">
                    VIEW <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            {lessons.map(lesson => {
              const titleWithoutNumber = lesson.title.replace(/^\d+\.\s*/, '');
              const isAdverbs = lesson.id === 'a1-08' || titleWithoutNumber.toLowerCase().includes('adverbs of frequency');

              return (
              <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="block group h-full">
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm h-full flex flex-col hover:border-[#E6192B] hover:shadow-md transition-all duration-300 overflow-hidden">
                  
                  {/* Image Section - Top 2/3 (using 4:5 vertical proportion) */}
                  <div className="w-full aspect-[4/5] bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                    {isAdverbs ? (
                      <img 
                        src="/adverbs-art.png" 
                        alt="Adverbs of frequency art" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-6 text-center group-hover:opacity-80 transition-opacity">
                        <GraduationCap className="w-12 h-12 text-slate-300 mb-3" />
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest text-balance leading-normal">
                          Image coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text Section - Bottom 1/3 */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="px-2.5 py-1 bg-[#FFD100] text-black text-[10px] font-black rounded-full uppercase tracking-widest">Level {lesson.level}</span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-3 group-hover:text-[#E6192B] transition-colors leading-tight line-clamp-2">
                          {titleWithoutNumber}
                        </h3>
                      </div>
                    </div>
                    
                    {lesson.description && (
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mb-5 line-clamp-2 mt-auto">
                        {lesson.description}
                      </p>
                    )}

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">{lesson.exercises.length} Qs</span>
                      <button className="flex items-center gap-2 text-[10px] sm:text-xs font-black bg-slate-100 text-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl group-hover:bg-[#E6192B] group-hover:text-white transition-colors">
                        START <BookCheck className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )})}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6 pt-2 md:pt-[3.75rem]">
          
          {/* Translator Tool / Highlight Helper */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 text-amber-100 opacity-50">
              <Lightbulb className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-xl text-amber-600 shadow-inner">
                  <Lightbulb className="w-5 h-5 fill-current" />
                </div>
                <h3 className="font-black text-slate-800 uppercase tracking-tight">AI Assisted</h3>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border-dashed border-2 border-slate-200 text-center">
                <p className="text-sm font-medium text-slate-600">Select any word in the lesson explanation to instantly see its translation.</p>
                <div className="mt-4 flex gap-2 justify-center">
                  <span className="px-3 py-1.5 bg-white text-[10px] border border-slate-200 rounded-lg uppercase font-black text-[#E6192B] shadow-sm tracking-widest flex items-center gap-2"><GraduationCap className="w-3 h-3"/> Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Space Placeholder */}
          <div className="flex-grow min-h-[200px] bg-slate-100/50 rounded-[2rem] border border-slate-200 flex flex-col items-center justify-center relative p-6">
            <span className="absolute top-4 right-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Sponsored</span>
            <div className="text-center opacity-60">
              <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Google Ads</p>
              <p className="text-sm font-bold text-slate-500">Ad Space Placeholder</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

