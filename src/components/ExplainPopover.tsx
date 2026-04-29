import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Loader2, Languages, HelpCircle, X } from 'lucide-react';
import { explainGrammarConcept } from '../services/geminiService';
import Markdown from 'react-markdown';

export function ExplainPopover() {
  const [selection, setSelection] = useState<{ text: string, x: number, y: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [targetLanguage, setTargetLanguage] = useState(() => {
    try {
      const lang = navigator.language.split('-')[0];
      if (lang === 'es') return 'Spanish';
      if (lang === 'fr') return 'French';
      if (lang === 'de') return 'German';
      if (lang === 'it') return 'Italian';
      if (lang === 'ja') return 'Japanese';
      if (lang === 'zh') return 'Chinese';
      if (lang === 'ko') return 'Korean';
      if (lang === 'ru') return 'Russian';
      if (lang === 'ar') return 'Arabic';
    } catch(e){}
    return 'Portuguese';
  });
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setTimeout(() => {
        const activeSelection = window.getSelection();
        if (activeSelection && !activeSelection.isCollapsed) {
          const text = activeSelection.toString().trim();
          if (text.length > 0) {
            const range = activeSelection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            // Position above the selection
            setSelection({ text, x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 10 });
            setExplanation(null);
          }
        }
      }, 50);
    };

    const handleMouseDown = (e: Event) => {
      if (popoverRef.current && popoverRef.current.contains(e.target as Node)) {
        return;
      }
      setSelection(null);
      setExplanation(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('keyup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleMouseDown);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('keyup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchstart', handleMouseDown);
    };
  }, []);

  if (!selection) return null;

  const handleExplain = async () => {
    setLoading(true);
    const result = await explainGrammarConcept(selection.text, document.body.innerText.substring(0, 5000), targetLanguage);
    setExplanation(result);
    setLoading(false);
  };

  return (
    <div
      ref={popoverRef}
      className="absolute z-50 transform -translate-x-1/2 -translate-y-full pb-2 shadow-xl"
      style={{ left: selection.x, top: selection.y, width: explanation ? '380px' : 'auto', maxWidth: '90vw' }}
    >
      <Card className="border shadow-2xl bg-white overflow-hidden relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-1 top-1 h-6 w-6 z-10 text-muted-foreground" 
          onClick={() => { setSelection(null); setExplanation(null); }}
        >
          <X className="h-3 w-3" />
        </Button>

        {explanation ? (
          <div className="p-4 pt-6 max-h-[300px] overflow-y-auto w-full">
            <div className="markdown-body prose prose-sm max-w-none">
              <Markdown>{explanation}</Markdown>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 p-2">
            <select 
              value={targetLanguage} 
              onChange={(e) => setTargetLanguage(e.target.value)}
              className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Portuguese">Portuguese</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
              <option value="Korean">Korean</option>
              <option value="Russian">Russian</option>
              <option value="Arabic">Arabic</option>
            </select>
            <Button size="sm" onClick={handleExplain} disabled={loading} className="gap-2 bg-ee-black text-ee-yellow hover:bg-ee-black/90">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Languages className="w-4 h-4" />}
              {loading ? "Translating..." : "Translate"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
