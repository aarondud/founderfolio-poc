export const SECTION_IDS = {
  COMPANY_OVERVIEW: "company-overview",
  EXECUTIVES: "executives",
  PORTFOLIO: "portfolio",
  SIMULATOR: "simulator",
  MARKET_SENTIMENT: "market-sentiment",
  ANALYSIS: "analysis",
  DISTRIBUTION: "distribution",
  FAQ: "faq",
  REPORTS: "reports",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
