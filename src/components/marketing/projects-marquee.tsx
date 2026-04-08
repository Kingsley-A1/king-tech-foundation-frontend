import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Project = (typeof PROJECTS)[number];

const SHOWCASE_PROJECTS = PROJECTS.slice(0, 8);

function ProjectCard({ project }: { project: Project }) {
  const isDisabled = project.comingSoon || !project.liveUrl;

  const card = (
    <article
      className={`group flex aspect-[3/4] flex-col overflow-hidden rounded-2xl border border-ktf-white/15 bg-linear-to-b from-ktf-navy/70 to-ktf-obsidian/95 shadow-card ${
        isDisabled
          ? "opacity-90"
          : "transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      }`}
    >
      {/* Image — exactly half the card height */}
      <div className="relative h-1/2 w-full flex-none overflow-hidden bg-ktf-navy/40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isDisabled ? "saturate-75" : "group-hover:scale-105"
          }`}
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>

      {/* Content — remaining half */}
      <div className="flex flex-1 flex-col gap-2 overflow-hidden p-3 sm:p-4">
        {/* Category pill */}
        <span className="inline-block self-start whitespace-nowrap rounded-full border border-ktf-blue/30 bg-ktf-blue/10 px-2.5 py-0.5 text-[10px] font-semibold leading-tight text-ktf-blue">
          {project.category}
        </span>

        {/* Status badge */}
        {isDisabled ? (
          <span className="inline-flex items-center gap-1 self-start whitespace-nowrap rounded-full border border-ktf-gold/35 bg-ktf-gold/12 px-2 py-0.5 text-[10px] font-semibold leading-tight text-ktf-gold">
            In Development
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 self-start whitespace-nowrap rounded-full border border-ktf-success/35 bg-ktf-success/15 px-2 py-0.5 text-[10px] font-semibold leading-tight text-ktf-success">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ktf-success" />
            Live
          </span>
        )}

        {/* Title */}
        <h3 className="truncate text-sm font-bold leading-snug text-ktf-white">
          {project.name}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 flex-1 text-[11px] leading-relaxed text-ktf-gray-400">
          {project.description}
        </p>

        {/* CTA */}
        <p
          className={`text-[10px] font-semibold transition-colors duration-200 ${
            isDisabled
              ? "text-ktf-gold/80"
              : "text-ktf-blue group-hover:text-ktf-white"
          }`}
        >
          {isDisabled ? "In engineering" : "Explore project \u2192"}
        </p>
      </div>
    </article>
  );

  if (isDisabled) {
    return (
      <div
        aria-label={`${project.name} — not yet available`}
        title="This project is not yet available"
      >
        {card}
      </div>
    );
  }

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name}`}
      className="block"
    >
      {card}
    </a>
  );
}

export function ProjectsMarquee() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {SHOWCASE_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          href="/projects"
          variant="outline"
          className="border-ktf-blue/30 text-ktf-blue hover:bg-ktf-blue/10 hover:border-ktf-blue/50"
        >
          See More Projects →
        </Button>
      </div>
    </div>
  );
}
