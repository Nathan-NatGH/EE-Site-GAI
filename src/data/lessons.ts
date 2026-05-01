import a1DataRaw from './a1.json';
import { carBuyingLesson } from './car-buying';
import { cellPhoneLesson } from './cell-phone';

export interface Question {
  id: string;
  type: 'fill-blank' | 'multiple-choice';
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonContent {
  id: string;
  title: string;
  description?: string;
  level: string;
  explanationMarkdown: string;
  exercises: Question[];
  isSituational?: boolean;
  situations?: {
    beginner: { explanationMarkdown: string; exercises: Question[] };
    intermediate: { explanationMarkdown: string; exercises: Question[] };
    advanced: { explanationMarkdown: string; exercises: Question[] };
  };
}

export const lessonsData: Record<string, LessonContent> = (() => {
  const data: Record<string, LessonContent> = {};
  
  const rawData = (a1DataRaw as any).default || a1DataRaw;
  if (Array.isArray(rawData)) {
    (rawData as unknown as LessonContent[]).forEach((lesson) => {
      data[lesson.id] = lesson;
    });
  }
  
  data[carBuyingLesson.id] = carBuyingLesson;
  data[cellPhoneLesson.id] = cellPhoneLesson;
  
  return data;
})();
