import a1DataRaw from './a1.json';

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

export const lessonsData: Record<string, LessonContent> = {};

import { carBuyingLesson } from './car-buying';
import { cellPhoneLesson } from './cell-phone';

// Load modular data
(a1DataRaw as unknown as LessonContent[]).forEach((lesson) => {
  lessonsData[lesson.id] = lesson;
});

lessonsData[carBuyingLesson.id] = carBuyingLesson;
lessonsData[cellPhoneLesson.id] = cellPhoneLesson;
