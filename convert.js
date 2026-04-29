import fs from 'fs';

const inputData = [
  {
    "title": "1. Verb 'To Be' & Identity",
    "description": "Essential for introducing yourself and others in a digital world.",
    "explanation": "<p class='mb-4'>The verb <b>to be</b> is the most important verb in English. We use it for names, jobs, and nationalities.</p><div class='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'><div class='bg-slate-50 p-4 rounded-xl border'><b>Affirmative</b><br>I <b>am</b> (I'm)<br>You/We/They <b>are</b> ('re)<br>He/She/It <b>is</b> ('s)</div><div class='bg-slate-50 p-4 rounded-xl border'><b>Negative</b><br>I <b>am not</b><br>You/We/They <b>aren't</b><br>He/She/It <b>isn't</b></div></div><p class='text-sm italic text-indigo-600'>Example: 'I'm a digital nomad, but she isn't. She's a designer.'</p>",
    "quiz": [
      {
        "question": "Choose the correct form: 'We ________ currently out of the office.'",
        "options": ["am", "is", "are"],
        "correct": "are",
        "why": "We use 'are' for plural subjects like 'We' and 'They'."
      },
      {
        "question": "Negative form: 'My laptop ________ new, it's very old.'",
        "options": ["am not", "isn't", "aren't"],
        "correct": "isn't",
        "why": "A 'laptop' is an 'it', so we use 'is not' (isn't)."
      }
    ]
  },
  {
    "title": "2. This, That, These, Those",
    "description": "Talking about objects near you or far away.",
    "explanation": "<p class='mb-4'>Use these to point to things. <b>This/These</b> are for things 'Here'. <b>That/Those</b> are for things 'There'.</p><table class='w-full text-left mb-4 border-collapse'><tr class='border-b'><th></th><th>Singular</th><th>Plural</th></tr><tr><td><b>Near</b></td><td>This</td><td>These</td></tr><tr><td><b>Far</b></td><td>That</td><td>Those</td></tr></table>",
    "quiz": [
      {
        "question": "Pointing to a phone in your hand: '________ is my new phone.'",
        "options": ["This", "That", "Those"],
        "correct": "This",
        "why": "If you are holding it, it is 'Near' and 'Singular'."
      },
      {
        "question": "Pointing to some people across the street: 'Who are ________ people?'",
        "options": ["this", "that", "those"],
        "correct": "those",
        "why": "People are plural and they are 'Far' away."
      }
    ]
  },
  {
    "title": "3. Present Simple: Social Media Habits",
    "description": "Talking about things you do regularly.",
    "explanation": "<p class='mb-4'>Use Present Simple for daily routines. Remember the <b>'S'</b> for He/She/It!</p><div class='bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500 mb-4'><p><b>I/You/We/They:</b> post, follow, like</p><p><b>He/She/It:</b> posts, follows, likes</p></div>",
    "quiz": [
      {
        "question": "Complete the sentence: 'He ________ a lot of videos on TikTok.'",
        "options": ["post", "posts", "posting"],
        "correct": "posts",
        "why": "For 'He', we must add an 's' to the verb in Present Simple."
      },
      {
        "question": "Negative: 'I ________ have a Facebook account.'",
        "options": ["not", "don't", "doesn't"],
        "correct": "don't",
        "why": "We use 'don't' (do not) for I/You/We/They."
      }
    ]
  },
  {
    "title": "4. Possessive Adjectives",
    "description": "My, Your, His, Her... showing ownership.",
    "explanation": "<p class='mb-4'>These words always come <b>before</b> a noun.</p><ul class='list-disc ml-6'><li>I -> <b>My</b> profile</li><li>You -> <b>Your</b> password</li><li>He -> <b>His</b> laptop</li><li>She -> <b>Her</b> website</li></ul>",
    "quiz": [
      {
        "question": "Can you see ________ screen? (I)",
        "options": ["my", "me", "mine"],
        "correct": "my",
        "why": "We use 'my' before the noun 'screen'."
      },
      {
        "question": "The company changed ________ logo recently.",
        "options": ["it", "its", "it's"],
        "correct": "its",
        "why": "'Its' (no apostrophe) is the possessive form for things."
      }
    ]
  },
  {
    "title": "5. Question Words (Wh- Questions)",
    "description": "How to ask for information, WiFi passwords, and directions.",
    "explanation": "<p class='mb-4'>We use 'Wh-' words at the start of a sentence to get specific information.</p><ul class='grid grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl mb-4'><li><b>Who:</b> People</li><li><b>Where:</b> Places</li><li><b>When:</b> Time</li><li><b>Why:</b> Reasons</li><li><b>What:</b> Things</li><li><b>How:</b> Process/State</li></ul><p class='italic'>Example: '<b>Where</b> is the meeting?' or '<b>Who</b> is the new manager?'</p>",
    "quiz": [
      {
        "question": "________ do you start work every day?",
        "options": ["What", "When", "Who"],
        "correct": "When",
        "why": "We use 'When' to ask about time or schedule."
      },
      {
        "question": "________ much is the monthly subscription?",
        "options": ["Who", "How", "Where"],
        "correct": "How",
        "why": "'How much' is used to ask about price or quantity."
      }
    ]
  },
  {
    "title": "6. Adverbs of Frequency",
    "description": "Always, usually, often... talking about how often you do things.",
    "explanation": "<p class='mb-4'>These words usually go <b>before</b> the main verb, but <b>after</b> the verb 'be'.</p><div class='bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500 mb-4'><p>0% --- Never</p><p>50% --- Sometimes</p><p>90% --- Usually</p><p>100% --- Always</p></div><p class='text-sm'>Modern Tip: 'I <b>usually</b> work from home, but I\\'m <b>never</b> offline.'</p>",
    "quiz": [
      {
        "question": "Choose the correct order: 'I ________ late for Zoom calls.'",
        "options": ["am never", "never am", "am always not"],
        "correct": "am never",
        "why": "Adverbs of frequency go AFTER the verb 'to be'."
      },
      {
        "question": "Choose the correct order: 'She ________ her email.'",
        "options": ["checks always", "always checks", "always check"],
        "correct": "always checks",
        "why": "The adverb goes BEFORE the main verb, and we need the 's' for 'She'."
      }
    ]
  },
  {
    "title": "7. Prepositions of Time (In, At, On)",
    "description": "Never miss a deadline or a flight again.",
    "explanation": "<p class='mb-4'>Time prepositions can be tricky! Here is the remixed cheat sheet:</p><table class='w-full text-left border mb-4'><tr class='bg-slate-100'><th>Preposition</th><th>Usage</th></tr><tr><td><b>At</b></td><td>Specific times (At 5:00, At night)</td></tr><tr><td><b>On</b></td><td>Days & Dates (On Monday, On June 1st)</td></tr><tr><td><b>In</b></td><td>Months, Years, Centuries (In 2025, In July)</td></tr></table>",
    "quiz": [
      {
        "question": "The project deadline is ________ Friday.",
        "options": ["at", "in", "on"],
        "correct": "on",
        "why": "We use 'on' for days of the week."
      },
      {
        "question": "The webinar starts ________ 3:30 PM.",
        "options": ["at", "in", "on"],
        "correct": "at",
        "why": "We use 'at' for specific clock times."
      }
    ]
  },
  {
    "title": "8. Can and Can't (Ability)",
    "description": "Discussing your skills and technical capabilities.",
    "explanation": "<p class='mb-4'>Use <b>can</b> for things you are able to do. It never changes (no 's' for he/she/it!).</p><p class='bg-slate-800 text-white p-3 rounded mb-4'>Subject + Can + Verb (Base form)</p><p class='italic'>'I <b>can</b> code in Python, but I <b>can\\'t</b> speak Japanese.'</p>",
    "quiz": [
      {
        "question": "________ you share your screen, please?",
        "options": ["Can", "Do", "Are"],
        "correct": "Can",
        "why": "We use 'Can' to ask about ability or to make requests."
      },
      {
        "question": "He ________ understand the instructions.",
        "options": ["cans not", "doesn't can", "can't"],
        "correct": "can't",
        "why": "The negative of 'can' is 'cannot' or 'can't'. Never use 'doesn't' with can."
      }
    ]
  },
  {
    "title": "9. Present Continuous (Now)",
    "description": "Talking about what is happening right this second.",
    "explanation": "<p class='mb-4'>Use this for actions happening <b>now</b>. You need the verb 'to be' + 'ing'.</p><div class='p-4 border rounded-xl bg-green-50 mb-4'><b>Structure:</b> [Am/Is/Are] + [Verb + ing]</div><p class='text-sm'>Example: 'I <b>am recording</b> a podcast right now.'</p>",
    "quiz": [
      {
        "question": "Wait a minute, the app ________.",
        "options": ["is downloading", "downloads", "downloading"],
        "correct": "is downloading",
        "why": "If it's happening right now, we need 'is' + verb-ing."
      },
      {
        "question": "________ they working from the office today?",
        "options": ["Do", "Are", "Is"],
        "correct": "Are",
        "why": "We use 'Are' for 'They' in the continuous form."
      }
    ]
  },
  {
    "title": "10. Past Simple (Regular Verbs)",
    "description": "Reporting what you finished yesterday or last week.",
    "explanation": "<p class='mb-4'>For regular verbs, just add <b>-ed</b>. It is the same for all subjects!</p><ul class='mb-4'><li>Post -> Post<b>ed</b></li><li>Like -> Lik<b>ed</b></li><li>Check -> Check<b>ed</b></li></ul><p class='italic'>'I <b>finished</b> the report yesterday.'</p>",
    "quiz": [
      {
        "question": "I ________ the file to the cloud an hour ago.",
        "options": ["upload", "uploade", "uploaded"],
        "correct": "uploaded",
        "why": "Regular past simple verbs end in -ed."
      },
      {
        "question": "Did you ________ the email I sent?",
        "options": ["receive", "received", "receives"],
        "correct": "receive",
        "why": "In questions with 'Did', the main verb stays in the base form (no -ed)."
      }
    ]
  },
  {
    "title": "11. There is / There are",
    "description": "Describing your workspace and local area.",
    "explanation": "<p class='mb-4'>Use <b>'There is'</b> for singular items and <b>'There are'</b> for plural items.</p><div class='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'><div class='bg-slate-50 p-4 rounded-xl border'><b>Singular (a/an)</b><br>There is a laptop.<br>There isn't a printer.</div><div class='bg-slate-50 p-4 rounded-xl border'><b>Plural</b><br>There are two screens.<br>There aren't any windows.</div></div><p class='text-sm'>Modern Example: 'In my office, <b>there is</b> a standing desk and <b>there are</b> many cables.'</p>",
    "quiz": [
      {
        "question": "________ any free desks in the coworking space?",
        "options": ["Is there", "Are there", "There are"],
        "correct": "Are there",
        "why": "We use 'Are there' for plural questions (desks)."
      },
      {
        "question": "________ a coffee shop on the first floor.",
        "options": ["There is", "There are", "Is there"],
        "correct": "There is",
        "why": "We use 'There is' for one single thing (a coffee shop)."
      }
    ]
  },
  {
    "title": "12. Past Simple (Irregular Verbs)",
    "description": "The 'Top 10' verbs that don't follow the -ed rule.",
    "explanation": "<p class='mb-4'>Some verbs are 'rebels'. They change completely in the past. You must memorize these!</p><table class='w-full text-left mb-4 border'><tr class='bg-slate-100'><th>Base</th><th>Past</th></tr><tr><td>Go</td><td><b>Went</b></td></tr><tr><td>Have</td><td><b>Had</b></td></tr><tr><td>See</td><td><b>Saw</b></td></tr><tr><td>Buy</td><td><b>Bought</b></td></tr><tr><td>Say</td><td><b>Said</b></td></tr></table>",
    "quiz": [
      {
        "question": "I ________ a new keyboard online yesterday.",
        "options": ["buyed", "bought", "buy"],
        "correct": "bought",
        "why": "'Buy' is irregular. The past form is 'bought'."
      },
      {
        "question": "We ________ to a tech conference last month.",
        "options": ["goed", "goes", "went"],
        "correct": "went",
        "why": "The past of 'go' is 'went'."
      }
    ]
  },
  {
    "title": "13. Some and Any",
    "description": "Talking about quantities when we don't have an exact number.",
    "explanation": "<p class='mb-4'>Use <b>Some</b> for positive sentences. Use <b>Any</b> for negatives and questions.</p><ul class='list-disc ml-6 mb-4'><li>I have <b>some</b> ideas. (+)</li><li>I don't have <b>any</b> battery. (-)</li><li>Do you have <b>any</b> stickers? (?)</li></ul>",
    "quiz": [
      {
        "question": "I need to buy ________ new headphones.",
        "options": ["some", "any", "a"],
        "correct": "some",
        "why": "We use 'some' for positive plural sentences."
      },
      {
        "question": "I didn't receive ________ notification about the meeting.",
        "options": ["some", "any", "no"],
        "correct": "any",
        "why": "We use 'any' for negative sentences."
      }
    ]
  },
  {
    "title": "14. Object Pronouns",
    "description": "Me, You, Him, Her, Us, Them... focusing the action.",
    "explanation": "<p class='mb-4'>These words receive the action. They usually come <b>after</b> the verb.</p><p class='bg-slate-50 p-4 rounded mb-4'>'If you have the file, please send <b>it</b> to <b>me</b>.'</p><table class='w-full text-xs'><tr><td>I -> <b>me</b></td><td>He -> <b>him</b></td><td>We -> <b>us</b></td></tr><tr><td>You -> <b>you</b></td><td>She -> <b>her</b></td><td>They -> <b>them</b></td></tr></table>",
    "quiz": [
      {
        "question": "I like that influencer. I follow ________ on Twitter.",
        "options": ["he", "him", "his"],
        "correct": "him",
        "why": "'Him' is the object pronoun for a man."
      },
      {
        "question": "Our team is great! Join ________ for lunch.",
        "options": ["we", "our", "us"],
        "correct": "us",
        "why": "'Us' is the object pronoun for 'we'."
      }
    ]
  },
  {
    "title": "15. Comparative Adjectives",
    "description": "Comparing gadgets, apps, and services.",
    "explanation": "<p class='mb-4'>Use <b>-er</b> for short words and <b>more</b> for long words. Always use <b>than</b> to connect them.</p><ul class='mb-4'><li>Fast -> Fast<b>er</b></li><li>Cheap -> Cheap<b>er</b></li><li>Expensive -> <b>More</b> expensive</li></ul><p class='italic'>'My new laptop is <b>faster than</b> my old one.'</p>",
    "quiz": [
      {
        "question": "The Pro version is ________ than the Basic version.",
        "options": ["more expensive", "expensiver", "most expensive"],
        "correct": "more expensive",
        "why": "For long words like 'expensive', we use 'more'."
      },
      {
        "question": "Fiber internet is ________ than DSL.",
        "options": ["quick", "quicker", "more quick"],
        "correct": "quicker",
        "why": "For short words, we add -er (quicker)."
      }
    ]
  }
];

const toId = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const mapped = inputData.map((lesson, lessonIdx) => {
  return {
    id: toId(lesson.title),
    title: lesson.title,
    level: "A1",
    description: lesson.description,
    explanationMarkdown: lesson.explanation,
    exercises: lesson.quiz.map((q, qIdx) => ({
      id: "l" + lessonIdx + "_q" + qIdx,
      type: 'multiple-choice',
      text: q.question,
      options: q.options,
      correctAnswer: q.correct,
      explanation: q.why
    }))
  };
});

fs.writeFileSync('src/data/a1.json', JSON.stringify(mapped, null, 2));
console.log("Written a1.json");
