export const INTEREST_CATEGORIES = {
  sports: {
    name: "Sports & Fitness",
    interests: [
      "running",
      "cycling",
      "swimming",
      "yoga",
      "pilates",
      "weightlifting",
      "basketball",
      "football",
      "tennis",
      "golf",
      "rock climbing",
      "bouldering",
      "hiking",
      "skiing",
      "snowboarding",
      "surfing",
      "volleyball",
      "badminton",
      "boxing",
      "martial arts",
      "dancing",
      "latin dancing",
      "gymnastics",
      "crossfit",
      "mixed martial arts",
      "wrestling",
      "motorsports",
      "Formula 1",
      "cricket",
      "rugby",
      "go karting",
      "jiu-jitsu",
      "karate",
      "taekwondo",
      "muay thai",
      "kickboxing",
      "bodybuilding",
      "rowing",
    ],
  },
  arts: {
    name: "Arts & Creativity",
    interests: [
      "painting",
      "drawing",
      "photography",
      "sculpture",
      "pottery",
      "knitting",
      "crochet",
      "sewing",
      "calligraphy",
      "digital art",
      "graphic design",
      "music",
      "singing",
      "guitar",
      "piano",
      "drums",
      "writing",
      "poetry",
      "creative writing",
      "filmmaking",
      "acting",
      "theater",
      "dance",
      "acting",
      "improv",
      "stand-up comedy",
      "tattoos",
      "science fiction",
    ],
  },
  technology: {
    name: "Technology & Gaming",
    interests: [
      "programming",
      "coding",
      "web development",
      "artificial intelligence",
      "machine learning",
      "data science",
      "cybersecurity",
      "blockchain",
      "video games",
      "board games",
      "card games",
      "puzzle solving",
      "virtual reality",
      "augmented reality",
      "robotics",
      "3D printing",
      "javascript",
      "python",
      "hardware",
      "hackathons",
      "software development",
      "frontend",
      "backend",
      "mobile development",
      "data analysis",
    ],
  },
  food: {
    name: "Food & Cooking",
    interests: [
      "cooking",
      "baking",
      "wine tasting",
      "beer brewing",
      "coffee",
      "tea",
      "mixology",
      "food photography",
      "restaurant reviews",
      "international cuisine",
      "vegetarian cooking",
      "vegan cooking",
      "fermentation",
      "gardening",
      "foraging",
      "chocolate",
    ],
  },
  travel: {
    name: "Travel & Adventure",
    interests: [
      "backpacking",
      "road trips",
      "camping",
      "glamping",
      "sailing",
      "scuba diving",
      "snorkeling",
      "paragliding",
      "skydiving",
      "mountain climbing",
      "caving",
      "wildlife photography",
      "bird watching",
      "cultural festivals",
      "language learning",
      "volunteer travel",
    ],
  },
  entertainment: {
    name: "Entertainment & Media",
    interests: [
      "movies",
      "tv shows",
      "anime",
      "manga",
      "comics",
      "books",
      "podcasts",
      "music festivals",
      "concerts",
      "magic",
      "escape rooms",
      "karaoke",
      "live theater",
      "opera",
      "ballet",
      "museums",
      "art galleries",
    ],
  },
  lifestyle: {
    name: "Lifestyle & Wellness",
    interests: [
      "meditation",
      "mindfulness",
      "journaling",
      "self-improvement",
      "personal finance",
      "minimalism",
      "sustainability",
      "zero waste",
      "fashion",
      "beauty",
      "skincare",
      "fitness tracking",
      "nutrition",
      "mental health",
      "spirituality",
      "astrology",
      "tarot reading",
      "biohacking",
      "health",
      "diet",
    ],
  },
  social: {
    name: "Social & Community",
    interests: [
      "public speaking",
      "debate",
      "book clubs",
      "language exchange",
      "cultural exchange",
      "volunteering",
      "mentoring",
      "community service",
      "activism",
      "politics",
      "philosophy",
      "psychology",
      "sociology",
      "anthropology",
    ],
  },
  outdoor: {
    name: "Outdoor & Nature",
    interests: [
      "gardening",
      "botany",
      "astronomy",
      "stargazing",
      "weather watching",
      "geology",
      "fossil hunting",
      "rock collecting",
      "metal detecting",
      "fishing",
      "hunting",
      "orienteering",
      "geocaching",
      "tree climbing",
      "wildlife conservation",
      "environmental activism",
    ],
  },
  crafts: {
    name: "Crafts & DIY",
    interests: [
      "woodworking",
      "metalworking",
      "leather crafting",
      "jewelry making",
      "candle making",
      "soap making",
      "perfume making",
      "candle making",
      "upcycling",
      "furniture restoration",
      "home improvement",
      "interior design",
      "landscaping",
      "bonsai",
      "terrarium making",
      "aquarium keeping",
    ],
  },
};

