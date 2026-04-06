"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const isDisabled = project.comingSoon || !project.liveUrl;

  const card = (
    <div className="relative flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden bg-ktf-charcoal border border-ktf-white/10 group select-none">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          draggable={false}
          className={`object-cover transition-transform duration-500 ${
            isDisabled ? "grayscale-[20%]" : "group-hover:scale-105"
          }`}
          sizes="320px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ktf-obsidian/80 via-ktf-obsidian/20 to-transparent" />

        {/* Coming Soon badge */}
        {project.comingSoon && (
          <div className="absolute inset-0 flex items-end justify-start p-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ktf-gold/40 bg-ktf-obsidian/70 backdrop-blur-sm px-3 py-1 text-caption font-semibold uppercase tracking-widest text-ktf-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-ktf-gold animate-pulse" />
              In Development
            </span>
          </div>
        )}

        {/* Live badge */}
        {!project.comingSoon && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-ktf-success/20 border border-ktf-success/30 px-2.5 py-0.5 text-caption font-semibold text-ktf-success backdrop-blur-sm">
              ● Live
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-md bg-ktf-white/8 border border-ktf-white/10 px-2 py-0.5 text-caption text-ktf-silver font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-body font-bold text-ktf-white leading-snug mb-1">
          {project.name}
        </h3>
        <p className="text-caption text-ktf-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Disabled overlay hint */}
        {isDisabled && (
          <p className="mt-3 text-caption text-ktf-gold/70 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Coming soon
          </p>
        )}
      </div>
    </div>
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

  // Duplicate for seamless loop feeling (2x set)
  const items = [...PROJECTS, ...PROJECTS];

  // Auto-scroll at ~40px/s
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const SPEED = 40; // px per second

    function step(ts: number) {
      if (!el) return;
      if (!isDragging.current && !isPaused) {
        const dt = lastTime.current ? (ts - lastTime.current) / 1000 : 0;
        posRef.current += SPEED * dt;
        // Reset when we've scrolled one full "set" width
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

  // Mouse drag
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

  // Touch drag
  function onTouchStart(e: React.TouchEvent) {
    const el = trackRef.current;
    if (!el) return;
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
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); isDragging.current = false; }}
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-ktf-obsidian to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-ktf-obsidian to-transparent" />

      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-hidden cursor-grab active:cursor-grabbing py-4 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
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

      {/* Scroll hint */}
      <p className="mt-3 text-center text-caption text-ktf-gray-600 select-none">
        ← drag or swipe to explore →
      </p>
    </div>
  );
}
