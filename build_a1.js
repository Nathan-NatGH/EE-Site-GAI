import fs from 'fs';

const rawTitles = [
"Present simple forms of 'to be': am/is/are",
"This, that, these, those",
"Possessive adjectives and subject pronouns (I/my, you/your, etc.)",
"A/an, plurals: Singular and plural forms",
"Adjectives: Old, interesting, expensive, etc.",
"Present simple: I do, I don't, Do I?",
"Questions: Word order and question words",
"Adverbs of frequency with present simple",
"Object pronouns vs subject pronouns: Me or I, she or her?",
"Whose, possessive 's: Whose is this? It's Mike's",
"At, in, on: Prepositions of time",
"At, in, on: Prepositions of place",
"Can, can't: Ability, possibility, permission",
"Present continuous: I'm doing, I'm not doing, Are you doing?",
"Present simple or present continuous?",
"The imperative: Sit down! Don’t talk!",
"Was/were: Past simple of 'be'",
"Past simple: Regular/irregular verbs",
"Past simple: Negatives and questions",
"Verbs + to + infinitive and verbs + -ing",
"Would you like...? I'd like...",
"Have got",
"A, some, any: Countable and uncountable nouns",
"There is, there are / there was, there were",
"There or It",
"Next to, under, between, in front of, behind, over, etc.",
"Much, many, a lot of, a little, a few",
"Comparative adjectives: Older than, more important than, etc.",
"Superlative adjectives: The oldest, the most important, etc.",
"'Will' and 'shall': Future",
"Be going to: Plans and predictions",
"Adverbs of manner (slowly) or adjectives (slow)?",
"A/an, the, no article: The use of articles in English",
"Conjunctions: And, but, or, so, because",
"Basic word order in English",
"The difference between 'this' and 'it'"
];

const existingData = JSON.parse(fs.readFileSync('src/data/a1.json', 'utf8'));

// Helper to find existing matching module to rescue exercises and explanations.
function findMatch(title) {
   let lower = title.toLowerCase();
   if(lower.includes('to be')) return existingData.find(d => d.title.includes('To Be'));
   if(lower.includes('this, that')) return existingData.find(d => d.title.includes('This, That'));
   if(lower.includes("present simple: i do")) return existingData.find(d => d.title.includes('Present Simple'));
   if(lower.includes("possessive adjectives")) return existingData.find(d => d.title.includes('Possessive Adjectives'));
   if(lower.includes("word order and question")) return existingData.find(d => d.title.includes('Question Words'));
   if(lower.includes("adverbs of frequency")) return existingData.find(d => d.title.includes('Adverbs of Frequency'));
   if(lower.includes("prepositions of time")) return existingData.find(d => d.title.includes('Prepositions of Time'));
   if(lower.includes("can, can't")) return existingData.find(d => d.title.includes("Can and Can't"));
   if(lower.includes("present continuous: i'm doing")) return existingData.find(d => d.title.includes('Present Continuous'));
   if((lower.includes("past simple: regular") || lower.includes("past simple: regular/irregular"))) {
       // Merge both regular and irregular exercises
       let reg = existingData.find(d => d.title.includes('Regular Verbs'));
       let irreg = existingData.find(d => d.title.includes('Irregular Verbs'));
       let mergedExercises = [];
       if (reg && reg.exercises) mergedExercises = mergedExercises.concat(reg.exercises);
       if (irreg && irreg.exercises) mergedExercises = mergedExercises.concat(irreg.exercises);
       return { exercises: mergedExercises, explanationMarkdown: reg?.explanationMarkdown || '' };
   }
   if(lower.includes("there is, there are")) return existingData.find(d => d.title.includes('There is / There are'));
   if(lower.includes("a, some, any")) return existingData.find(d => d.title.includes('Some and Any'));
   if(lower.includes("object pronouns vs")) return existingData.find(d => d.title.includes('Object Pronouns'));
   if(lower.includes("comparative adjectives:")) return existingData.find(d => d.title.includes('Comparative Adjectives'));
   return null;
}

const newData = rawTitles.map((title, index) => {
   const match = findMatch(title);
   const id = `a1_m${index + 1}`;
   return {
       id: id,
       level: 'A1',
       title: `${index + 1}. ${title}`,
       description: match?.description || 'Placeholder for future content.',
       explanationMarkdown: match?.explanationMarkdown || `## ${title}\nContent coming soon.`,
       exercises: match?.exercises && match.exercises.length > 0 ? match.exercises : []
   };
});

fs.writeFileSync('src/data/a1.json', JSON.stringify(newData, null, 2));

console.log("Built a1.json with " + newData.length + " items.");
