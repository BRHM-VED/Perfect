export type Question = {
  id: string;
  category: string;
  title: string;
  reviews: number;
  rating: number; // 0-5
  trend?: boolean;
};

export const categories = [
  "Love ❤️",
  "Marriage 💍",
  "Self 🧑‍💖",
  "Career 💼",
  "Education 🎓",
  "Health 🩺",
  "Hard Times 😟",
  "Wealth 💳",
  "Travel ✈️",
  "Property 🏠",
  "Spirituality & Rituals 🪔",
  "Legal & Disputes ⚖️",
  "Parenting & Children 👶",
  "Business & Entrepreneurship 📊",
  "Fame & Public Image 🌟",
  "Retirement & Life Transition 🧘‍♂️",
] as const;

export const questions: Question[] = [
  // Love
  { id: "q1", category: "Love ❤️", title: "When will I find true love?", reviews: 125, rating: 4.8, trend: true },
  { id: "q2", category: "Love ❤️", title: "When will my love life become stable?", reviews: 92, rating: 4.7 },
  { id: "q3", category: "Love ❤️", title: "When will I reconcile with my partner?", reviews: 58, rating: 4.6 },
  { id: "q4", category: "Love ❤️", title: "Will my current relationship survive or end?", reviews: 140, rating: 4.5 },

  // Marriage
  { id: "q5", category: "Marriage 💍", title: "When will I get married?", reviews: 210, rating: 4.9, trend: true },
  { id: "q6", category: "Marriage 💍", title: "When is the best day to fix our wedding date?", reviews: 80, rating: 4.6 },
  { id: "q7", category: "Marriage 💍", title: "When is the right date to exchange engagement rings?", reviews: 66, rating: 4.5 },
  { id: "q8", category: "Marriage 💍", title: "Is divorce or separation the right step for me now?", reviews: 34, rating: 4.3 },

  // Self
  { id: "q9", category: "Self 🧑‍💖", title: "When will a major turning point come in my life?", reviews: 77, rating: 4.7 },
  { id: "q10", category: "Self 🧑‍💖", title: "Which direction should I take next for personal growth?", reviews: 65, rating: 4.6 },
  { id: "q11", category: "Self 🧑‍💖", title: "When will I feel lasting inner peace and confidence?", reviews: 59, rating: 4.5 },

  // Career
  { id: "q12", category: "Career 💼", title: "When will I get a job change or promotion?", reviews: 198, rating: 4.8, trend: true },
  { id: "q13", category: "Career 💼", title: "When will my dream job opportunity appear?", reviews: 120, rating: 4.7 },
  { id: "q14", category: "Career 💼", title: "Which direction should I take in my career now?", reviews: 84, rating: 4.6 },
  { id: "q15", category: "Career 💼", title: "When will I receive an overseas job offer?", reviews: 51, rating: 4.5 },

  // Education
  { id: "q16", category: "Education 🎓", title: "When will I get the chance to study abroad?", reviews: 73, rating: 4.6 },
  { id: "q17", category: "Education 🎓", title: "When will I pursue higher education?", reviews: 60, rating: 4.5 },
  { id: "q18", category: "Education 🎓", title: "When will my child secure admission to a good school/college?", reviews: 41, rating: 4.4 },

  // Health
  { id: "q19", category: "Health 🩺", title: "When will my health start improving or recovery begin?", reviews: 68, rating: 4.5 },
  { id: "q20", category: "Health 🩺", title: "When will I fully recover from this illness?", reviews: 44, rating: 4.4 },
  { id: "q21", category: "Health 🩺", title: "When should I begin my fitness plan?", reviews: 39, rating: 4.4 },
  { id: "q22", category: "Health 🩺", title: "When will my energy levels bounce back?", reviews: 38, rating: 4.3 },

  // Hard Times
  { id: "q23", category: "Hard Times 😟", title: "When will my difficult phase finally end?", reviews: 102, rating: 4.7 },
  { id: "q24", category: "Hard Times 😟", title: "When will I overcome major obstacles in life?", reviews: 70, rating: 4.5 },
  { id: "q25", category: "Hard Times 😟", title: "When will I clear long-standing debts?", reviews: 56, rating: 4.5 },

  // Wealth
  { id: "q26", category: "Wealth 💳", title: "When will I see a financial breakthrough?", reviews: 130, rating: 4.8, trend: true },
  { id: "q27", category: "Wealth 💳", title: "When should I invest in gold, gemstones, or other valuables?", reviews: 52, rating: 4.4 },
  { id: "q28", category: "Wealth 💳", title: "When will my business profits grow sharply?", reviews: 61, rating: 4.5 },
  { id: "q29", category: "Wealth 💳", title: "When is the best time to buy a car or other vehicle?", reviews: 47, rating: 4.3 },

  // Travel
  { id: "q30", category: "Travel ✈️", title: "When should I move to a new city or country?", reviews: 74, rating: 4.6 },
  { id: "q31", category: "Travel ✈️", title: "When will my visa be approved?", reviews: 80, rating: 4.5 },
  { id: "q32", category: "Travel ✈️", title: "When is the best time to travel for spiritual or personal reasons?", reviews: 35, rating: 4.3 },

  // Property
  { id: "q33", category: "Property 🏠", title: "When will I buy a house or property?", reviews: 96, rating: 4.7 },
  { id: "q34", category: "Property 🏠", title: "When will I move into my new home?", reviews: 48, rating: 4.4 },
  { id: "q35", category: "Property 🏠", title: "When should I sign a rental or lease agreement?", reviews: 34, rating: 4.3 },
  { id: "q36", category: "Property 🏠", title: "When will property prices favour me as a buyer or seller?", reviews: 42, rating: 4.4 },

  // Spirituality & Rituals
  { id: "q37", category: "Spirituality & Rituals 🪔", title: "When should I perform a major pūjā or homa?", reviews: 55, rating: 4.6 },
  { id: "q38", category: "Spirituality & Rituals 🪔", title: "When is the most auspicious day for ancestor rites (Pitru Tarpan)?", reviews: 33, rating: 4.4 },
  { id: "q39", category: "Spirituality & Rituals 🪔", title: "When should I begin a long mantra-sādhanā or daily meditation practice?", reviews: 61, rating: 4.5 },

  // Legal & Disputes
  { id: "q40", category: "Legal & Disputes ⚖️", title: "When will my court case be resolved?", reviews: 64, rating: 4.4 },
  { id: "q41", category: "Legal & Disputes ⚖️", title: "When is the best date to file a petition or important paperwork?", reviews: 28, rating: 4.3 },
  { id: "q42", category: "Legal & Disputes ⚖️", title: "When will my settlement or compensation be released?", reviews: 25, rating: 4.3 },

  // Parenting & Children
  { id: "q43", category: "Parenting & Children 👶", title: "When is the right time for childbirth or pregnancy?", reviews: 58, rating: 4.6 },
  { id: "q44", category: "Parenting & Children 👶", title: "When will my baby be born?", reviews: 21, rating: 4.4 },
  { id: "q45", category: "Parenting & Children 👶", title: "When should we hold the naming (Naamkaran) ceremony?", reviews: 18, rating: 4.3 },

  // Business & Entrepreneurship
  { id: "q46", category: "Business & Entrepreneurship 📊", title: "When is the right time to start or scale my business?", reviews: 120, rating: 4.7 },
  { id: "q47", category: "Business & Entrepreneurship 📊", title: "When will I secure major funding?", reviews: 39, rating: 4.4 },
  { id: "q48", category: "Business & Entrepreneurship 📊", title: "What date is best to sign a big contract or partnership?", reviews: 31, rating: 4.5 },

  // Fame & Public Image
  { id: "q49", category: "Fame & Public Image 🌟", title: "When will I gain public recognition or fame?", reviews: 72, rating: 4.6 },
  { id: "q50", category: "Fame & Public Image 🌟", title: "When will my social-media following peak?", reviews: 43, rating: 4.5 },
  { id: "q51", category: "Fame & Public Image 🌟", title: "When should I release my creative project for maximum impact?", reviews: 67, rating: 4.6 },

  // Retirement & Life Transition
  { id: "q52", category: "Retirement & Life Transition 🧘‍♂️", title: "When is the ideal time to retire or slow down?", reviews: 46, rating: 4.4 },
  { id: "q53", category: "Retirement & Life Transition 🧘‍♂️", title: "When will I transition to a quieter lifestyle?", reviews: 29, rating: 4.4 },
  { id: "q54", category: "Retirement & Life Transition 🧘‍♂️", title: "When will life enter a smoother, more stable phase?", reviews: 35, rating: 4.5 },
];


