import { Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import { ContactForm } from "@/components/marketing/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — King Tech Foundation",
  description:
    "Get in touch with King Tech Foundation. Tell us about your project and we'll respond within one business day.",
};

const contactDetails = [
  {
    icon: "✉",
    label: "Email",
    value: "hello@kingtechfoundation.com",
    href: "mailto:hello@kingtechfoundation.com",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "kingtechfoundation.com",
    href: "https://kingtechfoundation.com",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="bg-ktf-navy py-24 sm:py-32">
        <Container size="lg" className="text-center">
          <Badge
            variant="outline"
            className="border-ktf-blue/40 text-ktf-blue bg-ktf-blue/10 mb-6"
          >
            Get in Touch
          </Badge>
          <h1 className="text-h1 font-bold leading-heading text-ktf-white max-w-3xl mx-auto mb-4">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="text-body-lg text-ktf-gray-400 leading-body max-w-2xl mx-auto">
            Whether you have a clear brief or an early idea, we&apos;re here to
            listen, advise, and help you build something exceptional.
          </p>
        </Container>
      </section>

      {/* ── Contact Split ─────────────────────────────────────── */}
      <section className="bg-ktf-white py-24 sm:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
            {/* Form column */}
            <div>
              <h2 className="text-h3 font-bold leading-heading text-ktf-navy mb-2">
                Send Us a Message
              </h2>
              <p className="text-body text-ktf-gray-600 leading-body mb-8">
                Fill out the form below and a member of our team will respond
                within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Info column */}
            <aside className="flex flex-col gap-8">
              {/* Contact details */}
              <div className="rounded-2xl border border-ktf-gray-200 bg-ktf-surface p-8">
                <h3 className="text-body font-semibold text-ktf-navy uppercase tracking-wide text-overline mb-6">
                  Contact Information
                </h3>
                <ul className="flex flex-col gap-5">
                  {contactDetails.map((detail) => (
                    <li key={detail.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ktf-blue/10 text-body">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-caption font-semibold uppercase tracking-widest text-ktf-gray-500 mb-0.5">
                          {detail.label}
                        </p>
                        <a
                          href={detail.href}
                          className="text-body-sm text-ktf-navy hover:text-ktf-blue transition-colors duration-150"
                        >
                          {detail.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border border-ktf-gray-200 bg-ktf-surface p-8">
                <h3 className="text-body font-semibold text-ktf-navy uppercase tracking-wide text-overline mb-4">
                  What to Expect
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    { step: "01", label: "You send the form" },
                    {
                      step: "02",
                      label: "We review & respond within 1 business day",
                    },
                    { step: "03", label: "We schedule a discovery call" },
                    { step: "04", label: "We agree on scope & begin" },
                  ].map((item) => (
                    <li key={item.step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ktf-blue/10 text-caption font-bold text-ktf-blue">
                        {item.step}
                      </span>
                      <span className="text-body-sm text-ktf-gray-700">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promise */}
              <div className="rounded-2xl border border-ktf-blue/20 bg-ktf-blue/5 p-6">
                <p className="text-body-sm text-ktf-gray-700 leading-body">
                  <strong className="text-ktf-navy">Our promise:</strong> We
                  respond to every message honestly. If we&apos;re not the right
                  fit for your project, we&apos;ll tell you — and we may even
                  know who is.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
