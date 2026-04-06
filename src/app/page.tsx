import { Button, Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import Image from "next/image";
import {
  STATS,
  SERVICES,
  VALUES,
  TESTIMONIALS,
  PARTNERS,
  PROJECTS,
} from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "King Tech Foundation — For Honour and For Excellence",
  description:
    "Engineering production-grade digital solutions for the next generation. Web, mobile, cloud, AI — built with precision and purpose.",
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ktf-navy py-32 sm:py-40">
        {/* Grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, #0A84FF 0%, transparent 70%)",
          }}
        />

        <Container size="lg" className="relative text-center">
          <Badge
            variant="outline"
            className="border-ktf-blue/40 text-ktf-blue bg-ktf-blue/10 mb-8"
          >
            For Honour and For Excellence
          </Badge>
          <h1 className="text-h1 sm:text-display font-bold leading-display tracking-tight text-ktf-white max-w-4xl mx-auto">
            Engineering Solutions for This,{" "}
            <span className="whitespace-nowrap">
              and{" "}
              <span className="text-ktf-blue">
                The Next Generation
                <span className="animate-blink text-white font-light">_</span>
              </span>
            </span>
          </h1>
          <p className="mt-6 text-body-lg leading-body text-ktf-gray-400 max-w-2xl mx-auto">
            King Tech Foundation builds production-grade digital products — web
            applications, mobile experiences, cloud infrastructure, and AI
            systems — with relentless precision and craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" href="/contact">
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/services"
              className="border-ktf-gray-600 text-ktf-white hover:bg-ktf-white/10 hover:border-ktf-gray-400"
            >
              Explore Services
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Accomplished Works ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-ktf-obsidian py-24 sm:py-32">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top gold accent line */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #f5a524 30%, #f5a524 70%, transparent)",
            opacity: 0.5,
          }}
        />

        <Container size="lg" className="relative">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-overline font-bold uppercase tracking-[0.2em] mb-3 text-ktf-warning">
                Our Portfolio
              </p>
              <h2 className="text-h2 sm:text-h1 font-bold leading-display text-ktf-white">
                Accomplished
                <br />
                <span className="text-ktf-blue">Works.</span>
              </h2>
              <p className="mt-4 text-body-lg text-ktf-gray-400 leading-body max-w-md">
                Products shipped. Startups launched. Problems solved. This is
                what engineering excellence looks like.
              </p>
            </div>
            <Button
              href="/projects"
              variant="outline"
              className="border-ktf-white/20 text-ktf-white hover:bg-ktf-white/10 hover:border-ktf-white/40 shrink-0"
            >
              View Full Portfolio →
            </Button>
          </div>

          {/* Featured project grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter((p) => p.featured).map((project, i) => (
              <a
                key={project.id}
                href={
                  project.comingSoon
                    ? "/projects"
                    : project.liveUrl ?? "/projects"
                }
                target={project.comingSoon ? undefined : "_blank"}
                rel={project.comingSoon ? undefined : "noopener noreferrer"}
                className={[
                  "group relative overflow-hidden rounded-2xl bg-ktf-charcoal",
                  i === 0
                    ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]"
                    : "aspect-[4/3]",
                ].join(" ")}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={
                    i === 0
                      ? "(max-width: 640px) 100vw, (max-width:1024px) 66vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ktf-obsidian/90 via-ktf-obsidian/30 to-transparent transition-opacity duration-300 group-hover:from-ktf-obsidian/80" />
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-ktf-white/10 px-2.5 py-0.5 text-caption font-medium text-ktf-white backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.comingSoon ? (
                      <span className="rounded-full bg-ktf-warning/20 px-2.5 py-0.5 text-caption font-medium text-ktf-warning">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="rounded-full bg-ktf-success/20 px-2.5 py-0.5 text-caption font-semibold text-ktf-success">
                        ● Live
                      </span>
                    )}
                  </div>
                  <h3
                    className={[
                      "font-bold text-ktf-white leading-tight",
                      i === 0 ? "text-h3" : "text-h5",
                    ].join(" ")}
                  >
                    {project.name}
                  </h3>
                  {i === 0 && (
                    <p className="mt-2 text-body-sm text-ktf-gray-300 leading-body line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-t border-ktf-white/10 pt-10">
            {[
              { value: "11+", label: "Projects Shipped" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "4+", label: "Years Building" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-h3 font-bold text-ktf-blue leading-none">
                  {s.value}
                </p>
                <p className="mt-1 text-body-sm text-ktf-gray-400 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────── */}      <section className="bg-ktf-obsidian py-16">
        <Container size="lg">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-body-sm font-medium text-ktf-gray-500 uppercase tracking-widest">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-h2 font-bold text-ktf-white leading-none">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Services Overview ─────────────────────────────────── */}
      <section className="bg-ktf-white py-24 sm:py-32">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
              Our Expertise
            </p>
            <h2 className="text-h2 font-bold leading-heading text-ktf-navy">
              Full-Spectrum Digital Engineering
            </h2>
            <p className="mt-4 text-body-lg text-ktf-gray-600 max-w-xl mx-auto">
              From concept to deployment, we cover every layer of the modern
              technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`/services#${service.id}`}
                className="group block rounded-2xl border border-ktf-gray-200 bg-ktf-surface p-8 transition-all duration-200 hover:border-ktf-blue/40 hover:shadow-card-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ktf-blue/10 text-ktf-blue text-h4">
                  {service.icon}
                </div>
                <h3 className="text-h5 font-semibold text-ktf-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-body-sm text-ktf-gray-600 leading-body mb-4">
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ktf-gray-200 px-3 py-0.5 text-caption font-medium text-ktf-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/services">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Why KTF ──────────────────────────────────────────── */}
      <section className="bg-ktf-surface py-24 sm:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
                Why King Tech Foundation
              </p>
              <h2 className="text-h2 font-bold leading-heading text-ktf-navy mb-6">
                Built on Principle. Delivered with Precision.
              </h2>
              <p className="text-body-lg text-ktf-gray-600 leading-body mb-8">
                We are not a vendor. We are a partner. Every engagement starts
                with understanding your vision and ends with software that
                lasts.
              </p>
              <Button href="/about">Learn About Our Values</Button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {VALUES.slice(0, 4).map((value) => (
                <div
                  key={value.id}
                  className="rounded-xl border border-ktf-gray-200 bg-ktf-white p-6"
                >
                  <div className="text-h4 mb-3">{value.icon}</div>
                  <h3 className="text-h5 font-semibold text-ktf-navy mb-1">
                    {value.title}
                  </h3>
                  <p className="text-body-sm text-ktf-gray-600 leading-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Partners ─────────────────────────────────────────── */}
      <section className="bg-ktf-white py-20">
        <Container size="lg">
          <p className="text-center text-body-sm font-medium uppercase tracking-widest text-ktf-gray-400 mb-10">
            Trusted by &amp; built on world-class technology
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {PARTNERS.map((partner) => (
              <span
                key={partner.name}
                className="text-h5 font-semibold text-ktf-gray-400 transition-colors duration-150 hover:text-ktf-gray-600"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-ktf-surface py-24 sm:py-32">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
              Client Stories
            </p>
            <h2 className="text-h2 font-bold leading-heading text-ktf-navy">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="flex flex-col rounded-2xl border border-ktf-gray-200 bg-ktf-white p-6 shadow-card"
              >
                <div
                  className="flex gap-1 mb-4"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-ktf-warning text-body-sm">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="flex-1 text-body-sm text-ktf-gray-700 leading-body mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ktf-blue text-caption font-bold text-ktf-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-ktf-navy">
                      {t.author}
                    </p>
                    <p className="text-caption text-ktf-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" href="/reviews">
              Read All Reviews
            </Button>
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-ktf-navy py-24 sm:py-32">
        <Container size="md" className="text-center">
          <h2 className="text-h2 font-bold leading-heading text-ktf-white mb-4">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-body-lg text-ktf-gray-400 leading-body max-w-xl mx-auto mb-10">
            Let&apos;s discuss your project. Our team is ready to transform your
            vision into a production-grade reality.
          </p>
          <Button size="lg" href="/contact">
            Get in Touch
          </Button>
        </Container>
      </section>
    </>
  );
}
