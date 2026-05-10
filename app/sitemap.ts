import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: absoluteUrl("/referencie"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/kontakt"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
