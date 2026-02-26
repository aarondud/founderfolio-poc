export const FOUNDER_FOLIO_LOGO =
  "https://placehold.co/200x200/004838/E2FB6C?text=FF&font=playfair-display";
export const FOUNDER_FOLIO_LOGO_DARK =
  "https://placehold.co/200x200/004838/E2FB6C?text=FF&font=playfair-display";

export const MONTH_NAMES: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

export const GAME_OVER_MESSAGES = [
  {
    min: 0,
    max: 5,
    message: "Continue developing your investment strategy. Experience is essential to identifying market leaders.",
  },
  {
    min: 6,
    max: 10,
    message: "Solid foundation. Continue refining your approach to deal evaluation and portfolio management.",
  },
  {
    min: 11,
    max: 15,
    message: "Strong performance. You demonstrate sound judgment in identifying promising opportunities.",
  },
  {
    min: 16,
    max: 20,
    message: "Excellent execution. Your strategic vision positions you well for managing venture capital.",
  },
  {
    min: 21,
    max: Infinity,
    message: "Outstanding results. Your investment acumen is comparable to elite fund managers.",
  },
];

export const KEYNOTE_ANALYSIS = {
  name: "Michael Moritz",
  title: "Partner at Sequoia Capital",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  logo: "https://cdn.brandfetch.io/idRkN5iMbE/w/200/h/200/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
  quote:
    "FounderFolio is tackling a real pain point in venture—the chaos of managing deal flow. Any tool that helps investors stay organized and never miss an opportunity is worth a closer look.",
};

export const CONTENT = {
  overview: {
    tag: "FounderFolio",
    header:
      "The modern CRM for venture capital firms. Track deals, manage relationships, and scale your portfolio with confidence.",
    sub: "FounderFolio helps VCs organize deal flow, monitor portfolio companies, and build stronger founder relationships—all in one intuitive platform. Built for firms that want to move fast and never miss an opportunity.",
    body: [
      "Streamline your entire investment workflow.",
      "Navigate venture capital with confidence →",
    ],
  },
  executives: {
    tag: "team",
    header: "The minds behind FounderFolio.",
    sub: "Our leadership team blends venture experience with product expertise, building the next generation of VC tools. With backgrounds at top firms and tech companies, we know what investors need to succeed.",
    body: "The C-suite works together to ship fast. The CPO shapes product direction, while the CMO builds brand awareness. The Chairman provides strategic guidance, and the External Advisor brings deep industry connections. The CTO and VP Engineering lead our engineering team, building features that matter to customers.",
  },
  portfolio: {
    tag: "portfolio",
    header: "Expanding our reach across global tech hubs.",
    sub: "FounderFolio is building strategic partnerships across major startup ecosystems. Our team has identified key markets where we see strong potential for growth, partnerships, and market entry. These represent our priority expansion markets for Series A funding.",
    body: `Our growth strategy focuses on establishing presence in high-potential startup ecosystems. Each target market offers unique advantages—from venture capital density to regulatory environments. The following data represents our current market prioritization.`,
  },
  sentiment: {
    tag: "sentiment",
    header: '"' + KEYNOTE_ANALYSIS.quote + '"',
    sub: null,
    body: null,
  },
  simulator: {
    tag: "deal flow simulator",
    header:
      "Test your investment instincts with our interactive simulator. Navigate the startup landscape and identify high-growth opportunities.",
    sub: "Our deal-flow simulator places you at the helm. Make strategic decisions, build your portfolio, and demonstrate your ability to identify the next market leader.",
    body: null,
  },
  analysis: {
    tag: "analysis",
    header:
      "See how we're tracking. Explore our growth metrics and performance data.",
    sub: "Our FY25 performance snapshot shows key metrics—proposals, engagements, and pipeline health. Hover over data points for context on what each milestone means.",
    body: null,
  },
  distribution: {
    tag: "Distribution",
    header: "Where we invest. Geographic distribution of our portfolio.",
    sub: `Our portfolio spans major startup ecosystems globally. We believe in backing founders wherever they are, with deep expertise in key markets.`,
    body: `We maintain a diversified portfolio across North America, Europe, and Asia. Each region brings unique opportunities—from Silicon Valley's density to Southeast Asia's growth potential.`,
    body2: `This distribution helps us identify trends early and connect founders with relevant expertise across our network.`,
  },
  faq: {
    tag: "FAQs",
    header: "FAQs",
    sub: "Your questions on startup markets answered.",
    body: null,
  },
};

