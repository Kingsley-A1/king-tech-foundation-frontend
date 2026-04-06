"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before typing begins
  showCursor?: boolean;
}

export function TypingText({
  text,
  className = "",
  speed = 55,
  startDelay = 400,
  showCursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const start = setTimeout(() => {
      if (cancelled) return;
      // Reset to empty at start of timeout before typing begins
      setDisplayed("");
      setDone(false);
      const timer = setInterval(() => {
        if (cancelled) { clearInterval(timer); return; }
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      {showCursor && (
        <span
          aria-hidden="true"
          className={`inline-block w-[2px] h-[0.85em] ml-0.5 translate-y-[0.05em] bg-current align-middle ${
            done ? "animate-blink" : "opacity-100"
          }`}
        />
      )}
    </span>
  );
}
