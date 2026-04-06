import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import { ProjectsGrid } from "@/components/marketing/projects-grid";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects — King Tech Foundation",
  description:
    "Explore the accomplished works of King Tech Foundation — web applications, mobile apps, and digital products built with precision and purpose.",
  openGraph: {
    title: "Our Projects — King Tech Foundation",
    description:
      "From government portals to fashion platforms, explore the portfolio of engineering excellence we have delivered.",
  },
};

const stats = [
  { value: String(PROJECTS.length) + "+", label: "Projects Delivered" },
  {
    value: String(PROJECTS.filter((p) => !p.comingSoon).length),
    label: "Live & Deployed",
  },
  {
    value: String(PROJECTS.filter((p) => p.comingSoon).length),
    label: "In Active Development",
  },
  {
    value: String(new Set(PROJECTS.map((p) => p.type)).size),
    label: "Platform Types Covered",
  },
] as const;

export default function ProjectsPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="relative bg-ktf-obsidian overflow-hidden py-24 sm:py-32">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle at center, #0a84ff 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <Container size="lg" className="relative">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-ktf-gold/40 text-ktf-gold bg-ktf-gold/10 mb-6"
            >
              Accomplished Works
            </Badge>
            <h1 className="text-display font-bold leading-heading text-ktf-white mb-6">
              Built With Precision.{" "}
              <span className="text-ktf-blue">Deployed With Purpose.</span>
            </h1>
            <p className="text-body-lg text-ktf-gray-400 leading-body max-w-2xl">
              Every project here is a testament to our commitment to engineering
              excellence. From rapid MVPs to enterprise platforms — built to
              last.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-h2 font-bold text-ktf-white leading-none">
                  {stat.value}
                </span>
                <span className="text-caption text-ktf-gray-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Projects grid ─────────────────────────────────────── */}
      <section className="bg-ktf-white py-20 sm:py-28">
        <Container size="lg">
          <div className="mb-12">
            <h2 className="text-h2 font-bold text-ktf-navy mb-3">
              Our Portfolio
            </h2>
            <p className="text-body text-ktf-gray-600 leading-body max-w-2xl">
              Use the filters below to explore projects by platform type.
              Projects marked &quot;Coming Soon&quot; are currently in active
              development.
            </p>
          </div>

          <ProjectsGrid />
        </Container>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="bg-ktf-navy py-20 sm:py-28">
        <Container size="md" className="text-center">
          <h2 className="text-h2 font-bold text-ktf-white mb-4">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-body-lg text-ktf-gray-400 leading-body mb-10 max-w-xl mx-auto">
            Your next project could be right here. Let&apos;s talk about what
            you&apos;re building.
          </p>
          <a
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-ktf-blue px-8 text-body font-semibold text-white transition-colors duration-150 hover:bg-ktf-blue-deep"
          >
            Start a Project
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Container>
      </section>
    </>
  );
}
