import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://perfecttiming.local";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/checkout`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];
}


