"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  prompt(): Promise<void>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // Check if previously dismissed (within 7 days)
    const dismissedAt = localStorage.getItem("ktf-install-dismissed");
    if (dismissedAt) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - parseInt(dismissedAt) < sevenDays) return;
    }

    // iOS detection
    const isIOSDevice =
      /iphone|ipad|ipod/i.test(navigator.userAgent) &&
      !(window.navigator as Navigator & { standalone?: boolean }).standalone;
    if (isIOSDevice) {
      setIsIOS(true);
      // Show iOS hint after 3 seconds
      setTimeout(() => setShow(true), 3000);
      return;
    }

    // Android/Chrome — listen for native prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShow(true), 2000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem("ktf-install-dismissed", Date.now().toString());
  };

  if (dismissed || (!deferredPrompt && !isIOS)) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 right-4 z-[300] md:left-auto md:right-6 md:w-[360px]"
          role="dialog"
          aria-label="Install King Tech Foundation app"
        >
          <div className="bg-ktf-obsidian border border-ktf-blue/20 rounded-2xl shadow-2xl p-5 flex gap-4 items-start">
            <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-ktf-gold/30">
              <Image
                src="/icons/ktf-logo.png"
                alt="KTF"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-ktf-white font-semibold text-sm leading-snug">
                Install King Tech Foundation
              </p>
              {isIOS ? (
                <p className="text-ktf-silver text-xs mt-1 leading-relaxed">
                  Tap the{" "}
                  <span className="text-ktf-blue font-medium">Share</span>{" "}
                  button below, then{" "}
                  <span className="text-ktf-blue font-medium">
                    Add to Home Screen
                  </span>
                </p>
              ) : (
                <p className="text-ktf-silver text-xs mt-1 leading-relaxed">
                  Add to your home screen for a faster, app-like experience.
                </p>
              )}

              {!isIOS && (
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleInstall}
                    className="bg-ktf-blue text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-ktf-blue/80 transition-colors"
                  >
                    Install
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="text-ktf-silver text-xs px-3 py-1.5 rounded-lg hover:text-ktf-white transition-colors"
                  >
                    Not now
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleDismiss}
              className="shrink-0 text-ktf-silver hover:text-ktf-white transition-colors mt-0.5"
              aria-label="Dismiss install prompt"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 4L4 12M4 4l8 8" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
