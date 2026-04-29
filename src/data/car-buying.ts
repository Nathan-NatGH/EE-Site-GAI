import { LessonContent } from "./lessons";

export const carBuyingLesson: LessonContent = {
  id: "situational-01",
  title: "Buying a Car in the USA",
  description: "Learn the essentials of buying a car in the US: financing, rates, warranties, and solving problems at the dealership.",
  level: "Mixed",
  isSituational: true,
  explanationMarkdown: "",
  exercises: [],
  situations: {
    beginner: {
      explanationMarkdown: `
# Buying a Car in the USA

Buying a car is a big step. In the USA, many people buy cars at a **dealership**. The person who sells the car is the **salesperson**.

First, you look at cars. You can buy a **new car** or a **used car**. A used car is cheaper. When you find a car you like, you can test drive it. 

If you want to buy it, you need to pay. Cars are expensive. Many people cannot pay for the car all at once. They get a **loan** from a bank. This is called **financing**. You pay some money every month. You also pay extra money called **interest rate**. A low interest rate is good.

You also get a **warranty**. A warranty means the dealership will fix the car if it breaks. Always ask about the warranty. If you have problems, you should talk to the manager.
`,
      exercises: [
        {
          id: "cb-beg-1",
          type: "multiple-choice",
          text: "What do you call the place where you buy a car?",
          options: ["Supermarket", "Dealership", "Bank", "Hospital"],
          correctAnswer: "Dealership",
          explanation: "In the USA, people usually buy cars at a dealership."
        },
        {
          id: "cb-beg-2",
          type: "fill-blank",
          text: "The person who sells the car is called the _______.",
          correctAnswer: "salesperson",
          explanation: "A salesperson helps you buy a car."
        },
        {
          id: "cb-beg-3",
          type: "multiple-choice",
          text: "True or False: A used car is usually more expensive than a new car.",
          options: ["True", "False"],
          correctAnswer: "False",
          explanation: "A used car is cheaper than a new car."
        },
        {
          id: "cb-beg-4",
          type: "multiple-choice",
          text: "When you borrow money to pay for a car over time, it is called _______.",
          options: ["Renting", "Financing", "Selling", "Fixing"],
          correctAnswer: "Financing",
          explanation: "Getting a loan to pay every month is called financing."
        },
        {
          id: "cb-beg-5",
          type: "fill-blank",
          text: "The extra money you pay to the bank every month is the interest _______.",
          correctAnswer: "rate",
          explanation: "The extra money is called the interest rate."
        },
        {
          id: "cb-beg-6",
          type: "multiple-choice",
          text: "Is a low interest rate good or bad?",
          options: ["Good", "Bad"],
          correctAnswer: "Good",
          explanation: "A low interest rate means you pay less extra money."
        },
        {
          id: "cb-beg-7",
          type: "multiple-choice",
          text: "What means the dealership will fix the car if it breaks?",
          options: ["A receipt", "A warranty", "A test drive", "A title"],
          correctAnswer: "A warranty",
          explanation: "A warranty is a promise to fix the car if it breaks."
        },
        {
          id: "cb-beg-8",
          type: "fill-blank",
          text: "If you have a problem with the car, you should talk to the _______.",
          correctAnswer: "manager",
          explanation: "You can talk to the manager if you have problems at the dealership."
        },
        {
          id: "cb-beg-9",
          type: "multiple-choice",
          text: "Before buying a car, it is a good idea to _______ drive it.",
          options: ["try", "test", "play", "make"],
          correctAnswer: "test",
          explanation: "A test drive lets you see if you like the car."
        },
        {
          id: "cb-beg-10",
          type: "multiple-choice",
          text: "True or False: Cars are cheap.",
          options: ["True", "False"],
          correctAnswer: "False",
          explanation: "Cars are expensive."
        }
      ]
    },
    intermediate: {
      explanationMarkdown: `
# Buying a Car in the USA

Buying a car in the United States involves several important steps. Most people go to a **car dealership** to buy their vehicles. Before making a decision, you should always go for a **test drive** to see how the car feels on the road.

If you cannot pay the full price upfront, which is very common, you will need to look into **financing**. Financing means taking out an auto loan. When you finance a car, the lender will charge you an **interest rate** (often called APR). A lower rate means you will pay less money over time. It's smart to compare rates at your bank or credit union before accepting the dealer's rate.

Another critical factor is the **warranty**. A warranty is a guarantee from the manufacturer or dealer to repair or replace parts of the car if they break down within a certain time or mileage. New cars come with great warranties, but used cars are sometimes sold "as-is", meaning if it breaks, you must pay for it.

If you encounter problems or feel confused by the contract, stop and ask questions. Watch out for extra fees. Remember, it's okay to negotiate the price. If the deal isn't right, you can always walk away.
`,
      exercises: [
        {
          id: "cb-int-1",
          type: "multiple-choice",
          text: "Where do most people go to buy their vehicles in the USA?",
          options: ["To the bank", "To a car dealership", "To a repair shop", "To the manufacturer"],
          correctAnswer: "To a car dealership",
          explanation: "Most cars are sold at car dealerships."
        },
        {
          id: "cb-int-2",
          type: "fill-blank",
          text: "Before deciding, you should always go for a _______ drive.",
          correctAnswer: "test",
          explanation: "A test drive is essential before buying."
        },
        {
          id: "cb-int-3",
          type: "multiple-choice",
          text: "If you cannot pay the full price upfront, you need _______.",
          options: ["financing", "a warranty", "a used car", "a receipt"],
          correctAnswer: "financing",
          explanation: "Financing means taking out a loan to pay for the car over time."
        },
        {
          id: "cb-int-4",
          type: "multiple-choice",
          text: "What does taking out an auto loan mean?",
          options: ["You are renting the car", "You borrow money to pay for the car", "You return the car quickly", "You are buying a warranty"],
          correctAnswer: "You borrow money to pay for the car",
          explanation: "An auto loan is when a bank lends you money to buy the car."
        },
        {
          id: "cb-int-5",
          type: "fill-blank",
          text: "The guarantee to repair or replace parts if they break is called a _______.",
          correctAnswer: "warranty",
          explanation: "A warranty covers repairs for a certain time."
        },
        {
          id: "cb-int-6",
          type: "multiple-choice",
          text: "True or False: Used cars always come with great warranties.",
          options: ["True", "False"],
          correctAnswer: "False",
          explanation: "Used cars are sometimes sold 'as-is' without warranties."
        },
        {
          id: "cb-int-7",
          type: "multiple-choice",
          text: "What does 'as-is' mean when buying a used car?",
          options: ["The dealer will fix any problems", "You must pay for repairs if the car breaks", "The car is brand new", "You can return the car anytime"],
          correctAnswer: "You must pay for repairs if the car breaks",
          explanation: "'As-is' means the dealer is not responsible for repairs after the sale."
        },
        {
          id: "cb-int-8",
          type: "fill-blank",
          text: "If you don't like the deal, you can always walk _______.",
          correctAnswer: "away",
          explanation: "You have the right to walk away if the deal isn't good."
        },
        {
          id: "cb-int-9",
          type: "multiple-choice",
          text: "Why is a lower interest rate better?",
          options: ["You pay more monthly", "You pay less money over time", "The car goes faster", "The warranty lasts longer"],
          correctAnswer: "You pay less money over time",
          explanation: "A lower interest rate means you owe less extra money to the lender."
        },
        {
          id: "cb-int-10",
          type: "multiple-choice",
          text: "True or False: You should negotiate the price of a car.",
          options: ["True", "False"],
          correctAnswer: "True",
          explanation: "Negotiating can help you get a better deal."
        }
      ]
    },
    advanced: {
      explanationMarkdown: `
# Navigating the Dealership: Buying a Car in the USA

Purchasing a vehicle in the United States requires navigating through various financial choices, dealership tactics, and legal jargon. While stepping onto a dealership lot can be intimidating, understanding the process ensures you get a fair deal. 

The transaction typically begins with selecting a vehicle and taking it for a spin. From there, you'll be handed off to the Finance and Insurance (F&I) manager. Unless you're paying in cash, you need **financing**. Dealerships often offer financing, but their **interest rates (APR)** may include a hidden markup. It is highly recommended to seek pre-approval from a bank or credit union prior to your visit. The length of the loan (the term) and the APR will dictate your monthly payments and the total accrued interest. 

Beyond the vehicle’s sticker price, prepare for additional costs known as "add-ons," such as extended **warranties**, gap insurance, or paint protection. A manufacturer's warranty usually covers major defects on new cars for several years, but an extended warranty might have tricky loopholes. Always read the fine print before signing anything. If disputes arise or you suspect deceptive practices, your first step is remaining calm, confronting the general manager, or seeking assistance from your state's Attorney General or consumer protection agencies.

Lastly, used cars are frequently sold **"as-is"**. This implies that the moment you drive it off the lot, any mechanical failures are entirely your financial burden. Requesting a thorough inspection by an independent mechanic prior to purchase is a vital preventative measure.
`,
      exercises: [
        {
          id: "cb-adv-1",
          type: "multiple-choice",
          text: "What does 'F&I' stand for in a dealership?",
          options: ["Fast and Immediate", "Finance and Insurance", "Free and Included", "Fix and Inspect"],
          correctAnswer: "Finance and Insurance",
          explanation: "F&I stands for the Finance and Insurance department."
        },
        {
          id: "cb-adv-2",
          type: "multiple-choice",
          text: "Why might dealership interest rates be disadvantageous?",
          options: ["They are always 0%", "They might include a hidden markup", "They are only for new cars", "They require a warranty"],
          correctAnswer: "They might include a hidden markup",
          explanation: "The text states that dealership rates may include a hidden markup."
        },
        {
          id: "cb-adv-3",
          type: "fill-blank",
          text: "It is recommended to seek pre-_______ from a bank before visiting the dealership.",
          correctAnswer: "approval",
          explanation: "Seeking pre-approval from a bank gives you a better baseline for financing."
        },
        {
          id: "cb-adv-4",
          type: "multiple-choice",
          text: "What do the term of the loan and the APR dictate?",
          options: ["The color of the car", "The monthly payments and total accrued interest", "The validity of the warranty", "The car's manufacturer"],
          correctAnswer: "The monthly payments and total accrued interest",
          explanation: "These determine how much you pay per month and overall."
        },
        {
          id: "cb-adv-5",
          type: "fill-blank",
          text: "Add-ons can include extended warranties, paint protection, and _______ insurance.",
          correctAnswer: "gap",
          explanation: "Gap insurance is listed as a potential add-on."
        },
        {
          id: "cb-adv-6",
          type: "multiple-choice",
          text: "True or False: Extended warranties are always straightforward and highly recommended.",
          options: ["True", "False"],
          correctAnswer: "False",
          explanation: "Extended warranties might have tricky loopholes."
        },
        {
          id: "cb-adv-7",
          type: "multiple-choice",
          text: "What does buying a car 'as-is' imply?",
          options: ["The dealership covers all repairs", "Mechanical failures become your complete financial burden", "You can return the car within a week", "The car comes with an extended warranty"],
          correctAnswer: "Mechanical failures become your complete financial burden",
          explanation: "When you buy 'as-is', you are responsible for all repairs."
        },
        {
          id: "cb-adv-8",
          type: "fill-blank",
          text: "It's vital to have an independent mechanic perform a thorough _______ before buying a used car.",
          correctAnswer: "inspection",
          explanation: "Getting an inspection helps ensure the car is in good condition."
        },
        {
          id: "cb-adv-9",
          type: "multiple-choice",
          text: "If you suspect deceptive practices, who should you consider confronting first?",
          options: ["The independent mechanic", "The salesperson's family", "The general manager", "The police directly"],
          correctAnswer: "The general manager",
          explanation: "You should remain calm and confront the general manager."
        },
        {
          id: "cb-adv-10",
          type: "multiple-choice",
          text: "Which government agency can assist you with consumer disputes?",
          options: ["The Department of Education", "The state's Attorney General", "The DMV", "The Postal Service"],
          correctAnswer: "The state's Attorney General",
          explanation: "The state's Attorney General or consumer protection agencies can assist."
        }
      ]
    }
  }
};