export const INTEREST_RELATIONSHIPS: Record<string, string[]> = {
  mma: [
    "mixed martial arts",
    "boxing",
    "wrestling",
    "jiu-jitsu",
    "karate",
    "taekwondo",
    "muay thai",
    "kickboxing",
    "weightlifting",
    "strength training",
  ],
  "mixed martial arts": [
    "mma",
    "boxing",
    "wrestling",
    "jiu-jitsu",
    "karate",
    "taekwondo",
    "muay thai",
    "kickboxing",
    "weightlifting",
    "strength training",
  ],
  boxing: [
    "mma",
    "mixed martial arts",
    "kickboxing",
    "muay thai",
    "weightlifting",
    "strength training",
    "cardio",
  ],
  "martial arts": [
    "karate",
    "taekwondo",
    "jiu-jitsu",
    "kung fu",
    "aikido",
    "boxing",
    "mma",
    "mixed martial arts",
  ],
  "jiu-jitsu": [
    "mma",
    "mixed martial arts",
    "karate",
    "taekwondo",
    "muay thai",
    "kickboxing",
    "weightlifting",
    "strength training",
    "cardio",
    "BJJ",
  ],

  "go karting": [
    "Formula 1",
    "motorsports",
    "racing",
    "driving",
    "car racing",
    "karting",
    "automotive",
  ],
  karting: ["go karting", "Formula 1", "motorsports", "racing", "driving"],
  "formula 1": [
    "Formula 1",
    "motorsports",
    "racing",
    "go karting",
    "karting",
    "automotive",
    "engineering",
  ],
  f1: ["Formula 1", "motorsports", "racing", "go karting", "karting"],
  racing: [
    "Formula 1",
    "motorsports",
    "go karting",
    "karting",
    "car racing",
    "automotive",
  ],

  gym: [
    "weightlifting",
    "strength training",
    "fitness",
    "crossfit",
    "bodybuilding",
    "cardio",
  ],
  fitness: [
    "gym",
    "weightlifting",
    "strength training",
    "crossfit",
    "cardio",
    "running",
    "cycling",
  ],
  workout: [
    "gym",
    "fitness",
    "weightlifting",
    "strength training",
    "crossfit",
    "cardio",
  ],
  "strength training": [
    "weightlifting",
    "gym",
    "fitness",
    "bodybuilding",
    "powerlifting",
  ],
  cardio: ["running", "cycling", "swimming", "rowing", "fitness", "crossfit"],

  coding: [
    "programming",
    "javascript",
    "python",
    "web development",
    "software development",
    "hackathons",
  ],
  programming: [
    "coding",
    "javascript",
    "python",
    "web development",
    "software development",
    "hackathons",
  ],
  js: ["javascript", "programming", "coding", "web development"],
  javascript: ["js", "programming", "coding", "web development", "frontend"],
  python: [
    "programming",
    "coding",
    "data science",
    "machine learning",
    "artificial intelligence",
  ],
  ai: ["artificial intelligence", "machine learning", "data science", "python"],
  "machine learning": [
    "artificial intelligence",
    "ai",
    "data science",
    "python",
  ],

  gaming: [
    "video games",
    "board games",
    "card games",
    "esports",
    "gaming tournaments",
  ],
  "video games": [
    "gaming",
    "esports",
    "gaming tournaments",
    "console gaming",
    "pc gaming",
  ],
  "board games": [
    "gaming",
    "card games",
    "tabletop games",
    "strategy games",
    "puzzle solving",
  ],
  esports: [
    "gaming",
    "video games",
    "gaming tournaments",
    "competitive gaming",
  ],

  music: [
    "singing",
    "guitar",
    "piano",
    "drums",
    "music production",
    "concerts",
    "music festivals",
  ],
  singing: ["music", "vocal training", "choir", "karaoke", "concerts"],
  guitar: [
    "music",
    "string instruments",
    "acoustic guitar",
    "electric guitar",
    "music production",
    "drums",
  ],
  piano: [
    "music",
    "keyboard instruments",
    "classical music",
    "music production",
  ],
  drums: ["music", "percussion", "rhythm", "music production"],

  photography: [
    "digital art",
    "photo editing",
    "camera",
    "portrait photography",
    "landscape photography",
  ],
  camera: ["photography", "digital art", "photo editing", "videography"],
  art: [
    "painting",
    "drawing",
    "digital art",
    "sculpture",
    "creative expression",
  ],
  painting: ["art", "drawing", "digital art", "creative expression", "canvas"],
  drawing: ["art", "painting", "sketching", "illustration", "digital art"],

  cooking: [
    "baking",
    "chef",
    "culinary arts",
    "food photography",
    "restaurant reviews",
  ],
  baking: ["cooking", "pastry", "desserts", "bread making", "food photography"],
  coffee: ["tea", "cafe culture", "barista", "coffee brewing", "espresso"],
  tea: ["coffee", "tea ceremony", "herbal tea", "tea tasting"],
  wine: ["wine tasting", "sommelier", "viticulture", "fine dining"],
  beer: ["beer brewing", "craft beer", "homebrewing", "beer tasting"],

  travel: [
    "backpacking",
    "road trips",
    "camping",
    "adventure travel",
    "cultural festivals",
  ],
  hiking: [
    "outdoor activities",
    "camping",
    "nature",
    "trail running",
    "mountain climbing",
  ],
  camping: [
    "hiking",
    "outdoor activities",
    "glamping",
    "backpacking",
    "nature",
  ],
  adventure: [
    "hiking",
    "rock climbing",
    "mountain climbing",
    "skydiving",
    "paragliding",
  ],

  reading: ["books", "literature", "book clubs", "writing", "poetry"],
  books: ["reading", "literature", "book clubs", "writing", "poetry"],
  writing: ["reading", "books", "poetry", "creative writing", "journaling"],
  poetry: ["writing", "literature", "creative writing", "spoken word"],

  volunteering: [
    "community service",
    "charity",
    "social impact",
    "helping others",
  ],
  community: ["volunteering", "social events", "local activities"],

  meditation: [
    "mindfulness",
    "yoga",
    "spirituality",
    "mental health",
    "wellness",
  ],
  yoga: ["meditation", "mindfulness", "pilates", "wellness", "flexibility"],
  mindfulness: [
    "meditation",
    "yoga",
    "mental health",
    "wellness",
    "stress relief",
  ],
  wellness: ["meditation", "yoga", "mindfulness", "mental health", "self-care"],

  creative: ["art", "painting", "drawing", "writing", "music", "filmmaking"],
  "creative writing": [
    "writing",
    "poetry",
    "storytelling",
    "literature",
    "novels",
  ],
  filmmaking: [
    "video production",
    "cinematography",
    "editing",
    "storytelling",
    "acting",
  ],
  acting: ["theater", "filmmaking", "improv", "drama", "performance"],

  innovation: [
    "technology",
    "startups",
    "entrepreneurship",
    "hackathons",
    "problem solving",
  ],
  startups: [
    "entrepreneurship",
    "innovation",
    "business",
    "technology",
    "hackathons",
  ],
  entrepreneurship: [
    "startups",
    "business",
    "innovation",
    "leadership",
    "networking",
  ],

  nature: [
    "hiking",
    "gardening",
    "wildlife",
    "environmental activism",
    "outdoor activities",
  ],
  gardening: [
    "nature",
    "plants",
    "sustainability",
    "organic",
    "outdoor activities",
  ],
  sustainability: [
    "environmental activism",
    "zero waste",
    "gardening",
    "nature",
    "eco-friendly",
  ],

  movies: ["cinema", "filmmaking", "tv shows", "entertainment", "storytelling"],
  cinema: ["movies", "filmmaking", "entertainment", "cinematography"],
  tv: ["tv shows", "movies", "entertainment", "streaming", "series"],
  podcasts: [
    "audio",
    "learning",
    "entertainment",
    "interviews",
    "storytelling",
  ],

  sports: [
    "fitness",
    "athletics",
    "competition",
    "team sports",
    "individual sports",
  ],
  athletics: ["sports", "fitness", "competition", "track and field", "running"],
  competition: [
    "sports",
    "athletics",
    "esports",
    "tournaments",
    "competitive gaming",
  ],

  culture: [
    "cultural festivals",
    "museums",
    "art galleries",
    "history",
    "heritage",
  ],
  heritage: [
    "culture",
    "history",
    "museums",
    "cultural festivals",
    "traditional arts",
  ],
  history: [
    "culture",
    "heritage",
    "museums",
    "archaeology",
    "historical sites",
  ],

  science: [
    "research",
    "experiments",
    "laboratory",
    "scientific discovery",
    "innovation",
  ],
  research: ["science", "experiments", "data analysis", "scientific discovery"],
  experiments: ["science", "research", "laboratory", "scientific discovery"],

  business: [
    "entrepreneurship",
    "networking",
    "leadership",
    "management",
    "startups",
  ],
  leadership: [
    "business",
    "management",
    "public speaking",
    "mentoring",
    "team building",
  ],
  management: [
    "business",
    "leadership",
    "team building",
    "organizational skills",
  ],

  health: [
    "fitness",
    "nutrition",
    "mental health",
    "wellness",
    "medical",
    "biohacking",
  ],
  nutrition: ["health", "fitness", "cooking", "diet", "wellness", "biohacking"],
  medical: [
    "health",
    "medicine",
    "healthcare",
    "medical research",
    "public health",
    "biohacking",
  ],
  football: ["5-a-side", "soccer"],
};

