/**
 * King Tech Foundation — Shared Constants
 */

export const SITE_NAME = "King Tech Foundation";
export const SITE_TAGLINE = "For Honour and For Excellence";
export const SITE_DESCRIPTION =
  "For Honour and For Excellence, Engineering the Solutions of this, and the Next Generation.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kingtechfoundation.com";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
] as const;

// ── Stats ──────────────────────────────────────────────────────────────────

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Global Clients" },
  { value: "4+", label: "Years of Excellence" },
  { value: "99%", label: "Client Satisfaction" },
] as const;

// ── Services ───────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "web",
    icon: "web",
    title: "Web Development",
    tagline: "Scalable full-stack applications",
    description:
      "We architect and build production-grade web applications using Next.js, React, and modern full-stack technologies — optimised for performance, security, and scale.",
    features: [
      "Next.js & React (App Router)",
      "TypeScript with strict types",
      "REST & GraphQL APIs",
      "Lighthouse score > 95",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    id: "mobile",
    icon: "mobile",
    title: "Mobile Development",
    tagline: "Native & cross-platform apps",
    description:
      "We build robust mobile applications using React Native and Expo — delivering App Store-quality experiences for both iOS and Android from a single codebase.",
    features: [
      "React Native & Expo",
      "iOS & Android from one codebase",
      "Offline-first architecture",
      "Push notifications & deep links",
    ],
    tech: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud & Infrastructure",
    tagline: "Resilient, zero-downtime architectures",
    description:
      "We design and implement cloud-native infrastructure on AWS, GCP, and Azure — using Kubernetes, Terraform, and CI/CD pipelines for zero-downtime deployments.",
    features: [
      "Kubernetes orchestration",
      "Terraform infrastructure as code",
      "GitHub Actions CI/CD",
      "99.99% uptime SLAs",
    ],
    tech: ["AWS", "GCP", "Kubernetes", "Terraform"],
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI & Machine Learning",
    tagline: "Intelligent systems, practical impact",
    description:
      "We integrate AI capabilities into real products — from LLM-powered features and RAG pipelines to predictive analytics and computer vision systems.",
    features: [
      "LLM integration & fine-tuning",
      "RAG & vector search pipelines",
      "Predictive analytics",
      "Computer vision systems",
    ],
    tech: ["Python", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    id: "api",
    icon: "api",
    title: "API & Backend",
    tagline: "High-throughput, documented backends",
    description:
      "We engineer secure, fully-documented REST and GraphQL APIs — using NestJS, Go, and CockroachDB for enterprise-grade reliability and multi-tenant scale.",
    features: [
      "OpenAPI / Swagger documentation",
      "Multi-tenant architecture",
      "Rate limiting & security hardening",
      "Real-time with WebSockets",
    ],
    tech: ["NestJS", "Go", "CockroachDB", "Redis"],
  },
  {
    id: "design",
    icon: "design",
    title: "UI / UX Design",
    tagline: "Design systems that endure",
    description:
      "We create pixel-perfect, accessible design systems and user interfaces that reflect brand excellence — from wireframes through to production-ready component libraries.",
    features: [
      "Design system architecture",
      "Component libraries (Figma → code)",
      "WCAG AA accessibility",
      "Interaction design & prototyping",
    ],
    tech: ["Figma", "Tailwind CSS", "Framer", "Storybook"],
  },
] as const;

// ── Company Values ─────────────────────────────────────────────────────────

