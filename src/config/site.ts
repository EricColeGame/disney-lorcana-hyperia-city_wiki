export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://disney-lorcana-hyperia-city.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.disneylorcana.com/en-US/product/hyperia-city",
  heroVideoId: "3trpsFhwVAA", // Disney Lorcana Hyperia City prerelease deck-building tutorial
  social: {
    youtube: "https://www.youtube.com/@DisneyLorcana",
    twitter: "https://x.com/DisneyLorcana",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