export const findSimilarInterests = (
  input: string,
  excludeExisting: string[] = []
): string[] => {
  const normalizedInput = input.toLowerCase().trim();
  if (!normalizedInput) return [];

  const scoredSuggestions: Array<{ interest: string; score: number }> = [];

  const directRelations = INTEREST_RELATIONSHIPS[normalizedInput] || [];
  directRelations.forEach((interest) => {
    if (!excludeExisting.includes(interest)) {
      scoredSuggestions.push({ interest, score: 10 });
    }
  });

  Object.values(INTEREST_CATEGORIES).forEach((category) => {
    category.interests.forEach((interest) => {
      const normalizedInterest = interest.toLowerCase();

      if (
        excludeExisting.includes(interest) ||
        scoredSuggestions.some((s) => s.interest === interest)
      ) {
        return;
      }

      let score = 0;

      if (normalizedInterest === normalizedInput) {
        score = 10;
      } else if (
        normalizedInterest.includes(normalizedInput) ||
        normalizedInput.includes(normalizedInterest)
      ) {
        score = 8;
      } else if (
        normalizedInterest
          .split(" ")
          .some(
            (word) =>
              word.startsWith(normalizedInput) ||
              normalizedInput.startsWith(word)
          )
      ) {
        score = 6;
      } else {
        const inputWords = normalizedInput.split(" ");
        const interestWords = normalizedInterest.split(" ");
        const sharedWords = inputWords.filter((word) =>
          interestWords.some(
            (interestWord) =>
              interestWord.includes(word) || word.includes(interestWord)
          )
        );
        if (sharedWords.length > 0) {
          score = 4;
        }
      }

      if (score > 0) {
        scoredSuggestions.push({ interest, score });
      }
    });
  });

  Object.values(INTEREST_CATEGORIES).forEach((category) => {
    if (
      category.interests.some((interest) =>
        scoredSuggestions.some((s) => s.interest === interest && s.score >= 4)
      )
    ) {
      category.interests.forEach((interest) => {
        if (
          !excludeExisting.includes(interest) &&
          !scoredSuggestions.some((s) => s.interest === interest)
        ) {
          scoredSuggestions.push({ interest, score: 2 });
        }
      });
    }
  });

  scoredSuggestions.forEach(({ interest }) => {
    const relations = INTEREST_RELATIONSHIPS[interest.toLowerCase()] || [];
    relations.forEach((relatedInterest) => {
      if (
        !excludeExisting.includes(relatedInterest) &&
        !scoredSuggestions.some((s) => s.interest === relatedInterest)
      ) {
        scoredSuggestions.push({ interest: relatedInterest, score: 3 });
      }
    });
  });

  return scoredSuggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((s) => s.interest);
};

export const getPopularInterests = (
  excludeExisting: string[] = []
): string[] => {
  const popularInterests = [
    "photography",
    "cooking",
    "travel",
    "reading",
    "self improvement",
    "gaming",
    "fitness",
    "hiking",
    "coffee",
    "movies",
    "museums",
    "yoga",
    "volunteering",
    "language exchange",
    "board games",
    "latin dancing",
  ];

  return popularInterests.filter(
    (interest) => !excludeExisting.includes(interest)
  );
};

export const getCategorySuggestions = (
  categoryKey: keyof typeof INTEREST_CATEGORIES,
  excludeExisting: string[] = []
): string[] => {
  const category = INTEREST_CATEGORIES[categoryKey];
  if (!category) return [];

  return category.interests.filter(
    (interest) => !excludeExisting.includes(interest)
  );
};

export const getRandomSuggestions = (
  count: number = 6,
  excludeExisting: string[] = []
): string[] => {
  const allInterests = Object.values(INTEREST_CATEGORIES)
    .flatMap((category) => category.interests)
    .filter((interest) => !excludeExisting.includes(interest));

  const shuffled = allInterests.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
