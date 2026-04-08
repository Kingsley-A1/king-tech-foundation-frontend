"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const isDisabled = project.comingSoon || !project.liveUrl;

  const card = (
    <article
      className={`group relative w-72 shrink-0 overflow-hidden rounded-2xl border border-ktf-white/15 bg-linear-to-b from-ktf-navy/70 to-ktf-obsidian/95 shadow-card sm:w-80 ${
        isDisabled
          ? "cursor-not-allowed opacity-90"
          : "transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ktf-blue/70 to-ktf-gold/70" />

      <div className="relative aspect-video w-full overflow-hidden bg-ktf-navy/40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          draggable={false}
          className={`object-cover transition-transform duration-500 ${
            isDisabled ? "saturate-75" : "group-hover:scale-105"
          }`}
          sizes="320px"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ktf-obsidian/30 via-transparent to-transparent" />
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
            Explore project -&gt;
          </p>
        )}
      </div>
    </article>
  );

  if (isDisabled) {
    return (
      <div
        className="cursor-not-allowed"
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
      className="block cursor-pointer"
    >
      {card}
    </a>
  );
}

export function ProjectsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0); // pixel offset for auto-scroll
  const lastTime = useRef(0);

  const items = [...PROJECTS, ...PROJECTS];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const SPEED = 28;

    function step(ts: number) {
      if (!el) return;
      if (!isDragging.current && !isPaused) {
        const dt = lastTime.current ? (ts - lastTime.current) / 1000 : 0;
        posRef.current += SPEED * dt;
        const halfWidth = el.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current -= halfWidth;
        }
        el.scrollLeft = posRef.current;
      }
      lastTime.current = ts;
      animRef.current = requestAnimationFrame(step);
    }

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused]);

  function onMouseDown(e: React.MouseEvent) {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    posRef.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    const newScroll = scrollLeft.current - walk;
    el.scrollLeft = newScroll;
    posRef.current = newScroll;
  }

  function onMouseUp() {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  function onTouchStart(e: React.TouchEvent) {
    const el = trackRef.current;
    if (!el) return;
    setIsPaused(true);
    isDragging.current = true;
    startX.current = e.touches[0].pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    posRef.current = el.scrollLeft;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    const newScroll = scrollLeft.current - walk;
    el.scrollLeft = newScroll;
    posRef.current = newScroll;
  }

  function onTouchEnd() {
    isDragging.current = false;
    setIsPaused(false);
  }

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        isDragging.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing sm:gap-5"
        style={
          {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          } as React.CSSProperties
        }
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((project, i) => (
          <ProjectCard key={`${project.id}-${i}`} project={project} />
        ))}
      </div>

      <p className="mt-3 select-none text-center text-caption text-ktf-gray-500">
        Drag or swipe to explore
      </p>
    </div>
  );
}
