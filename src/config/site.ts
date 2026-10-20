export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  cardDatabaseUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    reddit?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Disney Lorcana Hyperia City Wiki",
  shortName: "Hyperia City",
  logoText: "D",
  tagline: "Card Lists, Ink Drops, Decks & Release Guides",
  description: "Fan-made Disney Lorcana Hyperia City wiki with card lists, Ink Drops rules, deck guides, release news, and collecting tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://disney-lorcana-hyperia-city.wiki",
  supportEmail: "support@disney-lorcana-hyperia-city.wiki",
  gameUrl: "https://www.disneylorcana.com/en-US/product/hyperia-city",
  cardDatabaseUrl: "https://cards.disneylorcana.com/en-US/",
  heroVideoId: "VlLk_3TFIf0", // Disney Lorcana Reveals from D23 for Hyperia City
  social: {
    discord: "https://discord.gg/DisneyLorcana",
    youtube: "https://www.youtube.com/@DisneyLorcana",
    twitter: "https://x.com/DisneyLorcana",
    reddit: "https://www.reddit.com/r/Lorcana/",
  },
  locales: ["en", "de", "fr", "it"],
  defaultLocale: "en",
};
