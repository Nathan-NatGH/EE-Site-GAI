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
      let errorMsg = `API error: ${response.status}`;
      try {
        const errData = await response.json();
        if (errData.error) errorMsg = errData.error;
      } catch (e) {
        // ignore
      }
      throw new Error(errorMsg);
    }
    
    const data = await response.json();
    return data.text;
  } catch (error: any) {
    console.error("Error calling backend:", error);
    return error.message || "Sorry, an error occurred while generating the explanation.";
  }
}
