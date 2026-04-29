import fs from 'fs';

const oldDataRaw = `
      {
        id: 'ex1_1',
        type: 'multiple-choice',
        text: 'Who ____ that man?',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"that man" corresponds to "he", so we use "is".'
      },
      {
        id: 'ex1_2',
        type: 'multiple-choice',
        text: 'How ____ your parents?',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: '"your parents" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_3',
        type: 'multiple-choice',
        text: 'What ____ your name?',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"your name" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_4',
        type: 'multiple-choice',
        text: 'How old ____ you?',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: 'With the pronoun "you", we always use "are".'
      },
      {
        id: 'ex1_5',
        type: 'multiple-choice',
        text: 'I ____ not tired.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'am',
        explanation: 'With the pronoun "I", we always use "am".'
      },
      {
        id: 'ex1_6',
        type: 'multiple-choice',
        text: 'She ____ a student.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: 'With "she", we use "is".'
      },
      {
        id: 'ex1_7',
        type: 'multiple-choice',
        text: 'We ____ from Italy.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: 'With "we", we use "are".'
      },
      {
        id: 'ex1_8',
        type: 'multiple-choice',
        text: '____ they at home?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Are',
        explanation: 'In questions with "they", we use "Are" at the beginning.'
      },
      {
        id: 'ex1_9',
        type: 'fill-blank',
        text: 'It ___ hot today. (affirmative)',
        correctAnswer: 'is',
        explanation: 'With "it", we use "is".'
      },
      {
        id: 'ex1_10',
        type: 'fill-blank',
        text: '___ you a doctor? (question)',
        correctAnswer: 'Are',
        explanation: 'With "you" in questions, we start with "Are".'
      },
      {
        id: 'ex1_11',
        type: 'multiple-choice',
        text: 'My brother and I ____ good friends.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: '"My brother and I" equals "we" (plural), so we use "are". Do not use "am" just because you see "I".'
      },
      {
        id: 'ex1_12',
        type: 'multiple-choice',
        text: 'The dogs ____ in the garden.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: '"The dogs" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_13',
        type: 'multiple-choice',
        text: '____ he your teacher?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Is',
        explanation: 'In questions where the subject is "he", we start with "Is".'
      },
      {
        id: 'ex1_14',
        type: 'multiple-choice',
        text: 'Mary ____ not ready.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"Mary" corresponds to "she", so we use "is".'
      },
      {
        id: 'ex1_15',
        type: 'fill-blank',
        text: 'I ___ happy to see you. (affirmative)',
        correctAnswer: 'am',
        explanation: 'With "I", we always use "am".'
      },
      {
        id: 'ex1_16',
        type: 'multiple-choice',
        text: '____ you tired?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Are',
        explanation: 'In questions with "you", we start with "Are".'
      },
      {
        id: 'ex1_17',
        type: 'fill-blank',
        text: 'My children ___ playing in the yard.',
        correctAnswer: 'are',
        explanation: '"children" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_18',
        type: 'multiple-choice',
        text: '____ she your sister?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Is',
        explanation: 'With "she" in questions, we use "Is".'
      },
      {
        id: 'ex1_19',
        type: 'fill-blank',
        text: 'I ___ an engineer. (affirmative)',
        correctAnswer: 'am',
        explanation: 'With "I", we always use "am".'
      },
      {
        id: 'ex1_20',
        type: 'multiple-choice',
        text: 'The weather ____ nice today.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"The weather" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_21',
        type: 'fill-blank',
        text: 'Those shoes ___ very expensive.',
        correctAnswer: 'are',
        explanation: '"shoes" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_22',
        type: 'multiple-choice',
        text: '____ I late for the meeting?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Am',
        explanation: 'With "I", we use "Am".'
      },
      {
        id: 'ex1_23',
        type: 'fill-blank',
        text: 'This bag ___ heavy.',
        correctAnswer: 'is',
        explanation: '"This bag" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_24',
        type: 'multiple-choice',
        text: 'Look! There ____ Carol.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"Carol" corresponds to "she", so we use "is".'
      },
      {
        id: 'ex1_25',
        type: 'fill-blank',
        text: 'My car ___ blue.',
        correctAnswer: 'is',
        explanation: '"My car" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_26',
        type: 'multiple-choice',
        text: 'Rome ____ the capital of Italy.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'is',
        explanation: '"Rome" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_27',
        type: 'fill-blank',
        text: 'His shoes ___ new.',
        correctAnswer: 'are',
        explanation: '"shoes" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_28',
        type: 'multiple-choice',
        text: '____ the shops open today?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Are',
        explanation: '"the shops" is plural ("they"), so we use "Are" in questions.'
      },
      {
        id: 'ex1_29',
        type: 'fill-blank',
        text: 'I ___ hungry. (affirmative)',
        correctAnswer: 'am',
        explanation: 'With "I", we always use "am".'
      },
      {
        id: 'ex1_30',
        type: 'multiple-choice',
        text: 'Whose books ____ these?',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: '"these" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_31',
        type: 'multiple-choice',
        text: 'Where ____ you from?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Are',
        explanation: 'In questions with "you", we use "Are".'
      },
      {
        id: 'ex1_32',
        type: 'fill-blank',
        text: 'The weather ___ very cold today.',
        correctAnswer: 'is',
        explanation: '"The weather" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_33',
        type: 'multiple-choice',
        text: '____ the dog in the garden?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Is',
        explanation: '"the dog" corresponds to "it", so we use "Is" in questions.'
      },
      {
        id: 'ex1_34',
        type: 'fill-blank',
        text: 'My parents ___ teachers.',
        correctAnswer: 'are',
        explanation: '"parents" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_35',
        type: 'multiple-choice',
        text: 'I ____ not very good at math.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'am',
        explanation: 'With "I", we always use "am".'
      },
      {
        id: 'ex1_36',
        type: 'fill-blank',
        text: 'This exercise ___ easy.',
        correctAnswer: 'is',
        explanation: '"This exercise" corresponds to "it", so we use "is".'
      },
      {
        id: 'ex1_37',
        type: 'multiple-choice',
        text: '____ your friend coming to the party?',
        options: ['Am', 'Is', 'Are'],
        correctAnswer: 'Is',
        explanation: '"your friend" corresponds to "he" or "she", so we use "Is".'
      },
      {
        id: 'ex1_38',
        type: 'fill-blank',
        text: 'The keys ___ on the table.',
        correctAnswer: 'are',
        explanation: '"keys" is plural ("they"), so we use "are".'
      },
      {
        id: 'ex1_39',
        type: 'multiple-choice',
        text: 'We ____ very happy with the results.',
        options: ['am', 'is', 'are'],
        correctAnswer: 'are',
        explanation: 'With "we", we use "are".'
      },
      {
        id: 'ex1_40',
        type: 'fill-blank',
        text: 'My computer ___ broken.',
        correctAnswer: 'is',
        explanation: '"My computer" corresponds to "it", so we use "is".'
      }
`;