export const FAQ_DATA = [
  {
    question:
      "What makes FounderFolio a unique asset in the startup investment space?",
    answer:
      "FounderFolio is the only VC CRM designed from the ground up for modern venture firms. Unlike spreadsheets and legacy tools, we built workflow automation that scales with your portfolio— from first pitch to exit.",
  },
  {
    question:
      "What role does the team play in FounderFolio's product development?",
    answer:
      "Our team brings decades of experience in venture and software. The CPO drives product strategy, while the CMO builds awareness. The CTO and VP Engineering ship fast, iterating based on customer feedback. The Chairman ensures we stay focused on long-term value.",
  },
  {
    question:
      "What are FounderFolio's future prospects in the VC technology landscape?",
    answer:
      "FounderFolio aims to become the standard CRM for venture capital. With FY26, we're expanding into new markets and adding AI-powered insights. Our roadmap includes deeper portfolio analytics and automated founder engagement workflows.",
  },
  {
    question: "Is this a real company?",
    answer:
      "FounderFolio is a demo showcasing modern VC CRM design patterns. Built with React, TypeScript, and Tailwind CSS—a portfolio project demonstrating full-stack capabilities.",
  },
];

const UserIcon = "https://placehold.co/200x200/004838/E2FB6C?text=👤";

export const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    title: "Chief Executive Officer",
    quote:
      "I'm focused on building the best VC CRM in the market. FounderFolio is my number one priority.",
    image: UserIcon,
    prediction: null,
    investment: null,
    action: null,
  },
  {
    name: "Sarah Mitchell",
    title: "Chairman of the Board",
    quote:
      "FounderFolio's growth trajectory requires steady leadership and strategic direction.",
    image: UserIcon,
    prediction: "San Francisco",
    investment: "$10,000",
    action: "invested",
  },
  {
    name: "James Wilson",
    title: "Chief Technology Officer",
    quote:
      "We're building modern infrastructure to scale with our customers. All features are built with security in mind.",
    image: UserIcon,
    prediction: "London",
    investment: "$10,000",
    action: "allocated",
  },
  {
    name: "David Park",
    title: "VP of Engineering",
    quote:
      "Our engineering team ships fast. We're constantly iterating based on user feedback.",
    image: UserIcon,
    prediction: "Singapore",
    investment: "$10,000",
    action: "committed",
  },
  {
    name: "Emily Rodriguez",
    title: "Chief Product Officer",
    quote:
      "Product-led growth is our strategy. We're building features that VCs actually want to use.",
    image: UserIcon,
    prediction: "Berlin",
    investment: "$10,000",
    action: "deployed",
  },
  {
    name: "Michael Thompson",
    title: "Chief Marketing Officer",
    quote:
      "We're positioning FounderFolio as the go-to solution for modern venture firms.",
    image: UserIcon,
    prediction: "Toronto",
    investment: "$10,000",
    action: "allocated",
  },
  {
    name: "Lisa Chen",
    title: "External Advisor",
    quote:
      "Our advisory network helps us stay connected to the VC community and understand their needs.",
    image: UserIcon,
    prediction: "San Francisco",
    investment: "$10,000",
    action: "backed",
  },
];

export const MARKET_ANALYSIS = [
  {
    name: "Morgan Stanley",
    title: "Senior Tech Analyst",
    quote:
      "FounderFolio addresses a critical gap in venture workflow tools. The deal pipeline management is solid, though competition in this space is heating up.",
    image: UserIcon,
  },
  {
    name: "Sarah Johnson",
    title: "Former YC Partner",
    quote:
      "I've seen dozens of portfolio tools—FounderFolio stands out with its clean UX. The founder tracking features could use more depth, but it's a strong start.",
    image: UserIcon,
  },
  {
    name: "Michael Brown",
    title: "Angel Investor",
    quote:
      "Finally, a tool that helps us stay organized across our portfolio. The relationship tracking alone has saved our team countless hours. Highly recommended for angel investors.",
    image: UserIcon,
  },
  {
    name: "Jessica Lee",
    title: "TechCrunch Reporter",
    quote:
      "FounderFolio is carving out a niche in the VC tech stack. The market for portfolio management tools is growing fast, and this startup is well-positioned.",
    image: UserIcon,
  },
  {
    name: "Robert Taylor",
    title: "Hedge Fund Strategist",
    quote:
      "Good product-market fit for early-stage VC firms. The pipeline visualization is intuitive, but they'll need to expand integrations to compete long-term.",
    image: UserIcon,
  },
];
