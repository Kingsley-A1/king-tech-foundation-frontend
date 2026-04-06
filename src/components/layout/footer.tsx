import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { NewsletterForm } from "./newsletter-form";

const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Reviews", href: "/reviews" },
  ],
  resources: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-ktf-navy to-ktf-obsidian text-ktf-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/icons/ktf-logo.png"
                alt="KTF logo"
                width={40}
                height={40}
                className="rounded-xl object-contain"
              />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-ktf-blue">KING TECH</span>{" "}
                <span className="text-white">FOUNDATION</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ktf-gray-500 max-w-xs">
              For Honour and For Excellence, Engineering the Solutions of this,
              and the Next Generation.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ktf-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ktf-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-ktf-gray-500">
              Get the latest from KTF — directly in your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ktf-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-ktf-gray-600">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-ktf-gray-600 transition-colors hover:text-ktf-gray-400"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-ktf-gray-600 transition-colors hover:text-ktf-gray-400"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
