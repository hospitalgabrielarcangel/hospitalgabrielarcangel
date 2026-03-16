export const programmesConfig = [
  {
    name: "itName",
    description: "itDescription",
  },
  {
    name: "otName",
    description: "otDescription",
  },
  {
    name: "edpName",
    description: "edpDescription",
  },
  {
    name: "tmsName",
    description: "tmsDescription",
  },
  {
    name: "cipName",
    description: "cipDescription",
  },
  {
    name: "rppName",
    description: "rppDescription",
  },
]

export interface ConditionProps {
  name: string
  symptoms: number[]
  dependenciesAndAddictions?: {
    image: {
      src: string
      alt: string
      width: number
      height: number
    }
    items: string[]
    contact?: boolean
  }
  sectionsImages: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

export const conditionsCategories = [
  {
    page: {
      id: "mental-health",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
      items: [
        "/conditions-we-treat/mental-health/depression",
        "/conditions-we-treat/mental-health/trd",
        "/conditions-we-treat/mental-health/anxiety",
        "/conditions-we-treat/mental-health/bipolar-disorder",
        "/conditions-we-treat/mental-health/cyclothymia",
        "/conditions-we-treat/mental-health/stress",
        "/conditions-we-treat/mental-health/burnout",
        "/conditions-we-treat/mental-health/ptsd",
        "/conditions-we-treat/mental-health/trauma",
        "/conditions-we-treat/mental-health/adhd",
        "/conditions-we-treat/mental-health/ocd",
        "/conditions-we-treat/mental-health/phobias",
        "/conditions-we-treat/mental-health/personality-disorders",
        "/conditions-we-treat/mental-health/borderline-personality-disorder",
      ],
      approachImage: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
    conditions: [
      {
        name: "depression",
        symptoms: [5, 5, 5, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "trd",
        symptoms: [3],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "anxiety",
        symptoms: [5, 5, 7, 6],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "bipolar-disorder",
        symptoms: [3, 3, 2],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "cyclothymia",
        symptoms: [4, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "stress",
        symptoms: [5, 5, 7, 8],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "burnout",
        symptoms: [5, 5, 7, 8],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "ptsd",
        symptoms: [3, 5, 5, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "trauma",
        symptoms: [5, 5, 5, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "adhd",
        symptoms: [6, 6],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "ocd",
        symptoms: [10, 10],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "phobias",
        symptoms: [3, 4, 3],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "personality-disorders",
        symptoms: [3, 3, 3],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "borderline-personality-disorder",
        symptoms: [4, 7, 4, 5, 4],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
    ] satisfies ConditionProps[],
  },
  {
    page: {
      id: "dependencies-and-addictions",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
      items: [
        "/conditions-we-treat/dependencies-and-addictions/alcohol",
        "/conditions-we-treat/dependencies-and-addictions/drug-addiction",
        "/conditions-we-treat/dependencies-and-addictions/prescription-drugs",
        "/conditions-we-treat/dependencies-and-addictions/behavioural-addictions",
      ],
      approachImage: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
    conditions: [
      {
        name: "alcohol",
        symptoms: [15],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "drug-addiction",
        symptoms: [5, 5, 5, 5],
        dependenciesAndAddictions: {
          image: {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          items: [
            "cocaine",
            "methamphetamine",
            "crack-cocaine",
            "heroin",
            "morphine",
            "fentanyl",
            "ghb",
            "prescription-stimulants",
            "prescription-depressants",
            "prescription-opioids",
            "cannabis",
            "synthetic-cathinones-bath-salts",
            "synthetic-cannabinoids",
            "kratom",
            "ketamine",
            "nicotine",
          ],
          contact: true,
        },
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "prescription-drugs",
        symptoms: [8],
        dependenciesAndAddictions: {
          image: {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          items: [
            "oxycodone-oxycontin",
            "buprenorphine-suboxone",
            "hydrocodone-vicodin-lortab",
            "amphetamine-dextroamphetamine-adderall",
            "methylphenidate-ritalin-concerta",
            "alprazolam-xanax",
            "diazepam-valium",
            "lorazepam-ativan",
            "clonazepam-klonopin",
            "zolpidem-ambien",
            "gabapentin-neurontin",
            "carisoprodol-soma",
            "codeine",
            "morphine",
          ],
          contact: true,
        },
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "behavioural-addictions",
        symptoms: [7],
        dependenciesAndAddictions: {
          image: {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          items: [
            "gambling",
            "cryptocurrency",
            "sex-and-love",
            "social-media",
            "adrenaline",
            "gaming",
            "pornography",
            "exercise",
            "work",
            "shopping",
            "codependency",
          ],
          contact: true,
        },
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
    ] satisfies ConditionProps[],
  },
  {
    page: {
      id: "eating-disorder",
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
      items: [
        "/conditions-we-treat/eating-disorder/anorexia-nervosa",
        "/conditions-we-treat/eating-disorder/bulimia-nervosa",
        "/conditions-we-treat/eating-disorder/orthorexia-nervosa",
        "/conditions-we-treat/eating-disorder/obesity-and-metabolic-syndrome",
        "/conditions-we-treat/eating-disorder/binge-eating-disorder",
        "/conditions-we-treat/eating-disorder/body-dysmorphic-disorder",
      ],
      approachImage: {
        src: "/images/howwetreat-section.webp",
        alt: "EMT",
        width: 2160,
        height: 2880,
      },
    },
    conditions: [
      {
        name: "anorexia-nervosa",
        symptoms: [7, 9, 7, 10],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "orthorexia-nervosa",
        symptoms: [10, 7, 7, 7],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "bulimia-nervosa",
        symptoms: [5, 5, 5, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "orthorexia-nervosa",
        symptoms: [10, 7, 7, 7],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "obesity-and-metabolic-syndrome",
        symptoms: [5, 7, 5],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "binge-eating-disorder",
        symptoms: [10, 4, 4, 4],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
      {
        name: "body-dysmorphic-disorder",
        symptoms: [9, 5, 5, 6],
        sectionsImages: [
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
          {
            src: "/images/howwetreat-section.webp",
            alt: "approachImageAlt",
            width: 2160,
            height: 2880,
          },
        ],
      },
    ] satisfies ConditionProps[],
  },
]

export const dependenciesAndAddictions = [
  {
    name: "cocaine",
    symptoms: [5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "methamphetamine",
    symptoms: [7, 8, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "crack-cocaine",
    symptoms: [7, 8, 6, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "heroin",
    symptoms: [7, 6, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "morphine",
    symptoms: [5, 7, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "fentanyl",
    symptoms: [8, 7, 5, 4],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "ghb",
    symptoms: [7, 5, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "prescription-stimulants",
    symptoms: [5, 6, 4, 5],
    dependenciesAndAddictions: {
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      items: [
        "amphetamine-dextroamphetamine-adderall",
        "methylphenidate-ritalin-concerta",
      ],
    },
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "prescription-depressants",
    symptoms: [7, 5, 5, 5],
    dependenciesAndAddictions: {
      image: {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      items: [
        "buprenorphine-suboxone",
        "hydrocodone-vicodin-lortab",
        "diazepam-valium",
        "clonazepam-klonopin",
        "zolpidem-ambien",
        "carisoprodol-soma",
        "codeine",
      ],
    },
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "prescription-opioids",
    symptoms: [7, 6, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "cannabis",
    symptoms: [5, 5, 4, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "synthetic-cathinones-bath-salts",
    symptoms: [5, 8, 8, 7],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "synthetic-cannabinoids",
    symptoms: [5, 7, 7, 7],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "kratom",
    symptoms: [6, 8, 6, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "ketamine",
    symptoms: [5, 4, 5, 4],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "nicotine",
    symptoms: [5, 5, 6, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "oxycodone-oxycontin",
    symptoms: [7, 7, 6, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "buprenorphine-suboxone",
    symptoms: [7, 9, 6, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "hydrocodone-vicodin-lortab",
    symptoms: [8, 9, 6, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "amphetamine-dextroamphetamine-adderall",
    symptoms: [7, 10, 6, 8],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "methylphenidate-ritalin-concerta",
    symptoms: [5, 8, 5, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "alprazolam-xanax",
    symptoms: [5, 4, 8, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "diazepam-valium",
    symptoms: [5, 8, 8, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "lorazepam-ativan",
    symptoms: [5, 9, 5, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "clonazepam-klonopin",
    symptoms: [5, 8, 5, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "zolpidem-ambien",
    symptoms: [5, 5, 6, 7],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "gabapentin-neurontin",
    symptoms: [5, 6, 6, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "carisoprodol-soma",
    symptoms: [5, 6, 7, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "codeine",
    symptoms: [8, 7, 5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "gambling",
    symptoms: [5, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "cryptocurrency",
    symptoms: [5, 5],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "sex-and-love",
    symptoms: [8],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "social-media",
    symptoms: [8, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "adrenaline",
    symptoms: [7, 7, 8, 7],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "gaming",
    symptoms: [9],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "pornography",
    symptoms: [7, 6, 5, 4],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "exercise",
    symptoms: [5, 6],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "work",
    symptoms: [5, 8],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "shopping",
    symptoms: [5, 7],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
  {
    name: "codependency",
    symptoms: [8],
    sectionsImages: [
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
      {
        src: "/images/howwetreat-section.webp",
        alt: "approachImageAlt",
        width: 2160,
        height: 2880,
      },
    ],
  },
] satisfies ConditionProps[]

export const howWeTreatConfig = [
  {
    title: "howWeTreatItem1Title",
    description: "howWeTreatItem1Description",
    link: "howWeTreatItem1Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem2Title",
    description: "howWeTreatItem2Description",
    link: "howWeTreatItem2Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem3Title",
    description: "howWeTreatItem3Description",
    link: "howWeTreatItem3Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem4Title",
    description: "howWeTreatItem4Description",
    link: "howWeTreatItem4Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem5Title",
    description: "howWeTreatItem5Description",
    link: "howWeTreatItem5Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem6Title",
    description: "howWeTreatItem6Description",
    link: "howWeTreatItem6Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem7Title",
    description: "howWeTreatItem7Description",
    link: "howWeTreatItem7Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem8Title",
    description: "howWeTreatItem8Description",
    link: "howWeTreatItem8Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem9Title",
    description: "howWeTreatItem9Description",
    link: "howWeTreatItem9Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem10Title",
    description: "howWeTreatItem10Description",
    link: "howWeTreatItem10Link",
    slug: "#",
  },
  {
    title: "howWeTreatItem11Title",
    description: "howWeTreatItem11Description",
    link: "howWeTreatItem11Link",
    slug: "#",
  },
]
