import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessonsData, Question } from '../data/lessons';
import { saveLessonProgress, getLessonProgress } from '../services/dbService';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown';
import adverbsArtImg from '../assets/adverbs-art.jpg';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AlertCircle, CheckCircle2, ChevronLeft, Lightbulb, ChevronRight, CornerDownLeft, RefreshCw } from 'lucide-react';
import { clsx } from 'clsx';

export default function LessonDetail({ user }: { user: any }) {
  const { lessonId } = useParams();
  const lesson = lessonId ? lessonsData[lessonId] : null;

  const [activeTab, setActiveTab] = useState("explanation");
  const [difficulty, setDifficulty] = useState<"beginner" | "intermediate" | "advanced">("advanced");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({}); // true = correct, false = wrong
  const [previousProgress, setPreviousProgress] = useState<any>(null);

  useEffect(() => {
    if (user && lessonId) {
      getLessonProgress(user.uid, lessonId).then(data => {
        if (data) {
          setPreviousProgress(data);
        }
      });
    }
  }, [user, lessonId]);

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  const rawMarkdown = lesson.isSituational && lesson.situations ? lesson.situations[difficulty].explanationMarkdown : lesson.explanationMarkdown;
  const currentMarkdown = rawMarkdown?.replace('/adverbs-art.jpg', adverbsArtImg) || '';
  const currentExercises = lesson.isSituational && lesson.situations ? lesson.situations[difficulty].exercises : lesson.exercises;

  const chunkedExercises: Question[][] = [];
  if (currentExercises) {
    for (let i = 0; i < currentExercises.length; i += 10) {
      chunkedExercises.push(currentExercises.slice(i, i + 10));
    }
  }

  const handleAnswerSubmit = async (qId: string, value: string) => {
    if (submittedAnswers[qId] !== undefined) return; // already submitted

    const q = currentExercises.find(ex => ex.id === qId);
    if (!q) return;

    const isCorrect = value.toLowerCase().trim() === q.correctAnswer.toLowerCase().trim();
    
    setAnswers(prev => ({ ...prev, [qId]: value }));
    
    // We must use functional update for reliable async progress evaluation
    let updatedSubmitted: Record<string, boolean> = {};
    setSubmittedAnswers(prev => {
      updatedSubmitted = { ...prev, [qId]: isCorrect };
      return updatedSubmitted;
    });

    // Overall progress logic
    if (user && lessonId) {
      const totalAnswered = Object.keys(updatedSubmitted).length;
      if (totalAnswered === currentExercises.length) {
        const totalScore = Object.values(updatedSubmitted).filter(val => val === true).length;
        const maxScore = currentExercises.length;
        await saveLessonProgress(user.uid, lessonId, totalScore, true);
        const newProgress = await getLessonProgress(user.uid, lessonId);
        setPreviousProgress(newProgress);
      }
    }
  };

  const retryChunk = (chunkIndex: number, currentChunk: Question[]) => {
    setSubmittedAnswers(prev => {
      const newSub = { ...prev };
      currentChunk.forEach(q => delete newSub[q.id]);
      return newSub;
    });
    setAnswers(prev => {
      const newAns = { ...prev };
      currentChunk.forEach(q => delete newAns[q.id]);
      return newAns;
    });
  };

  // When difficult changes, reset answers and progress
  const handleDifficultyChange = (newDiff: "beginner" | "intermediate" | "advanced") => {
    setDifficulty(newDiff);
    setAnswers({});
    setSubmittedAnswers({});
    setActiveTab("explanation");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      <div className="flex items-center gap-4">
        <Link to="/lessons">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-ee-black">{lesson.title}</h1>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <span className="bg-ee-yellow/20 text-ee-black px-2 py-0.5 rounded text-sm font-semibold">Level {lesson.level}</span>
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center bg-[#FFD100]/20 text-black p-4 rounded-xl border border-[#FFD100]/50">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-5 h-5 text-black flex-shrink-0" />
          <span className="text-sm font-medium">
            <strong>AI Tip:</strong> Select any word or phrase with your mouse to see its translation!
          </span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap sm:flex-nowrap w-full bg-slate-100 p-1 rounded-2xl h-auto gap-1 items-center justify-start overflow-x-auto no-scrollbar">
          <TabsTrigger value="explanation" className="flex-1 py-3 px-4 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-slate-800 data-[state=active]:shadow-sm rounded-xl whitespace-nowrap">
            Explanation
          </TabsTrigger>
          {chunkedExercises.map((_, idx) => (
            <TabsTrigger key={idx} value={`ex-${idx}`} className="flex-1 py-3 px-4 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-slate-800 data-[state=active]:shadow-sm rounded-xl whitespace-nowrap">
               Exercise {idx + 1}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="explanation" className="mt-6 space-y-6">
          {lesson.isSituational && (
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <h3 className="font-bold text-slate-800">Select Reading Level</h3>
                <p className="text-sm text-slate-500">Choose the difficulty of the text and exercises.</p>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
                <button 
                  onClick={() => handleDifficultyChange('beginner')}
                  className={clsx("flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-all", difficulty === 'beginner' ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700")}
                >
                  Beginner
                </button>
                <button 
                  onClick={() => handleDifficultyChange('intermediate')}
                  className={clsx("flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-all", difficulty === 'intermediate' ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700")}
                >
                  Intermediate
                </button>
                <button 
                  onClick={() => handleDifficultyChange('advanced')}
                  className={clsx("flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-all", difficulty === 'advanced' ? "bg-white shadow-sm text-slate-800" : "text-slate-500 hover:text-slate-700")}
                >
                  Advanced
                </button>
              </div>
            </div>
          )}
          <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
            {lesson.isSituational && (
              <div className="w-full mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex items-center justify-center">
                <img src={lesson.id === 'situational-01' ? "/car-buying.jpg" : lesson.id === 'situational-02' ? "/cell-phone.jpg" : ""} alt="Situational Artwork" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
            )}
            <div className="prose prose-slate max-w-none prose-headings:text-black prose-a:text-[#E6192B]">
              <Markdown rehypePlugins={[rehypeRaw]}>{currentMarkdown}</Markdown>
            </div>
          </div>
        </TabsContent>
        
        {chunkedExercises.map((chunk, chunkIndex) => {
          
          const chunkScore = chunk.reduce((acc, q) => acc + (submittedAnswers[q.id] === true ? 1 : 0), 0);
          const chunkWrong = chunk.reduce((acc, q) => acc + (submittedAnswers[q.id] === false ? 1 : 0), 0);
          const totalAnsweredInChunk = chunk.reduce((acc, q) => acc + (submittedAnswers[q.id] !== undefined ? 1 : 0), 0);
          const isChunkComplete = totalAnsweredInChunk === chunk.length;

          return (
            <TabsContent key={chunkIndex} value={`ex-${chunkIndex}`} className="mt-6 space-y-6">
              {previousProgress && (
                 <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-100 flex items-center gap-2">
                   <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                   <span className="text-sm sm:text-base">Your overall last score was <strong>{previousProgress.score} / {currentExercises.length}</strong>.</span>
                 </div>
              )}

              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm space-y-10">
                  
                  {/* Running Tally Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
                    <h2 className="text-xl font-bold text-slate-800">Exercise {chunkIndex + 1}</h2>
                    <div className="flex items-center gap-2 sm:gap-4 text-sm font-bold">
                      <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 hidden sm:inline-block">{chunkScore} Correct</span>
                      <span className="text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 hidden sm:inline-block">{chunkWrong} Wrong</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => retryChunk(chunkIndex, chunk)}
                        className="text-slate-500 hover:text-slate-700 font-medium flex items-center gap-1"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Reset
                      </Button>
                    </div>
                  </div>

                  {chunk.map((q, idx) => {
                    const checked = submittedAnswers[q.id] !== undefined;
                    const isCorrect = submittedAnswers[q.id] === true;
                    const isWrong = submittedAnswers[q.id] === false;

                    return (
                      <div key={q.id} className="space-y-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 mt-1">
                            {idx + 1}
                          </div>
                          <div className="flex-1 space-y-4">
                            <p className="text-lg font-medium leading-relaxed text-slate-800">{q.text}</p>
                            
                            {q.type === 'multiple-choice' && q.options ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {q.options.map(opt => (
                                  <button
                                    key={opt}
                                    className={clsx(
                                      "p-4 border rounded-xl text-left font-medium transition-all text-slate-700 relative overflow-hidden",
                                      answers[q.id] === opt && !checked ? "bg-[#FFD100]/20 border-[#FFD100] ring-2 ring-[#FFD100]/50 text-black" : "bg-white border-slate-200",
                                      !checked && "hover:border-[#FFD100] hover:shadow-sm hover:bg-slate-50",
                                      checked && isCorrect && answers[q.id] === opt ? "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-100 text-emerald-700" : "",
                                      checked && isWrong && answers[q.id] === opt ? "bg-red-50 border-red-500 ring-2 ring-red-100 text-red-700" : "",
                                      checked && q.correctAnswer === opt && isWrong ? "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-100 text-emerald-700 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-emerald-500 after:rounded-xl" : "",
                                      checked ? "cursor-default" : "cursor-pointer"
                                    )}
                                    onClick={() => handleAnswerSubmit(q.id, opt)}
                                    disabled={checked}
                                  >
                                    {opt}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              <div className="max-w-sm flex items-center gap-2">
                                <Input 
                                  value={answers[q.id] || ''}
                                  onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && answers[q.id] && !checked) {
                                      handleAnswerSubmit(q.id, answers[q.id]);
                                    }
                                  }}
                                  disabled={checked}
                                  className={clsx(
                                    "text-lg ring-offset-background rounded-xl h-12 flex-1",
                                    checked && isCorrect && "border-emerald-500 focus-visible:ring-emerald-500 bg-emerald-50 text-emerald-800",
                                    checked && isWrong && "border-red-500 focus-visible:ring-red-500 bg-red-50 text-red-800"
                                  )}
                                  placeholder="Type your answer..."
                                />
                                {!checked && (
                                  <Button 
                                    onClick={() => handleAnswerSubmit(q.id, answers[q.id] || '')}
                                    disabled={!answers[q.id] || checked}
                                    className="h-12 px-6 rounded-xl bg-slate-800 hover:bg-slate-700"
                                  >
                                    <CornerDownLeft className="w-5 h-5" />
                                  </Button>
                                )}
                              </div>
                            )}

                            {checked && (
                              <div className={clsx("p-4 rounded-xl mt-4 text-sm break-words border", isCorrect ? "bg-emerald-50 text-emerald-900 border-emerald-100" : "bg-red-50 text-red-900 border-red-100")}>
                                {isCorrect ? <span className="font-semibold flex items-center gap-1 text-emerald-700"><CheckCircle2 className="w-4 h-4"/> Correct!</span> : <span className="font-semibold flex items-center gap-1 text-red-700"><AlertCircle className="w-4 h-4"/> Incorrect.</span>}
                                {isWrong && (
                                  <p className="mt-2 text-sm text-red-800 font-medium">The correct answer is: {q.correctAnswer}</p>
                                )}
                                <p className="mt-2 opacity-90">{q.explanation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                      <div className="text-slate-500 font-medium whitespace-nowrap">
                        Progress: {totalAnsweredInChunk} / {chunk.length}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                        <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">{chunkScore} ✓</span>
                        <span className="text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">{chunkWrong} ✗</span>
                      </div>
                      <Button 
                        onClick={() => retryChunk(chunkIndex, chunk)} 
                        variant="outline" 
                        className="rounded-full bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-600 h-10 px-6 font-semibold"
                      >
                        Reset Exercise
                      </Button>
                    </div>
                    
                    {isChunkComplete && (
                      <div className="flex gap-4">
                        {chunkIndex < chunkedExercises.length - 1 && (
                          <Button 
                            onClick={() => setActiveTab(`ex-${chunkIndex + 1}`)}
                            className="bg-[#E6192B] hover:bg-black text-white rounded-full px-8 h-12 flex items-center gap-2"
                          >
                            Next Exercise <ChevronRight className="w-4 h-4" />
                          </Button>
                        )}
                        {chunkIndex === chunkedExercises.length - 1 && user && (
                          <div className="bg-emerald-100 text-emerald-800 px-6 h-12 rounded-full flex items-center font-bold">
                            Lesson Complete!
                          </div>
                        )}
                      </div>
                    )}
                  </div>
              </div>
              
              <div className="w-full max-w-3xl mx-auto h-24 bg-slate-100 border border-slate-200 flex items-center justify-center relative p-6 rounded-[2rem]">
                <span className="absolute top-4 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sponsored</span>
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Google Ads</p>
                  <p className="text-sm font-semibold text-slate-600">Ad Space Placeholder</p>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
