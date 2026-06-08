const careerRoles = [
  {
    slug: "chief-of-staff",
    title: "Chief of Staff",
    team: "Operations",
    level: "Manager/Supervisor",
    summary: "Bring order, accountability, and speed to cross-functional company-building work.",
    mission: "Act as the operating hub across founders, marketing, product, creative, finance, and vendors so high-priority work moves from idea to launch without drift.",
    responsibilities: [
      "Own project plans, follow-ups, launch calendars, and decision logs across active company initiatives.",
      "Keep stakeholders aligned on deadlines, blockers, budgets, and next actions.",
      "Build lightweight operating systems that make the team faster without adding bureaucracy."
    ],
    requirements: [
      "Experience in operations, project management, marketing operations, or founder-adjacent execution.",
      "Excellent follow-through, written communication, and comfort managing multiple stakeholders.",
      "High judgment, high urgency, and strong taste for what matters."
    ],
    questions: [
      "Describe a time you brought a messy cross-functional project back on track.",
      "What tools or systems do you use to keep stakeholders accountable?",
      "What is the highest-leverage operating system you have built?"
    ]
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    team: "Creative",
    level: "Individual Contributor",
    summary: "Create brand, campaign, packaging, and ecommerce design for consumer health launches.",
    mission: "Turn positioning, customer insight, and product details into polished creative that can ship quickly across paid, owned, retail, and launch channels.",
    responsibilities: [
      "Design landing page assets, ads, email modules, social content, packaging concepts, and brand systems.",
      "Adapt creative across formats while keeping brand quality intact.",
      "Partner with marketers and operators to move from brief to production-ready assets quickly."
    ],
    requirements: [
      "Strong portfolio across digital, ecommerce, brand, or CPG design.",
      "Fluency in Figma, Adobe Creative Suite, or equivalent design tools.",
      "Taste for clean execution, fast iteration, and performance-aware creative."
    ],
    questions: [
      "Share the portfolio project that best reflects your current taste.",
      "How do you balance brand quality with fast-turn performance creative?",
      "Attach or link one design system, campaign, or ecommerce asset set you are proud of."
    ]
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    team: "Creative",
    level: "Individual Contributor",
    summary: "Cut paid social, direct-response, organic, and launch video creative.",
    mission: "Create video assets that make consumer health products clear, credible, and compelling in the first few seconds.",
    responsibilities: [
      "Edit short-form ads, creator content, product explainers, testimonials, and launch videos.",
      "Build hooks, pacing, captions, overlays, and visual rhythm for social platforms.",
      "Iterate based on creative direction, performance data, and audience feedback."
    ],
    requirements: [
      "Portfolio of social-first video edits, ideally for ecommerce, wellness, beauty, or health brands.",
      "Strong pacing, story, typography, and sound instincts.",
      "Comfort producing multiple variations from the same raw footage."
    ],
    questions: [
      "Which edit in your portfolio performed best, and why do you think it worked?",
      "How do you approach the first three seconds of a paid social video?",
      "Attach or link a reel, before-and-after edit, or raw-to-final example."
    ]
  },
  {
    slug: "product-manager-sexual-wellness",
    title: "Product Manager, Sexual Wellness",
    team: "Product",
    level: "Manager",
    summary: "Own product definition, customer insight, supplier coordination, and launches in sexual wellness.",
    mission: "Turn customer needs, category gaps, and operational constraints into a focused product roadmap for sexual wellness.",
    responsibilities: [
      "Define product requirements, competitive landscapes, claims, positioning, and launch priorities.",
      "Coordinate suppliers, creative, marketing, compliance, and operations from concept through launch.",
      "Use customer insight and market signals to shape products people trust."
    ],
    requirements: [
      "Experience in product management, CPG, sexual wellness, beauty, wellness, or consumer health.",
      "Strong customer research, project management, and launch execution skills.",
      "Comfort working with sensitive categories and high standards for trust."
    ],
    questions: [
      "What sexual wellness category gap do you think is underserved right now?",
      "Describe a product you helped move from concept to launch.",
      "How would you balance customer trust, claims, and conversion in this category?"
    ]
  },
  {
    slug: "executive-assistant",
    title: "Executive Assistant",
    team: "Operations",
    level: "Individual Contributor",
    summary: "Support scheduling, communication, follow-through, and operating cadence for a fast-moving team.",
    mission: "Protect time, reduce noise, and make sure important decisions and follow-ups do not get lost.",
    responsibilities: [
      "Manage calendars, inbox flow, meeting prep, notes, travel, and action-item follow-through.",
      "Coordinate across internal and external stakeholders with clarity and discretion.",
      "Build simple systems for recurring communication, priorities, and deadlines."
    ],
    requirements: [
      "Experience supporting executives, founders, operators, or high-output teams.",
      "Strong written communication, detail orientation, and discretion.",
      "Comfort with ambiguity, changing priorities, and fast response cycles."
    ],
    questions: [
      "What system do you use to make sure no follow-up falls through?",
      "Describe the busiest executive or team you have supported.",
      "What information do you need to manage a calendar well?"
    ]
  },
  {
    slug: "product-marketing-manager",
    title: "Product Marketing Manager",
    team: "Marketing",
    level: "Manager",
    summary: "Translate product truths into positioning, launch plans, lifecycle moments, and conversion messaging.",
    mission: "Make each product easy to understand, easy to trust, and easy to buy across launch, lifecycle, and paid channels.",
    responsibilities: [
      "Own messaging, positioning, launch narratives, customer research, and product education.",
      "Partner with creative, growth, product, and lifecycle teams to ship campaigns.",
      "Turn product benefits, objections, and proof points into high-converting assets."
    ],
    requirements: [
      "Experience in product marketing, lifecycle marketing, ecommerce, CPG, or consumer health.",
      "Strong writing, customer insight, and cross-functional launch execution.",
      "Ability to balance brand clarity with conversion discipline."
    ],
    questions: [
      "Share a product positioning project you led or influenced.",
      "How do you find the customer language that should appear in messaging?",
      "What product marketing artifact are you best at creating?"
    ]
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    team: "Marketing",
    level: "Individual Contributor",
    summary: "Run social calendars, platform-native content, community rhythms, and creator coordination.",
    mission: "Build social systems that make brands feel alive, useful, and culturally aware without losing commercial focus.",
    responsibilities: [
      "Plan and publish social content across priority platforms.",
      "Coordinate creators, community responses, content calendars, and reporting.",
      "Spot platform trends and translate them into brand-appropriate creative."
    ],
    requirements: [
      "Experience managing social channels for consumer, ecommerce, wellness, beauty, or health brands.",
      "Strong taste for platform-native creative and community tone.",
      "Comfort with analytics, calendars, and fast iteration."
    ],
    questions: [
      "Which brand has the strongest social strategy right now, and why?",
      "Share a social account or campaign you helped grow.",
      "How do you decide what deserves to become a recurring content format?"
    ]
  },
  {
    slug: "head-of-performance-marketing",
    title: "Head of Performance Marketing",
    team: "Growth",
    level: "Director",
    summary: "Lead growth strategy across paid channels, testing, budgets, measurement, and creative feedback loops.",
    mission: "Build a disciplined performance engine that connects media spend, creative testing, conversion rate, and business outcomes.",
    responsibilities: [
      "Own paid channel strategy, budget allocation, reporting, testing cadence, and growth targets.",
      "Partner with creative and product marketing to turn insights into high-performing tests.",
      "Build measurement systems that separate signal from noise."
    ],
    requirements: [
      "Experience scaling paid acquisition for ecommerce, subscription, wellness, beauty, or consumer brands.",
      "Strong command of Meta, TikTok, Google, landing pages, attribution, and creative testing.",
      "Ability to manage budgets and communicate performance tradeoffs clearly."
    ],
    questions: [
      "What is the largest monthly media budget you have managed directly?",
      "Describe a performance plateau you diagnosed and broke through.",
      "How do you structure creative testing when signal is noisy?"
    ]
  },
  {
    slug: "creative-strategist-performance-marketing",
    title: "Creative Strategist, Performance Marketing",
    team: "Growth",
    level: "Individual Contributor",
    summary: "Turn customer insight and channel data into hooks, briefs, tests, and performance creative systems.",
    mission: "Create the strategy layer between customer research, performance data, and creative production.",
    responsibilities: [
      "Write briefs, hooks, angles, scripts, and testing plans for paid social creative.",
      "Analyze winners and losers to identify repeatable creative patterns.",
      "Partner with editors, designers, creators, and media buyers to improve creative velocity."
    ],
    requirements: [
      "Experience with performance creative, paid social, ecommerce, direct response, or creator-led ads.",
      "Strong grasp of customer psychology, claims, hooks, and testing discipline.",
      "Clear writing and taste for creative that sells without feeling cheap."
    ],
    questions: [
      "Share a paid social ad you think is excellent and explain why.",
      "How would you create five distinct angles for the same product?",
      "Attach or link a brief, script, or creative analysis you wrote."
    ]
  },
  {
    slug: "entrepreneur-in-residence",
    title: "Entrepreneur-in-Residence",
    team: "Venture",
    level: "Founder Track",
    summary: "Validate, build, buy, or launch new consumer health companies with capital and operating support.",
    mission: "Find and shape a company worth building, then drive it from insight to launch with Care & Bloom support.",
    responsibilities: [
      "Research markets, validate opportunities, test acquisition channels, and shape company concepts.",
      "Build early operating plans across product, brand, supply, finance, and growth.",
      "Move quickly from idea to proof with high ownership and practical judgment."
    ],
    requirements: [
      "Founder, operator, investor, product, growth, or category-building experience.",
      "Comfort with ambiguity, zero-to-one work, and direct accountability.",
      "Strong taste for consumer health opportunities and willingness to build hands-on."
    ],
    questions: [
      "What consumer health company would you want to build right now?",
      "Describe something you have taken from zero to one.",
      "What would you need from Care & Bloom to move fastest?"
    ]
  }
];

if (typeof window !== "undefined") {
  window.careerRoles = careerRoles;
}
