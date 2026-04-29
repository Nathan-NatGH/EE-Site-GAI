import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function explainGrammarConcept(concept: string, context: string, targetLanguage: string = 'Portuguese') {
  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-3.1-pro-preview',
      contents: `You are an English teacher. 
      The student selected the concept/word: "${concept}".
      Context they are looking at: "${context}"
      Please simply provide the translation to ${targetLanguage} (e.g. In ${targetLanguage}, "${concept}" translates to...) and end with a short, encouraging message in English. Do not provide a detailed explanation. Use markdown formatting.`,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Sorry, an error occurred while generating the explanation.";
  }
}
