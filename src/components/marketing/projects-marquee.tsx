import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Project = (typeof PROJECTS)[number];

const SHOWCASE_PROJECTS = PROJECTS.slice(0, 8);

function ProjectCard({ project }: { project: Project }) {
  const isDisabled = project.comingSoon || !project.liveUrl;

  const card = (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-ktf-white/15 bg-linear-to-b from-ktf-navy/70 to-ktf-obsidian/95 shadow-card ${
        isDisabled
          ? "opacity-90"
          : "transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ktf-blue/70 to-ktf-gold/70" />

      <div className="relative aspect-video w-full overflow-hidden bg-ktf-navy/40">
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

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md border border-ktf-white/20 bg-ktf-white/10 px-2 py-0.5 text-caption font-medium text-ktf-white/85">
            {project.category}
          </span>
          {isDisabled ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-ktf-gold/35 bg-ktf-gold/12 px-2.5 py-0.5 text-caption font-semibold text-ktf-gold">
              In Development
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-ktf-success/35 bg-ktf-success/15 px-2.5 py-0.5 text-caption font-semibold text-ktf-success">
              <span className="h-1.5 w-1.5 rounded-full bg-ktf-success" />
              Live
            </span>
          )}
        </div>

        <h3 className="text-body font-bold leading-snug text-ktf-white">
          {project.name}
        </h3>

        <p className="line-clamp-2 text-caption leading-relaxed text-ktf-gray-400">
          {project.description}
        </p>

        {isDisabled && (
          <p className="text-caption font-medium text-ktf-gold/80">
            This project is currently being engineered.
          </p>
        )}

        {!isDisabled && (
          <p className="text-caption font-medium text-ktf-blue transition-colors duration-200 group-hover:text-ktf-white">
            Explore project &rarr;
          </p>
        )}
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
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {SHOWCASE_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          href="/projects"
          variant="outline"
          className="border-ktf-white/20 text-ktf-white hover:bg-ktf-white/10 hover:border-ktf-white/40"
        >
          See More Projects &rarr;
        </Button>
      </div>
    </div>
  );
}
