import { LessonContent } from './lessons';

export const cellPhoneLesson: LessonContent = {
  id: 'situational-02',
  title: 'Getting a Cell Phone Carrier',
  description: 'Learn the essential vocabulary and phrases for choosing a mobile network, understanding data plans, and signing up for service in the USA.',
  level: 'Mixed',
  isSituational: true,
  situations: {
    beginner: {
      explanationMarkdown: `
# Getting a Cell Phone Carrier

When you move to the USA, you need a phone plan. A phone plan gives you calls, texts, and internet (data). 

## What to Look For
1. **Network Coverage:** Does the company have a good signal where you live and work?
2. **Data:** How much internet do you need? 
3. **Price:** How much does it cost every month?

## Types of Plans
There are two main types of plans:
* **Prepaid Plan:** You pay *before* you use the phone. It is easy. You do not need a credit check. You can stop anytime.
* **Postpaid Plan:** You pay *after* you use the phone every month. You get a bill. You usually need good credit for this plan. You might sign a contract.

## What You Need to Bring
If you want a **postpaid** plan, you need:
* A passport or government ID.
* A credit card or debit card.
* An address in the USA.
* Sometimes, your Social Security Number (SSN).

For a **prepaid** plan, you only need an ID and money!
      `,
      exercises: [
        {
          id: 'cp-beg-1',
          type: 'multiple-choice',
          text: 'What do you get with a cell phone plan?',
          options: ['Only a new phone', 'Calls, texts, and data', 'A car and a house', 'Only text messages'],
          correctAnswer: 'Calls, texts, and data',
          explanation: 'A cell phone plan provides you with the service to make calls, send texts, and use the internet (data).'
        },
        {
          id: 'cp-beg-2',
          type: 'multiple-choice',
          text: 'What does "data" mean for your phone?',
          options: ['Phone calls', 'Text messages', 'Internet access', 'The battery'],
          correctAnswer: 'Internet access',
          explanation: '"Data" is the word we use for internet access on a mobile network.'
        },
        {
          id: 'cp-beg-3',
          type: 'multiple-choice',
          text: 'Which plan requires you to pay BEFORE you use it?',
          options: ['Prepaid', 'Postpaid', 'Free plan', 'Contract'],
          correctAnswer: 'Prepaid',
          explanation: '"Pre" means before. A prepaid plan means you pay for the service before you use it.'
        },
        {
          id: 'cp-beg-4',
          type: 'multiple-choice',
          text: 'Which plan usually requires a credit check?',
          options: ['Prepaid', 'Postpaid', 'No plan', 'Both plans'],
          correctAnswer: 'Postpaid',
          explanation: 'Postpaid plans bill you at the end of the month, so companies want to check your credit first.'
        },
        {
          id: 'cp-beg-5',
          type: 'fill-blank',
          text: 'If you want a postpaid plan, you need to bring an ________ to the store.',
          correctAnswer: 'ID',
          explanation: 'You must show identification, like a passport or driver\'s license, to set up an account.'
        },
        {
          id: 'cp-beg-6',
          type: 'fill-blank',
          text: 'A prepaid plan is easier because you do not need a credit ________.',
          correctAnswer: 'check',
          explanation: 'Prepaid plans do not look at your financial history, so they skip the credit check.'
        },
        {
          id: 'cp-beg-7',
          type: 'multiple-choice',
          text: 'What is important to check where you live and work?',
          options: ['The color of the store', 'Network coverage', 'The music in the store', 'The time of day'],
          correctAnswer: 'Network coverage',
          explanation: 'Network coverage tells you if you will have a strong signal (service) in your area.'
        },
        {
          id: 'cp-beg-8',
          type: 'fill-blank',
          text: 'You pay for a postpaid plan after you get a ________ in the mail or online.',
          correctAnswer: 'bill',
          explanation: 'A bill tells you how much you need to pay for the month.'
        },
        {
          id: 'cp-beg-9',
          type: 'multiple-choice',
          text: 'Which plan is easier to stop or cancel anytime?',
          options: ['Postpaid', 'Prepaid'],
          correctAnswer: 'Prepaid',
          explanation: 'Prepaid plans usually do not have long contracts, so you can stop whenever you want.'
        },
        {
          id: 'cp-beg-10',
          type: 'fill-blank',
          text: 'SSN stands for Social ________ Number.',
          correctAnswer: 'Security',
          explanation: 'Your Social Security Number is a 9-digit number the government uses to track your income and credit.'
        }
      ]
    },
    intermediate: {
      explanationMarkdown: `
# Getting a Cell Phone Carrier in the USA

Choosing a mobile carrier in the USA can be overwhelming because there are so many options. The largest carriers are AT&T, Verizon, and T-Mobile. Here is what you need to know before you sign up.

## What to Look For
* **Coverage Map:** Always check the carrier's coverage map online. Make sure they have a strong signal in your neighborhood and at your workplace.
* **Data Allowance:** Most plans advertise "Unlimited Data." However, usually they will slow down your speed if you use too much.
* **Hotspot Usage:** If you want to connect your laptop to your phone's internet, make sure the plan includes "mobile hotspot" usage.

## Postpaid vs. Prepaid Plans
**Postpaid Plans:**
With a postpaid plan, the carrier sends you a bill at the end of the billing cycle. These plans often come with perks, like free streaming services or discounts on buying a new phone. However, they require a **credit check**. Because you are paying after you use the service, the company wants to trust that you will pay your bill.

**Prepaid Plans:**
Prepaid plans (like Mint Mobile, Cricket, or Metro) require you to pay upfront at the beginning of the month. They are fantastic for new immigrants because they **do not require a credit check**. They are usually cheaper, but your data might be prioritized lower during busy times.

## What You Need to Bring
To sign up for a **postpaid** account, prepare to bring:
1. Two forms of Government ID (Passport, Driver's License, or Visa).
2. Proof of Address (like a recent utility bill or a lease agreement).
3. A debit or credit card.
4. Your Social Security Number (SSN). If you don't have an SSN, some carriers will still let you sign up, but they might require a large cash **deposit**.

If you decide to go with a **prepaid** route, the process is much simpler. You usually just need a credit card and an unlocked phone to put the SIM card into!
      `,
      exercises: [
        {
          id: 'cp-int-1',
          type: 'multiple-choice',
          text: 'Why should you check the carrier\'s coverage map?',
          options: ['To see where their stores are located', 'To verify if they have a strong signal in your area', 'To see which countries they operate in', 'To find the cheapest store'],
          correctAnswer: 'To verify if they have a strong signal in your area',
          explanation: 'The coverage map shows you where the carrier provides good service (a strong cell signal).'
        },
        {
          id: 'cp-int-2',
          type: 'fill-blank',
          text: 'If you want to use your phone\'s internet on your laptop, you need a plan that includes a mobile ________.',
          correctAnswer: 'hotspot',
          explanation: 'A mobile hotspot allows you to share your phone\'s cellular data connection with other devices.'
        },
        {
          id: 'cp-int-3',
          type: 'multiple-choice',
          text: 'What happens to "Unlimited Data" if you use too much of it?',
          options: ['You are charged heavily', 'Your service is cancelled entirely', 'Your internet speed might be slowed down', 'Nothing happens'],
          correctAnswer: 'Your internet speed might be slowed down',
          explanation: 'Carriers often "throttle" or slow down your data speeds after you exceed a certain limit on "unlimited" plans.'
        },
        {
          id: 'cp-int-4',
          type: 'multiple-choice',
          text: 'Which plans are usually better for new immigrants without a credit history?',
          options: ['Postpaid plans', 'Corporate plans', 'Prepaid plans', 'Contract plans'],
          correctAnswer: 'Prepaid plans',
          explanation: 'Prepaid plans don\'t require a credit check, making them accessible to those without US credit history.'
        },
        {
          id: 'cp-int-5',
          type: 'fill-blank',
          text: 'Postpaid plans check your financial history with a credit ________.',
          correctAnswer: 'check',
          explanation: 'A credit check evaluates your history of paying debts to ensure you are reliable.'
        },
        {
          id: 'cp-int-6',
          type: 'fill-blank',
          text: 'If you lack an SSN for a postpaid plan, the company might require a large cash ________ instead.',
          correctAnswer: 'deposit',
          explanation: 'A deposit is a sum of money paid upfront to secure a service when credit cannot be proven.'
        },
        {
          id: 'cp-int-7',
          type: 'multiple-choice',
          text: 'What forms of ID are generally accepted when setting up an account?',
          options: ['Gym membership and library card', 'Passport and Visa', 'A letter from a friend', 'A high school diploma'],
          correctAnswer: 'Passport and Visa',
          explanation: 'Carriers require official government-issued identification like a passport, driver\'s license, or visa.'
        },
        {
          id: 'cp-int-8',
          type: 'multiple-choice',
          text: 'What might happen to your prepaid data when the network is very busy?',
          options: ['It might run faster', 'It gets prioritized lower, meaning it might be slower', 'It disconnects', 'It costs more money'],
          correctAnswer: 'It gets prioritized lower, meaning it might be slower',
          explanation: 'Major carriers often prioritize data for their more expensive postpaid customers during peak network congestion.'
        },
        {
          id: 'cp-int-9',
          type: 'fill-blank',
          text: 'To bring your own device to a prepaid carrier, make sure your phone is ________.',
          correctAnswer: 'unlocked',
          explanation: 'An "unlocked" phone is not tied to a specific carrier and can accept SIM cards from any compatible network.'
        },
        {
          id: 'cp-int-10',
          type: 'fill-blank',
          text: 'A recent utility bill or lease agreement can serve as ________ of Address.',
          correctAnswer: 'Proof',
          explanation: 'Proof of Address verifies where you currently live by showing official mail sent to your name at that location.'
        }
      ]
    },
    advanced: {
      explanationMarkdown: `
# Navigating the Wireless Market in the United States

Acquiring a reliable mobile carrier in the United States—whether you're an expatriate, an international student, or a new permanent resident—requires navigating a surprisingly complex telecommunications landscape. The market is primarily dominated by three major carriers (AT&T, Verizon, and T-Mobile), flanked by numerous Mobile Virtual Network Operators (MVNOs).

## Evaluating Your Needs
Before committing to a carrier, it's vital to assess your technological and geographical requirements:
*   **Topographical Coverage:** Do not rely solely on generalized marketing maps. Utilize third-party coverage maps (like OpenSignal) to verify the granular signal strength at your specific residential and occupational addresses.
*   **Data Throttling and Deprioritization:** "Unlimited" is often a misnomer. Understand the carrier's **deprioritization threshold** (the data cap after which your speeds are artificially reduced during structural network congestion).
*   **International Provisions:** If you communicate frequently with contacts abroad, scrutinize the plan's international roaming and international calling rates. Some carriers offer complimentary texting to over 200 countries, while others charge exorbitant per-minute fees.

## Structural Differences: Postpaid vs. Prepaid and MVNOs

### The Postpaid Paradigm
Postpaid accounts are credit-reliant agreements where you are billed retrospectively for your usage.
*   **Pros:** Postpaid customers receive the highest tier of network priority. Additionally, these plans often bundle lucrative device financing (amortizing the cost of a flagship smartphone over 24-36 months) and premium subscriptions (like Netflix or Hulu).
*   **Cons:** They necessitate a rigorous **credit inquiry**. 

### The Prepaid Strategy and MVNOs
Prepaid plans require upfront remittance for the subsequent billing cycle. Many of the most economical prepaid options are actually **MVNOs** (Mobile Virtual Network Operators)—companies like Mint Mobile, Visible, or Cricket Wireless that do not own their cellular towers but lease bandwidth at wholesale rates from the "Big Three."
*   **Pros:** There is zero credit check, no long-term contractual obligation, and significantly lower overhead costs.
*   **Cons:** As an MVNO or prepaid customer, your traffic is inherently **deprioritized**. In a crowded stadium, for example, your internet connection may grind to a halt while a premium postpaid customer on the same tower streams video seamlessly. Furthermore, utilizing device financing is rarely an option.

## Bureaucratic Prerequisites
Establishing a postpaid account is fundamentally establishing a line of credit. You must present:
1.  **Primary Identification:** A valid passport with an applicable visa stamp.
2.  **Secondary Identification:** A state-issued real ID or driver's license.
3.  **Proof of Residency:** A formal lease agreement or a utility bill matching your name and exact address.
4.  **Financial Identification:** A Social Security Number (SSN) is heavily preferred. In the absence of an SSN, foreign nationals may sometimes substitute an Individual Taxpayer Identification Number (ITIN) or be mandated to submit a substantial, refundable **security deposit** (often ranging from $100 to $500 per line) to mitigate the carrier's financial risk.
      `,
      exercises: [
        {
          id: 'cp-adv-1',
          type: 'multiple-choice',
          text: 'What does the term MVNO stand for?',
          options: ['Massive Virtual Network Organization', 'Mobile Voice and Network Operation', 'Mobile Virtual Network Operator', 'Major Video Network Outlet'],
          correctAnswer: 'Mobile Virtual Network Operator',
          explanation: 'MVNO stands for Mobile Virtual Network Operator. These companies lease network infrastructure from major carriers.'
        },
        {
          id: 'cp-adv-2',
          type: 'fill-blank',
          text: 'The data cap after which a carrier might artificially slow down your internet speeds during peak times is called the ________ threshold.',
          correctAnswer: 'deprioritization',
          explanation: 'Deprioritization happens when a network is congested; users who have passed their data threshold are "slowed down" to give priority to others.'
        },
        {
          id: 'cp-adv-3',
          type: 'multiple-choice',
          text: 'Why might an MVNO customer experience slow internet in a crowded stadium?',
          options: ['Because their phones are older', 'Because their network traffic is deprioritized compared to premium postpaid customers', 'Because stadiums block their signals', 'Because MVNOs do not work in stadiums'],
          correctAnswer: 'Because their network traffic is deprioritized compared to premium postpaid customers',
          explanation: 'MVNO traffic is often given a lower priority on the host carrier\'s towers, leading to slow speeds in crowded areas.'
        },
        {
          id: 'cp-adv-4',
          type: 'multiple-choice',
          text: 'What does it mean to amortize the cost of a flagship smartphone?',
          options: ['To rent the smartphone for a weekend', 'To pay for the phone entirely upfront', 'To spread the payments of the phone over a period of 24 to 36 months', 'To trade it in for a cheaper model'],
          correctAnswer: 'To spread the payments of the phone over a period of 24 to 36 months',
          explanation: 'Amortizing means paying off a debt over time in regular installments, often tied to postpaid device financing agreements.'
        },
        {
          id: 'cp-adv-5',
          type: 'fill-blank',
          text: 'Postpaid accounts typically require a rigorous credit ________ before approval.',
          correctAnswer: 'inquiry',
          explanation: 'A credit inquiry (or credit check) assesses the applicant\'s creditworthiness based on their financial history.'
        },
        {
          id: 'cp-adv-6',
          type: 'fill-blank',
          text: 'If you lack an SSN, a carrier might require a substantial, refundable security ________ to mitigate their financial risk.',
          correctAnswer: 'deposit',
          explanation: 'A security deposit acts as collateral to protect the carrier against non-payment from customers without an established credit history.'
        },
        {
          id: 'cp-adv-7',
          type: 'multiple-choice',
          text: 'Which is a common benefit of a premium postpaid plan?',
          options: ['No credit checks', 'Lower monthly bills', 'Bundled subscriptions to services like Netflix or Hulu', 'Free groceries'],
          correctAnswer: 'Bundled subscriptions to services like Netflix or Hulu',
          explanation: 'Major carriers often partner with streaming services to offer bundled perks to entice users into premium postpaid contracts.'
        },
        {
          id: 'cp-adv-8',
          type: 'multiple-choice',
          text: 'Why is it recommended to use third-party coverage maps like OpenSignal?',
          options: ['Because carrier maps are usually perfectly accurate', 'Because they verify granular signal strength at specific locations rather than relying on generalized marketing maps', 'Because they are run by the government', 'They are required by law'],
          correctAnswer: 'Because they verify granular signal strength at specific locations rather than relying on generalized marketing maps',
          explanation: 'Third-party maps use real-world user data, providing a more reliable picture of coverage than a carrier\'s idealized marketing map.'
        },
        {
          id: 'cp-adv-9',
          type: 'fill-blank',
          text: 'An expatriate or foreign national without an SSN might sometimes substitute it with an ITIN, which stands for Individual Taxpayer ________ Number.',
          correctAnswer: 'Identification',
          explanation: 'An ITIN is issued by the IRS to individuals who need a U.S. taxpayer identification number but are ineligible for an SSN.'
        },
        {
          id: 'cp-adv-10',
          type: 'fill-blank',
          text: 'Prepaid plans require upfront ________ for the subsequent billing cycle.',
          correctAnswer: 'remittance',
          explanation: 'Remittance is the act of sending money in payment. In prepaid, the remittance happens before service is provided.'
        }
      ]
    }
  },
  explanationMarkdown: '',
  exercises: []
};
