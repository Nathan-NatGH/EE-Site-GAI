export async function explainGrammarConcept(concept: string, context: string, targetLanguage: string = 'Portuguese') {
  try {
    const response = await fetch('/api/explain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ concept, context, targetLanguage })
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error calling backend:", error);
    return "Sorry, an error occurred while generating the explanation.";
  }
}