export const VALUES = [
  {
    id: "honour",
    icon: "🤝",
    title: "Honour",
    description:
      "Our word is our bond. We operate with unwavering integrity in every client relationship, every line of code, and every decision we make.",
  },
  {
    id: "excellence",
    icon: "⭐",
    title: "Excellence",
    description:
      "Mediocrity is not an option. We hold ourselves to the highest engineering and design standards — building products worthy of the next generation.",
  },
  {
    id: "innovation",
    icon: "💡",
    title: "Innovation",
    description:
      "We push the boundaries of the technologically possible. Every project is an opportunity to advance the state of the art.",
  },
  {
    id: "impact",
    icon: "🌍",
    title: "Generational Impact",
    description:
      "We build solutions that matter — not just for today, but for the generations that follow. Long-term thinking defines every architecture decision.",
  },
  {
    id: "craftsmanship",
    icon: "🔨",
    title: "Craftsmanship",
    description:
      "Every component, API endpoint, and pixel receives the same deliberate care. We take genuine pride in the quality of our craft.",
  },
  {
    id: "partnership",
    icon: "🔗",
    title: "True Partnership",
    description:
      "We embed ourselves in your mission. Your success is our success — we are not a vendor, we are an engineering partner genuinely invested in your outcome.",
  },
] as const;

// ── Testimonials ───────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "King Tech Foundation didn't just build our platform — they redesigned how we think about our digital infrastructure. The quality and thoughtfulness of their engineering is extraordinary.",
    author: "Amara Okafor",
    role: "Co-Founder & CTO",
    company: "FinEdge Technologies",
    initials: "AO",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Working with KTF was a defining moment for our startup. They delivered a production-ready SaaS platform in record time, without a single compromise on quality or performance.",
    author: "James Thornton",
    role: "Chief Executive Officer",
    company: "Nexus Health AI",
    initials: "JT",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The KTF team has become our permanent engineering partner. Their work ethic, technical depth, and genuine care for our product sets them apart from every agency we have ever worked with.",
    author: "Priya Nair",
    role: "VP of Technology",
    company: "Horizon Logistics Group",
    initials: "PN",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "What impressed me most was how KTF treated our project as if it were their own. The design system they built for us is still serving us perfectly two years later.",
    author: "David Chen",
    role: "Founder",
    company: "BuildXR Studio",
    initials: "DC",
    rating: 5,
  },
] as const;

// ── Partners ───────────────────────────────────────────────────────────────

export const PARTNERS = [
  {
    id: "vercel",
    name: "Vercel",
    description: "Global edge deployment platform",
    tier: "strategic" as const,
    websiteLink: "https://vercel.com",
  },
  {
    id: "railway",
    name: "Railway",
    description: "Infrastructure for backend services",
    tier: "technology" as const,
    websiteLink: "https://railway.app",
  },
  {
    id: "cockroachdb",
    name: "CockroachDB",
    description: "Distributed SQL for high availability",
    tier: "technology" as const,
    websiteLink: "https://cockroachlabs.com",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    description: "Edge network and security",
    tier: "strategic" as const,
    websiteLink: "https://cloudflare.com",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Payments infrastructure",
    tier: "community" as const,
    websiteLink: "https://stripe.com",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Source control and CI/CD",
    tier: "community" as const,
    websiteLink: "https://github.com",
  },
] as const;

// ── Partnership Tiers ──────────────────────────────────────────────────────

export const PARTNERSHIP_TIERS = [
  {
    id: "strategic",
    name: "Strategic Partner",
    description:
      "Deep technical integration and joint go-to-market programs with KTF's core engineering team.",
    benefits: [
      "Co-development opportunities",
      "Joint marketing & case studies",
      "Early access to KTF solutions",
      "Dedicated partnership manager",
      "Revenue sharing programs",
    ],
    highlighted: true,
  },
  {
    id: "technology",
    name: "Technology Partner",
    description:
      "Technology integration, ecosystem collaboration, and access to KTF's developer network.",
    benefits: [
      "API & SDK integration support",
      "Technical documentation access",
      "Partner portal & resources",
      "Quarterly business reviews",
    ],
    highlighted: false,
  },
  {
    id: "community",
    name: "Community Partner",
    description:
      "Ecosystem participation, community building, and mutual referral network access.",
    benefits: [
      "Partner directory listing",
      "Community event access",
      "Newsletter features",
      "Network referrals",
    ],
    highlighted: false,
  },
] as const;
