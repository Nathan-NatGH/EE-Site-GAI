import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for Gemini explanation
  app.post("/api/explain", async (req, res) => {
    try {
      const { concept, context, targetLanguage = 'Portuguese' } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
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
      res.status(500).json({ error: "Sorry, an error occurred while generating the explanation." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
