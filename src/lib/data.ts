export const TICKER_COLOUR = {
  loss: "text-ticker-loss",
  gain: "text-ticker-gain",
  stable: "text-ticker-stable",
};

export interface MarketLocation {
  name: string;
  displayName?: string;
  quote: string;
  image: string;
  priority: string;
  investments: number;
  sentiment: string;
  colour: string;
  markerPosition: { x: number; y: number };
  tooltipOffset: { x: number; y: number };
}

export const MARKET_LOCATIONS: MarketLocation[] = [
  {
    name: "San Francisco",
    quote:
      "HQ location - highest deal flow. Leading tech ecosystem with access to top-tier startups and investors.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=200&fit=crop",
    priority: "High Priority",
    investments: 2,
    sentiment: "Hot Market",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: -122.419416, y: 37.774929 },
    tooltipOffset: { x: 100, y: 100 },
  },
  {
    name: "San Francisco HQ",
    displayName: "San Francisco",
    quote:
      "San Francisco remains our headquarters and base for product development and customer success.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200&h=200&fit=crop",
    priority: "Headquarters",
    investments: 0,
    sentiment: "Established",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: -122.419416, y: 37.774929 },
    tooltipOffset: { x: -125, y: 0 },
  },
  {
    name: "London",
    quote:
      "European expansion priority. Strong fintech hub with access to European markets and top-tier talent.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=200&h=200&fit=crop",
    priority: "High Priority",
    investments: 1,
    sentiment: "Emerging",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: -0.1276, y: 51.5074 },
    tooltipOffset: { x: -100, y: 100 },
  },
  {
    name: "Singapore",
    quote:
      "Emerging market focus. Gateway to Asian markets with strong government support for tech startups.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=200&h=200&fit=crop",
    priority: "Medium Priority",
    investments: 1,
    sentiment: "Growing",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: 103.8198, y: 1.3521 },
    tooltipOffset: { x: 100, y: 100 },
  },
  {
    name: "Shanghai",
    quote:
      "Asian market potential. China's financial hub with rapid tech innovation and massive market potential.",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=200&h=200&fit=crop",
    priority: "Medium Priority",
    investments: 1,
    sentiment: "Strong",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: 121.4737, y: 31.2304 },
    tooltipOffset: { x: 0, y: -100 },
  },
  {
    name: "Toronto",
    quote:
      "North American backup. Growing tech hub with access to North American markets and diverse talent pool.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=200&h=200&fit=crop",
    priority: "Low Priority",
    investments: 1,
    sentiment: "Growing",
    colour: TICKER_COLOUR.stable,
    markerPosition: { x: -79.3832, y: 43.6532 },
    tooltipOffset: { x: -80, y: -50 },
  },
  {
    name: "Lagos",
    quote:
      "Exploring African market opportunities and partnership possibilities.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=200&h=200&fit=crop",
    priority: "Expansion Office",
    investments: 0,
    sentiment: "Expansion",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: 3.3792, y: 6.5244 },
    tooltipOffset: { x: -125, y: 0 },
  },
  {
    name: "Rio de Janeiro",
    quote:
      "Rio de Janeiro is a promising South American hub with growing startup activity and regional access.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=200&h=200&fit=crop",
    priority: "Regional Office",
    investments: 0,
    sentiment: "Emerging",
    colour: TICKER_COLOUR.gain,
    markerPosition: { x: -43.1729, y: -22.9068 },
    tooltipOffset: { x: 120, y: 20 },
  },
];

export const CHART_DATA = [
  {
    month: "Jul",
    value: 12,
    highlight: ["Pipeline Launch"],
    note: "Launched new deal sourcing strategy. Started tracking inbound founder pitches.",
  },
  {
    month: "Aug",
    value: 28,
    highlight: ["Team Expansion"],
    note: "Added two junior associates. Increased outbound outreach capacity by 40%.",
  },
  {
    month: "Sep",
    value: 45,
    highlight: ["Platform Integration"],
    note: "Integrated with Crunchbase API. Automated founder research workflow.",
  },
  {
    month: "Oct",
    value: 67,
    highlight: ["Partnership Deal"],
    note: "Signed first accelerator partnership. Access to 200+ startups annually.",
  },
  {
    month: "Nov",
    value: 89,
    highlight: ["Speaking Event"],
    note: "Spoke at regional VC conference. Generated 30+ qualified leads.",
  },
  {
    month: "Dec",
    value: 78,
    highlight: ["Holiday Slowdown"],
    note: "Typical December dip. Used time for portfolio company check-ins.",
  },
  {
    month: "Jan",
    value: 112,
    highlight: ["New Strategy"],
    note: "Launched direct founder outreach. First cold email campaigns driving leads.",
  },
  {
    month: "Feb",
    value: 156,
    highlight: ["Portfolio Exit"],
    note: "One portfolio company exited. Reallocated resources to new opportunities.",
  },
  {
    month: "Mar",
    value: 189,
    highlight: ["Speed Week"],
    note: "Ran intensive diligence sprint. Moved 15 deals through due diligence.",
  },
  {
    month: "Apr",
    value: 234,
    highlight: ["Fund News"],
    note: "Announced Fund II. Limited partners increased allocations by 60%.",
  },
  {
    month: "May",
    value: 267,
    highlight: ["International Push"],
    note: "Opened London office. First European deals in pipeline.",
  },
  {
    month: "Jun",
    value: 312,
    highlight: ["Record Quarter"],
    note: "Best quarter ever. 24 new deals added to active pipeline.",
  },
];

