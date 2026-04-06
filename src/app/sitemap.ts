import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    {
      url: "/partnerships",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    { url: "/reviews", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
