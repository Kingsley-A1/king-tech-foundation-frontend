import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "King Tech Foundation",
    short_name: "KTF",
    description:
      "Engineering Solutions for This, and The Next Generation. Web, mobile, cloud, and AI — built with precision.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1f3a",
    theme_color: "#0a84ff",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icons/ktf-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ktf-logo-main.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Our Services",
        url: "/services",
        description: "Explore our engineering services",
      },
      {
        name: "Contact Us",
        url: "/contact",
        description: "Get in touch with our team",
      },
      {
        name: "Our Projects",
        url: "/projects",
        description: "View our accomplished portfolio",
      },
    ],
  };
}