export const CAROUSEL_IMAGES_ROW1 = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
];

export const CAROUSEL_IMAGES_ROW2 = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop",
];

export const CAROUSEL_IMAGES_ROW3 = [
  "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
];

export const HERO_IMAGES = [
  {
    brand: "Investors",
    logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop",
  },
  {
    brand: "Partners",
    logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=200&fit=crop",
  },
  {
    brand: "Accelerators",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop",
  },
  {
    brand: "Angels",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=200&fit=crop",
  },
];

export const STARTUP_OPPORTUNITIES = [
  { name: "Seed Round", emoji: "🌱" },
  { name: "Series A", emoji: "📈" },
  { name: "Series B", emoji: "📊" },
  { name: "Unicorn", emoji: "🦄" },
  { name: "Exit", emoji: "🚀" },
  { name: "IPO", emoji: "🔔" },
  { name: "Acquisition", emoji: "🤝" },
  { name: "Pitch Deck", emoji: "💼" },
  { name: "Due Diligence", emoji: "🔍" },
  { name: "Board Seat", emoji: "🪑" },
  { name: "Fundraising", emoji: "💰" },
];

export const COMBINED_FRUITS = STARTUP_OPPORTUNITIES.map((item) => ({
  name: item.name,
  image: item.emoji,
}));

export const HEATMAP_COLORS = [
  { label: "Strong Investment", color: "#004838", key: "positive" },
  { label: "Growing Market", color: "#006b4e", key: "negative" },
  { label: "Emerging Opportunity", color: "#009963", key: "positive-alt" },
  { label: "Strategic Focus", color: "#50a866", key: "negative-alt" },
];

export const HEATMAP_DATA = [
  {
    name: "🇺🇸 San Francisco",
    ticker: "SF",
    color: "positive",
    size: 55,
    deployed: "$18.5M",
    companies: 7,
    lead: "Sarah Mitchell",
    notes: "Key Market",
  },
  {
    name: "🇸🇬 Singapore",
    ticker: "SGP",
    color: "positive-alt",
    size: 25,
    deployed: "$5.2M",
    companies: 2,
    lead: null,
    notes: "Growth",
  },
  {
    name: "🇬🇧 London",
    ticker: "LDN",
    color: "positive",
    size: 30,
    deployed: "$8.0M",
    companies: 3,
    lead: "James Wilson",
    notes: "Expansion",
  },
  {
    name: "🇩🇪 Berlin",
    ticker: "BER",
    color: "negative-alt",
    size: 16,
    deployed: "$1.8M",
    companies: 1,
    lead: null,
    notes: "Evaluating",
  },
  {
    name: "🇨🇦 Toronto",
    ticker: "YYZ",
    color: "positive-alt",
    size: 20,
    deployed: "$2.5M",
    companies: 1,
    lead: "Lisa Chen",
    notes: "Pipeline",
  },
  {
    name: "🇦🇺 Sydney",
    ticker: "SYD",
    color: "positive-alt",
    size: 15,
    deployed: "$1.2M",
    companies: 1,
    lead: null,
    notes: "Interest",
  },
  {
    name: "🇯🇵 Tokyo",
    ticker: "TYO",
    color: "positive",
    size: 18,
    deployed: "$3.0M",
    companies: 1,
    lead: "Michael Thompson",
    notes: "Opportunity",
  },
  {
    name: "🇮🇳 Bangalore",
    ticker: "BLR",
    color: "negative-alt",
    size: 12,
    deployed: "$0.8M",
    companies: 1,
    lead: null,
    notes: "Later",
  },
  {
    name: "🇧🇷 Sao Paulo",
    ticker: "GRU",
    color: "negative",
    size: 10,
    deployed: "$0.5M",
    companies: 0,
    lead: null,
    notes: "Future",
  },
  {
    name: "🇳🇱 Amsterdam",
    ticker: "AMS",
    color: "positive-alt",
    size: 14,
    deployed: "$1.5M",
    companies: 1,
    lead: null,
    notes: "EU Hub",
  },
  {
    name: "🇫🇷 Paris",
    ticker: "CDG",
    color: "negative",
    size: 8,
    deployed: "$0.3M",
    companies: 0,
    lead: "David Park",
    notes: "Exploring",
  },
];
