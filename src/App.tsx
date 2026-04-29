import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { auth, loginWithGoogle, logout } from './lib/firebase';
import { ExplainPopover } from './components/ExplainPopover';
import { Button } from './components/ui/button';
import { LogOut, BookOpen, LayoutDashboard, Brain } from 'lucide-react';

// Pages
import Home from './pages/Home';
import LessonDetail from './pages/LessonDetail';
import Dashboard from './pages/Dashboard';
import TableOfContents from './pages/TableOfContents';

export default function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans p-4 md:p-6 gap-6">
        {/* Explain Popover at root level */}
        <ExplainPopover />

        {/* Navbar */}
        <div className="max-w-6xl mx-auto w-full">
          <header className="flex items-center justify-between bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-200 sticky top-4 z-50">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#FFD100] rounded-full flex items-center justify-center font-black text-2xl transition-transform group-hover:scale-105 overflow-hidden tracking-tighter">
                <span className="text-black">e</span><span className="text-[#E6192B]">e</span>
              </div>
              <h1 className="text-xl font-black tracking-tighter text-slate-900 hidden sm:block">
                english<span className="text-[#E6192B]">exclusive</span>
              </h1>
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <Link to="/lessons" className="hover:text-[#E6192B] transition-colors flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline">Lessons</span>
              </Link>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="hover:text-[#E6192B] transition-colors flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>
                  <div className="flex items-center gap-4 border-l border-slate-200 pl-4 ml-2">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-bold text-slate-900">{user.displayName || 'Student'}</p>
                    </div>
                    <Button variant="ghost" onClick={logout} size="icon" className="text-slate-400 hover:text-red-500" title="Logout">
                      <LogOut className="w-5 h-5" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="border-l border-slate-200 pl-4 ml-2">
                  <Button onClick={loginWithGoogle} className="bg-[#E6192B] text-white hover:bg-black font-bold rounded-xl px-6">
                    Log in
                  </Button>
                </div>
              )}
            </nav>
          </header>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto flex flex-col gap-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contents" element={<TableOfContents />} />
            <Route path="/lessons" element={<Home />} />
            <Route path="/lesson/:lessonId" element={<LessonDetail user={user} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
