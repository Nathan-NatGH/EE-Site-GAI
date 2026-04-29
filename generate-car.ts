import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

async function generate() {
  const prompt = `
Generate a JSON object for a situational English lesson about "Buying a Car in the USA". 
The JSON must follow this structure exactly (no markdown wrapping, just the raw JSON):
{
  "id": "situational-01",
  "title": "Buying a Car in the USA",
  "description": "Learn the essentials of buying a car in the US: financing, rates, warranties, and solving problems at the dealership. Choose your reading level.",
  "level": "Mixed",
  "isSituational": true,
  "explanationMarkdown": "",
  "exercises": [],
  "situations": {
    "beginner": {
      "explanationMarkdown": "...a complete beginner ESL reading text about buying a car...",
      "exercises": [ 10 questions ]
    },
    "intermediate": {
      "explanationMarkdown": "...intermediate ESL reading...",
      "exercises": [ 10 questions ]
    },
    "advanced": {
      "explanationMarkdown": "...advanced ESL reading... make sure you cover financing, rates, warranties, what to do when problems arise...",
      "exercises": [ 10 questions ]
    }
  }
}

The questions MUST look like this:
{
  id: string;
  type: "fill-blank" | "multiple-choice";
  text: string;
  options?: string[]; // ONLY for multiple choice
  correctAnswer: string;
  explanation: string;
}
For each level, generate exactly 10 questions based on the text. Mix multiple choice and fill-blank. True/False can be multiple-choice with "True" and "False" options.

IMPORTANT: The JSON must be valid, stringified JSON. No \`\`\`json markdown blocks, just raw JSON text.
`;

  const response = await ai.models.generateContent({
    model: "models/gemini-3.1-pro-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json"
    }
  });

  fs.writeFileSync("src/data/car-buying.json", response.text);
  console.log("Generated car-buying.json!");
}

generate();
