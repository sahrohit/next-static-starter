/* eslint-disable import/prefer-default-export */

import { type SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "The Dus Reception & Events | We make events happen",
  author: "sahrohit",
  description:
    "Perfect for hosting events, parties and every celebrations under the sun.",
  keywords: [
    "reception",
    "events",
    "Wedding Location",
    "Perfect Venue",
    "Together",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://sahrohit.com.np",
  },
  ogImage: `/opengraph-image.jpg`,
};
