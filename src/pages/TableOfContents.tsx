import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lessonsData } from '../data/lessons';

export default function TableOfContents() {
  const lessons = Object.values(lessonsData);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Table of Contents – A1</h1>
        <p className="text-slate-500 font-medium">Browse all available grammar modules and find what you need to study next.</p>
      </div>

      <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="p-3 bg-[#FFD100]/20 text-black rounded-2xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800">A1 Elementary Grammar</h2>
            <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">Complete overview</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          {lessons.map((lesson, idx) => {
            const titleWithoutNumber = lesson.title.replace(/^\d+\.\s*/, '');
            return (
              <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all">
                <span className="text-sm font-black text-slate-300 group-hover:text-[#E6192B] transition-colors w-6 text-right shrink-0">{idx + 1}.</span>
                <span className="text-sm font-bold text-slate-600 group-hover:text-black transition-colors leading-relaxed">{titleWithoutNumber}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
