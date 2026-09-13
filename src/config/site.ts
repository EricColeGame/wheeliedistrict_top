export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
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
  name: "Wheelie District Wiki",
  shortName: "Wheelie District",
  logoText: "WD",
  tagline: "Urban Wheelie Racing Simulator & Complete Guides",
  description: "Explore Wheelie District Wiki for bike guides, gameplay tips, controls, updates, codes, and everything players need to master motorcycle wheelie challenges.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wheeliedistrict.top",
  gameUrl: "https://www.roblox.com/games/89490838554710/Wheelie-District",
  heroVideoId: "dMHzipeh1ww",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
