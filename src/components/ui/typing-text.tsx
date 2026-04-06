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
  speed = 85,
  startDelay = 600,
  showCursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    let nextTick: ReturnType<typeof setTimeout> | null = null;

    const getDelay = (char: string) => {
      if (/[.,!?]/.test(char)) return speed * 2;
      if (/\s/.test(char)) return speed * 0.65;
      return speed;
    };

    const typeNext = () => {
      if (cancelled) return;
      i += 1;
      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        setDone(true);
        return;
      }

      const lastTyped = text[i - 1] ?? "";
      nextTick = setTimeout(typeNext, getDelay(lastTyped));
    };

    const start = setTimeout(() => {
      if (cancelled) return;
      setDisplayed("");
      setDone(false);
      typeNext();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(start);
      if (nextTick) clearTimeout(nextTick);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      {showCursor && (
        <span
          aria-hidden="true"
          className={`ml-0.5 inline-block h-[0.85em] w-0.5 translate-y-[0.05em] align-middle bg-current ${
            done ? "animate-blink" : "opacity-100"
          }`}
        />
      )}
    </span>
  );
}
