import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { concept, context, targetLanguage = 'Portuguese' } = req.body;
    
    let apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) apiKey = apiKey.replace(/^["']|["']$/g, '').trim();

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY relies on environment, but it was not found.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'models/gemini-3.1-pro-preview',
      contents: `You are an English teacher. 
      The student selected the concept/word: "${concept}".
      Context they are looking at: "${context}"
      Please simply provide the translation to ${targetLanguage} (e.g. In ${targetLanguage}, "${concept}" translates to...) and end with a short, encouraging message in English. Do not provide a detailed explanation. Use markdown formatting.`,
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Error calling Gemini:", error);
    
    let errorMessage = "Sorry, an error occurred while generating the explanation.";
    if (error?.status === 400 || error?.message?.includes("API key not valid")) {
        errorMessage = "Your Gemini API key appears to be invalid. Please check your API key in the AI Studio Secrets panel.";
    }

    res.status(500).json({ error: errorMessage });
  }
}
