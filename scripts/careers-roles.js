const careerRoles = [
  {
    slug: "chief-of-staff",
    title: "Chief of Staff",
    team: "Operations",
    level: "Manager/Supervisor",
    locationType: "On-site, Hong Kong",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) introducing yourself — what you've been working on, and why this role interests you.",
    portfolioRequired: false,
    summary: "Connective tissue across every team, project, and priority — working directly with the CEO.",
    mission: "You'll be the connective tissue across every team, project, and priority in the company — working directly with the CEO to keep high-leverage work moving. This isn't a back-office ops role. You're in the room for every critical decision, making sure nothing falls between the cracks, unblocking teams, and driving execution across marketing, product, creative, finance, and vendors.",
    responsibilities: [
      "Keep high-leverage company-building work moving across all teams and priorities.",
      "Unblock teams, drive execution, and make sure nothing falls between the cracks.",
      "Build systems that reduce founder dependency without adding bureaucracy."
    ],
    requirements: [
      "Built or scaled operations in a high-growth DTC or consumer brand.",
      "Strong systems thinker — workflows and reporting that reduce founder dependency.",
      "AI-native — you've used AI to automate real workflows.",
      "High agency — you don't wait for permission."
    ],
    questions: [
      "What's the most complex cross-functional initiative you've driven from start to finish? What was your specific role?",
      "How have you used AI to automate or replace a manual workflow in a real business? What was the result?",
      "Give an example of a decision that was stuck between multiple teams. How did you unblock it?"
    ]
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    team: "Creative",
    level: "Individual Contributor",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through 2-3 of your strongest ad creatives.",
    portfolioRequired: true,
    portfolioLabel: "Portfolio / Work Samples (ad creatives, design work)*",
    summary: "Design ad creatives that drive performance across Meta, TikTok, and paid channels.",
    mission: "You design ad creatives that drive performance across Meta, TikTok, and paid channels. This isn't brand design — every asset gets tested, measured, and iterated on.",
    responsibilities: [
      "Design ad creatives, landing page assets, and social content for paid channels.",
      "Work with creative strategists and media buyers to turn hooks and offers into assets that convert.",
      "Produce multiple ad variations at high volume without sacrificing quality."
    ],
    requirements: [
      "Portfolio of ad creatives for DTC or performance marketing.",
      "You design for conversion — visuals, copy, layout, CTA that drive purchases.",
      "Fast and high-volume without sacrificing quality.",
      "Strong in static and motion graphics.",
      "Can protect a warm brand voice while making scroll-stopping creative."
    ],
    questions: [
      "What types of performance ads have you designed, and what results did they drive?",
      "How do you approach designing an ad when the brief is just a product image and a hook — what's your process?",
      "How do you handle producing high volume (multiple variations per day) without sacrificing quality?"
    ]
  },
  {
    slug: "video-editor",
    title: "Video Editor",
    team: "Creative",
    level: "Individual Contributor",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through your strongest edit — why you made the creative choices you did.",
    portfolioRequired: true,
    portfolioLabel: "Portfolio / Work Samples (video edits, reels, VSLs)*",
    summary: "Turn product proof and offer structure into direct-response sales videos that convert.",
    mission: "You turn product proof, customer insight, and offer structure into direct-response sales videos. Your work gets shipped, tested, and measured by real market response.",
    responsibilities: [
      "Edit direct-response VSLs, advertorial videos, and sales videos for paid channels.",
      "Build hooks, pacing, captions, and CTA flow that drive retention and conversion.",
      "Iterate based on performance data — not just creative direction."
    ],
    requirements: [
      "Proven portfolio of direct-response VSLs or sales videos.",
      "You edit for retention, not just aesthetics.",
      "You balance softness with sales — discreet, trustworthy, human.",
      "You understand hooks, mechanisms, proof, objection handling, CTA.",
      "Curious about AI tools that speed up editing."
    ],
    questions: [
      "What's the highest-performing video you've edited, and what do you think made it work?",
      "How do you approach the first 3 seconds of a performance video — what decisions are you making?",
      "What's your editing workflow and turnaround speed? How do you diagnose when something isn't retaining?"
    ]
  },
  {
    slug: "product-manager-sexual-wellness",
    title: "Product Manager, Sexual Wellness",
    team: "Product",
    level: "Manager",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a product you took from concept to market.",
    portfolioRequired: false,
    summary: "Own the product lifecycle for sexual wellness — concept through manufacturing and launch.",
    mission: "You own the product lifecycle for our sexual wellness line — concept through development, manufacturing, and launch. Hands-on with physical products and IoT-connected devices.",
    responsibilities: [
      "Own product development from concept through sourcing, manufacturing, and launch.",
      "Partner with founders, suppliers, and cross-functional teams to bring products to market.",
      "Balance innovation with commercial viability — quality, margin, and market fit."
    ],
    requirements: [
      "Physical product development experience — consumer electronics, wellness devices, or IoT.",
      "Strong sourcing, manufacturing, QA, and supply chain understanding.",
      "Commercial instincts — margin, positioning, market fit.",
      "Comfortable in sexual wellness with maturity and professionalism.",
      "DTC or ecommerce experience preferred."
    ],
    questions: [
      "What types of physical products have you worked on, and what stage were you most involved in?",
      "What's an underserved gap in sexual wellness or intimate products that you'd build for?",
      "How do you balance customer trust, regulatory claims, and commercial conversion in a sensitive category?"
    ]
  },
  {
    slug: "executive-assistant",
    title: "Executive Assistant",
    team: "Operations",
    level: "Individual Contributor",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through how you manage competing priorities and keep things on track.",
    portfolioRequired: false,
    summary: "Thought and execution partner to founders — managing priorities, creating order, driving clarity.",
    mission: "You'll act as a thought and execution partner to founders — managing priorities, creating order, and driving clarity across teams. This is not a typical admin role. You'll work closely with business leaders, run operations, and build reliable systems that help the company scale faster.",
    responsibilities: [
      "Manage information flow across Slack, Notion, and email — keep things moving.",
      "Build simple, reliable systems for recurring communication, priorities, and deadlines.",
      "Use AI tools (Claude, ChatGPT, Notion AI) to automate repetitive work."
    ],
    requirements: [
      "Strong project coordination and stakeholder management — you keep things moving without being asked.",
      "Organized and systems-oriented — you build dashboards, SOPs, and tracking systems that actually get used.",
      "High ownership and strong judgment under ambiguity — you don't need hand-holding.",
      "Curious about AI and automation tools — you've used Claude, ChatGPT, Notion AI, or similar to automate repetitive work.",
      "Background in e-commerce, creative, or fast-scaling businesses preferred."
    ],
    questions: [
      "How have you used AI tools to improve your efficiency as an EA?",
      "What's your system for tracking follow-ups, deadlines, and action items across multiple stakeholders?",
      "How do you handle a situation where two urgent priorities from different people conflict on the same day?"
    ]
  },
  {
    slug: "product-marketing-manager",
    title: "Product Marketing Manager",
    team: "Marketing",
    level: "Manager",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a product launch you led.",
    portfolioRequired: false,
    summary: "Own how products are positioned, launched, and communicated to customers.",
    mission: "You own how products are positioned, launched, and communicated. Translating features into narratives, coordinating launches, building messaging that drives conversion and retention.",
    responsibilities: [
      "Own messaging, positioning, launch narratives, and product education.",
      "Partner with creative, growth, product, and CX teams to ship campaigns.",
      "Turn product benefits and proof points into high-converting assets."
    ],
    requirements: [
      "Product marketing in DTC or consumer brands with real results.",
      "Strong messaging — specs into stories that make people buy.",
      "Data-informed positioning, not gut feel alone.",
      "Cross-functional across creative, performance, product, CX.",
      "Comfortable in a sensitive category."
    ],
    questions: [
      "What type of product launch have you been most involved in, and what was your role in the positioning and messaging?",
      "How do you figure out what language and messaging resonates with a target customer?",
      "What's a piece of marketing copy or asset you created that directly drove conversion? What made it work?"
    ]
  },
  {
    slug: "social-media-manager",
    title: "Social Media Manager",
    team: "Marketing",
    level: "Individual Contributor",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a social account or campaign you grew.",
    portfolioRequired: true,
    portfolioLabel: "Portfolio / Work Samples (social accounts, content samples)*",
    summary: "Own organic social across TikTok, Instagram, and key platforms.",
    mission: "You own organic social across TikTok, Instagram, and key platforms. Content calendars, community engagement, growing the audience. In a sensitive category, tone matters.",
    responsibilities: [
      "Plan and publish social content across priority platforms.",
      "Engage with the community and grow the audience organically.",
      "Spot platform trends and translate them into brand-appropriate creative."
    ],
    requirements: [
      "Proven experience growing social accounts for DTC or consumer brands.",
      "Deep fluency in platform culture — native vs forced.",
      "Strong copywriting — captions, scripts, hooks that match brand voice.",
      "Community engagement — loyal followers, not just posts.",
      "Comfortable with sexual wellness — playful, warm, trustworthy."
    ],
    questions: [
      "What social accounts have you managed, and what growth or engagement results did you achieve?",
      "Which brand do you think has the best organic social media presence right now, and what makes it stand out?",
      "How do you measure whether a piece of content actually worked, and what metrics matter most to you?"
    ]
  },
  {
    slug: "head-of-performance-marketing",
    title: "Head of Performance Marketing",
    team: "Growth",
    level: "Director",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a campaign you scaled — the budget, channels, creative approach, and results.",
    portfolioRequired: false,
    summary: "Own the paid acquisition engine already driving 8 figures. Scale toward $100M.",
    mission: "You own the paid acquisition engine already driving 8 figures. Managing and scaling ad spend across Meta, TikTok, Google while leading creative testing and funnel optimization. The goal: scale toward $100M.",
    responsibilities: [
      "Own paid channel strategy, budget allocation, reporting, and growth targets.",
      "Lead creative testing, audience targeting, and funnel optimization at scale.",
      "Turn performance data into better creative — work closely with strategists, editors, and designers."
    ],
    requirements: [
      "Scaled DTC ad spend profitably from 7 to 8 figures.",
      "Deep expertise across Meta, TikTok, Google at scale.",
      "Data-driven — dashboards, attribution, cohort analysis.",
      "Strong creative instincts — you spot the problem in an ad.",
      "Leadership experience managing performance teams."
    ],
    questions: [
      "What's the largest monthly ad budget you've managed, and what ROAS did you achieve?",
      "Describe a performance plateau you diagnosed and broke through — what was the root cause?",
      "How do you structure creative testing when the data is noisy and sample sizes are small?"
    ]
  },
  {
    slug: "creative-strategist-performance-marketing",
    title: "Creative Strategist, Performance Marketing",
    team: "Growth",
    level: "Individual Contributor",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a campaign you concepted — the insight, the creative approach, and how it performed.",
    portfolioRequired: true,
    portfolioLabel: "Portfolio / Work Samples (briefs, scripts, ad examples)*",
    summary: "Bridge between data and creative that converts. In the trenches, not handing off decks.",
    mission: "You're the bridge between data and creative that converts. You concept campaigns across Meta, TikTok, YouTube, Snapchat then work with editors, designers, UGC creators to ship them. You're in the trenches, not handing off decks.",
    responsibilities: [
      "Concept ad campaigns and write briefs, hooks, scripts, and testing plans.",
      "Analyze winners and losers to identify repeatable creative patterns.",
      "Work directly with editors, designers, and UGC creators to ship creative fast."
    ],
    requirements: [
      "Concepted and shipped performance creative that drove real revenue.",
      "You write briefs, hooks, scripts, ad angles — know which to change when ROAS drops.",
      "Fluent in platform culture across TikTok, Meta, YouTube.",
      "Strong portfolio with conceptual thinking and storytelling.",
      "Curious about AI tools and creative velocity."
    ],
    questions: [
      "What's a paid social ad you think is excellent? Break down why it works.",
      "How would you create 5 distinct creative angles for the same product?",
      "What's your process for writing a creative brief — what inputs do you need and what does the output look like?"
    ]
  },
  {
    slug: "head-of-growth-mobile-apps",
    title: "Head of Growth, Mobile Apps",
    team: "Growth",
    level: "Director",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) walking us through a mobile app you scaled — the channels, the numbers, and what you learned.",
    portfolioRequired: false,
    summary: "Scale consumer health apps from zero to revenue through performance marketing and user acquisition.",
    mission: "Own growth for our mobile app portfolio — taking consumer health apps from zero to scale through performance marketing, user acquisition, and retention.",
    responsibilities: [
      "Run paid UA campaigns across Meta, TikTok, Google UAC, Apple Search Ads, and emerging platforms.",
      "Optimize funnels, test channels, and find repeatable paths to revenue from zero to $100K–$500K+/month.",
      "Build measurement systems around CPI, LTV, ROAS, retention curves, and payback periods."
    ],
    requirements: [
      "Scaled a consumer mobile app from 0 to $100K–$500K+/month in revenue through performance marketing.",
      "Deep expertise in mobile UA channels and mobile-specific metrics.",
      "Data-driven and hands-on — you run the campaigns yourself, read the data, and make the calls."
    ],
    questions: [
      "What's the largest mobile app you've scaled, and what was monthly revenue at peak?",
      "Which UA channel gave you the best results, and how did you crack it?",
      "Describe a repeatable growth loop you found for a mobile product."
    ]
  },
  {
    slug: "entrepreneur-in-residence",
    title: "Entrepreneur-in-Residence",
    team: "Venture",
    level: "Founder Track",
    introVideoRequired: true,
    loomPrompt: "Record a short Loom (2-3 min) telling us what consumer health company you'd want to build and why.",
    portfolioRequired: false,
    summary: "Find, shape, and launch consumer health companies with $100M+ potential — with Care & Bloom's capital and operating support behind you.",
    mission: "You'll find and shape a company worth building, then drive it from insight to launch with Care & Bloom's capital, team, and infrastructure behind you. This is for people who want to build something real — not pitch decks and fundraising loops. You validate opportunities, test acquisition channels, build early operating plans, and move fast from idea to proof.",
    responsibilities: [
      "Research markets, validate opportunities, and test acquisition channels.",
      "Build early operating plans across product, brand, supply, finance, and growth.",
      "Move quickly from idea to proof with high ownership and practical judgment."
    ],
    requirements: [
      "Founder, operator, or category-building experience — you've taken something from zero to one.",
      "Comfort with ambiguity and direct accountability — no one is going to tell you what to do.",
      "Strong taste for consumer health opportunities and willingness to build hands-on.",
      "You'd rather build than advise."
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