const oldAdverbs = `
      {
        id: 'adv1',
        type: 'multiple-choice',
        text: 'I ____ late for school.',
        options: ['always am', 'am always'],
        correctAnswer: 'am always',
        explanation: 'The adverb goes AFTER the verb "to be".'
      },
      {
        id: 'adv2',
        type: 'multiple-choice',
        text: 'They ____ to the cinema.',
        options: ['often go', 'go often'],
        correctAnswer: 'often go',
        explanation: 'The adverb goes BEFORE main verbs like "go".'
      },
      {
        id: 'adv3',
        type: 'multiple-choice',
        text: 'She ____ her homework.',
        options: ['never forgets', 'forgets never'],
        correctAnswer: 'never forgets',
        explanation: 'The adverb goes BEFORE main verbs like "forget".'
      },
      {
        id: 'adv4',
        type: 'multiple-choice',
        text: 'We ____ busy on Mondays.',
        options: ['usually are', 'are usually'],
        correctAnswer: 'are usually',
        explanation: 'The adverb goes AFTER the verb "to be".'
      },
      {
        id: 'adv5',
        type: 'multiple-choice',
        text: 'He ____ TV in the evening.',
        options: ['sometimes watches', 'watches sometimes'],
        correctAnswer: 'sometimes watches',
        explanation: 'The adverb goes BEFORE main verbs like "watch".'
      },
      {
        id: 'adv6',
        type: 'multiple-choice',
        text: 'My brother ____ coffee.',
        options: ['doesn\\'t often drink', 'often doesn\\'t drink'],
        correctAnswer: 'doesn\\'t often drink',
        explanation: 'In negative sentences, the adverb goes after "don\\'t" or "doesn\\'t".'
      },
      {
        id: 'adv7',
        type: 'multiple-choice',
        text: 'Do you ____ work on Saturdays?',
        options: ['usually', 'usually do'],
        correctAnswer: 'usually',
        explanation: 'In questions, the adverb goes between the subject ("you") and the main verb ("work").'
      },
      {
        id: 'adv8',
        type: 'multiple-choice',
        text: 'I ____ eat meat.',
        options: ['hardly ever', 'am hardly ever'],
        correctAnswer: 'hardly ever',
        explanation: '"eat" is a main verb, so the adverb goes right before it. No need for "am".'
      },
      {
        id: 'adv9',
        type: 'multiple-choice',
        text: 'She ____ angry.',
        options: ['is never', 'never is'],
        correctAnswer: 'is never',
        explanation: 'The adverb goes AFTER the verb "to be".'
      },
      {
        id: 'adv10',
        type: 'multiple-choice',
        text: 'It ____ rains in summer.',
        options: ['often', 'is often'],
        correctAnswer: 'often',
        explanation: '"rains" is a main verb, so the adverb goes right before it.'
      },
      {
        id: 'adv11',
        type: 'multiple-choice',
        text: 'I play tennis ____.',
        options: ['always', 'twice a week'],
        correctAnswer: 'twice a week',
        explanation: 'Longer expressions of frequency like "twice a week" go at the end of the sentence.'
      },
      {
        id: 'adv12',
        type: 'multiple-choice',
        text: 'My parents ____ go on holiday.',
        options: ['often don\\'t', 'don\\'t often'],
        correctAnswer: 'don\\'t often',
        explanation: 'The adverb goes after "don\\'t" or "doesn\\'t".'
      },
      {
        id: 'adv13',
        type: 'multiple-choice',
        text: '____ you always wake up early?',
        options: ['Do', 'Are'],
        correctAnswer: 'Do',
        explanation: 'With main verbs like "wake up", we use "Do" for questions.'
      },
      {
        id: 'adv14',
        type: 'multiple-choice',
        text: 'John ____ to music.',
        options: ['usually listens', 'listens usually'],
        correctAnswer: 'usually listens',
        explanation: 'The adverb goes BEFORE the main verb.'
      },
      {
        id: 'adv15',
        type: 'multiple-choice',
        text: 'We are ____ tired after work.',
        options: ['always', 'always are'],
        correctAnswer: 'always',
        explanation: 'The adverb goes AFTER the verb "to be" ("are").'
      },
      {
        id: 'adv16',
        type: 'multiple-choice',
        text: 'She visits her grandmother ____.',
        options: ['sometimes', 'every Sunday'],
        correctAnswer: 'every Sunday',
        explanation: 'Longer expressions pattern at the end of the sentence.'
      },
      {
        id: 'adv17',
        type: 'multiple-choice',
        text: 'They ____ late.',
        options: ['are hardly ever', 'hardly ever are'],
        correctAnswer: 'are hardly ever',
        explanation: 'The adverb goes AFTER the verb "to be".'
      },
      {
        id: 'adv18',
        type: 'multiple-choice',
        text: 'I ____ drink alcohol.',
        options: ['don\\'t never', 'never'],
        correctAnswer: 'never',
        explanation: '"Never" is already negative, so we do not use "don\\'t".'
      },
      {
        id: 'adv19',
        type: 'multiple-choice',
        text: 'What time ____ usually go to bed?',
        options: ['do you', 'are you'],
        correctAnswer: 'do you',
        explanation: 'With main verbs ("go"), we use the auxiliary "do".'
      },
      {
        id: 'adv20',
        type: 'multiple-choice',
        text: 'He ____ his teeth.',
        options: ['always brushes', 'brushes always'],
        correctAnswer: 'always brushes',
        explanation: 'The adverb goes BEFORE the main verb.'
      },
      {
        id: 'adv21',
        type: 'multiple-choice',
        text: 'Tom is ____ at home on weekends.',
        options: ['usually', 'usually is'],
        correctAnswer: 'usually',
        explanation: 'The adverb goes AFTER "to be".'
      },
      {
        id: 'adv22',
        type: 'multiple-choice',
        text: 'I ____ read books.',
        options: ['sometimes', 'sometimes do'],
        correctAnswer: 'sometimes',
        explanation: 'The adverb belongs before the main verb.'
      },
      {
        id: 'adv23',
        type: 'multiple-choice',
        text: 'Do they ____ eat out?',
        options: ['often', 'often do'],
        correctAnswer: 'often',
        explanation: 'In a question, the adverb goes before the main verb.'
      },
      {
        id: 'adv24',
        type: 'multiple-choice',
        text: 'My dog ____ barks.',
        options: ['never', 'never doesn\\'t'],
        correctAnswer: 'never',
        explanation: '"never" makes the sentence negative without needing "doesn\\'t".'
      },
      {
        id: 'adv25',
        type: 'multiple-choice',
        text: 'She goes to the cinema ____.',
        options: ['hardly ever', 'once a month'],
        correctAnswer: 'once a month',
        explanation: 'Positioning at the end requires an expression of frequency like "once a month".'
      },
      {
        id: 'adv26',
        type: 'multiple-choice',
        text: 'We ____ breakfast together.',
        options: ['always have', 'have always'],
        correctAnswer: 'always have',
        explanation: 'Before the main verb ("have" meaning eat).'
      },
      {
        id: 'adv27',
        type: 'multiple-choice',
        text: 'He ____ late for work.',
        options: ['is often', 'often is'],
        correctAnswer: 'is often',
        explanation: 'After the verb "to be".'
      },
      {
        id: 'adv28',
        type: 'multiple-choice',
        text: 'I ____ watch TV in the morning.',
        options: ['hardly ever', 'hardly ever do'],
        correctAnswer: 'hardly ever',
        explanation: 'Before the main verb.'
      },
      {
        id: 'adv29',
        type: 'multiple-choice',
        text: 'Does he ____ call you?',
        options: ['sometimes', 'is sometimes'],
        correctAnswer: 'sometimes',
        explanation: 'Adverb before the main verb.'
      },
      {
        id: 'adv30',
        type: 'multiple-choice',
        text: 'I clean my room ____.',
        options: ['every day', 'always'],
        correctAnswer: 'every day',
        explanation: 'At the end of the sentence, we use expressions like "every day" rather than single adverbs.'
      },
      {
        id: 'adv31',
        type: 'fill-blank',
        text: 'I ___ to the gym on Mondays. (usually / go)',
        correctAnswer: 'usually go',
        explanation: 'The adverb goes before the main verb.'
      },
      {
        id: 'adv32',
        type: 'fill-blank',
        text: 'He ___ late for work. (is / never)',
        correctAnswer: 'is never',
        explanation: 'The adverb goes after the verb "to be".'
      },
      {
        id: 'adv33',
        type: 'fill-blank',
        text: 'They ___ TV in the morning. (often / do not watch)',
        correctAnswer: 'do not often watch',
        explanation: 'The adverb goes after "do not".'
      },
      {
        id: 'adv34',
        type: 'fill-blank',
        text: 'My sister ___ pizza. (sometimes / eats)',
        correctAnswer: 'sometimes eats',
        explanation: 'The adverb goes before the main verb.'
      },
      {
        id: 'adv35',
        type: 'fill-blank',
        text: 'The teacher ___ angry. (always / is)',
        correctAnswer: 'is always',
        explanation: 'The adverb goes after the verb "to be".'
      },
      {
        id: 'adv36',
        type: 'fill-blank',
        text: 'We ___ alcohol. (hardly ever / drink)',
        correctAnswer: 'hardly ever drink',
        explanation: 'The adverb goes before the main verb.'
      },
      {
        id: 'adv37',
        type: 'fill-blank',
        text: 'She ___ my birthday. (never / forgets)',
        correctAnswer: 'never forgets',
        explanation: 'The adverb goes before the main verb ("forgets").'
      },
      {
        id: 'adv38',
        type: 'fill-blank',
        text: 'I ___ late. (rarely / am)',
        correctAnswer: 'am rarely',
        explanation: 'The adverb goes after the verb "to be".'
      },
      {
        id: 'adv39',
        type: 'fill-blank',
        text: 'My parents ___ to the cinema. (often / go)',
        correctAnswer: 'often go',
        explanation: 'The adverb goes before the main verb.'
      },
      {
        id: 'adv40',
        type: 'fill-blank',
        text: 'Tom ___ tired after work. (usually / is)',
        correctAnswer: 'is usually',
        explanation: 'The adverb goes after the verb "to be".'
      }
`;

const path = 'src/data/a1.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// To Be
const toBeIndex = data.findIndex(d => d.id === '1-verb-to-be-identity');
if(toBeIndex !== -1) {
  // Replace the placeholder quiz with the 40 original questions
  data[toBeIndex].exercises = eval(`[${oldDataRaw}]`);
}

// Adverbs
const advIndex = data.findIndex(d => d.id === '6-adverbs-of-frequency');
if(advIndex !== -1) {
  data[advIndex].exercises = eval(`[${oldAdverbs}]`);
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));

console.log('Restored 40 questions to Verb to Be and Adverbs of Frequency!');
