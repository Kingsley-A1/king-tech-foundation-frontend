"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-ktf-gray-200 bg-ktf-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-ktf-white/60">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-ktf-obsidian transition-opacity hover:opacity-80"
          onClick={closeMobile}
        >
          <span className="text-ktf-blue">KING</span>
          <span className="text-ktf-blue">TECH</span>
          <span className="text-ktf-obsidian">FOUNDATION</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                    isActive
                      ? "text-ktf-blue"
                      : "text-ktf-gray-700 hover:text-ktf-obsidian hover:bg-ktf-surface",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-x-2 -bottom-[1.0625rem] h-0.5 bg-ktf-blue rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-ktf-blue px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-ktf-blue-deep active:bg-ktf-blue-pressed"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMobile}
          className="lg:hidden relative z-[201] flex h-10 w-10 items-center justify-center rounded-lg text-ktf-gray-700 transition-colors hover:bg-ktf-surface"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-full bg-current origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-[2px] w-full bg-current"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-full bg-current origin-center"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && !isDesktop && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[199] bg-ktf-obsidian/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            {/* Panel */}
            <motion.div
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-[200] w-full max-w-sm bg-ktf-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col px-6 pt-24 pb-8">
                <ul className="flex flex-col gap-1" role="list">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className={cn(
                            "flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors",
                            isActive
                              ? "bg-ktf-blue/8 text-ktf-blue"
                              : "text-ktf-gray-800 hover:bg-ktf-surface hover:text-ktf-obsidian",
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-6 border-t border-ktf-gray-200">
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-ktf-blue text-base font-medium text-white transition-colors duration-150 hover:bg-ktf-blue-deep"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
