import { Button, Badge } from "@/components/ui";
import { Container } from "@/components/layout";
import { PARTNERS, PARTNERSHIP_TIERS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships — King Tech Foundation",
  description:
    "Partner with King Tech Foundation. Three tiers of collaboration — strategic, technology, and community — built on mutual value.",
};

export default function PartnershipsPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="bg-ktf-navy py-24 sm:py-32">
        <Container size="lg" className="text-center">
          <Badge
            variant="outline"
            className="border-ktf-blue/40 text-ktf-blue bg-ktf-blue/10 mb-6"
          >
            Partnerships
          </Badge>
          <h1 className="text-h1 font-bold leading-heading text-ktf-white max-w-3xl mx-auto mb-4">
            Build the Ecosystem Together
          </h1>
          <p className="text-body-lg text-ktf-gray-400 leading-body max-w-2xl mx-auto">
            We believe in the power of strong partnerships. Together, we can
            create more value for our clients and push the boundaries of
            what&apos;s possible in technology.
          </p>
        </Container>
      </section>

      {/* ── Current Partners ──────────────────────────────────── */}
      <section className="bg-ktf-white py-20">
        <Container size="lg">
          <div className="text-center mb-12">
            <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
              Current Partners
            </p>
            <h2 className="text-h3 font-bold leading-heading text-ktf-navy">
              Those Who Share Our Standards
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-ktf-gray-200 bg-ktf-surface p-6 text-center"
              >
                <span className="text-h5 font-bold text-ktf-navy">
                  {partner.name}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-caption font-medium ${
                    partner.tier === "strategic"
                      ? "bg-ktf-blue/10 text-ktf-blue"
                      : partner.tier === "technology"
                        ? "bg-ktf-success/10 text-ktf-success"
                        : "bg-ktf-gray-200 text-ktf-gray-600"
                  }`}
                >
                  {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Partnership Tiers ─────────────────────────────────── */}
      <section className="bg-ktf-surface py-24 sm:py-32">
        <Container size="lg">
          <div className="text-center mb-16">
            <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
              Partnership Tiers
            </p>
            <h2 className="text-h2 font-bold leading-heading text-ktf-navy mb-4">
              Find Your Level of Collaboration
            </h2>
            <p className="text-body-lg text-ktf-gray-600 max-w-xl mx-auto">
              Each tier is designed to deliver meaningful mutual value — not
              just a logo placement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PARTNERSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-ktf-blue bg-ktf-navy text-ktf-white shadow-xl"
                    : "border-ktf-gray-200 bg-ktf-white shadow-card"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-ktf-blue px-4 py-1 text-caption font-semibold text-ktf-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-overline font-semibold uppercase tracking-widest mb-2 ${
                      tier.highlighted ? "text-ktf-blue" : "text-ktf-blue"
                    }`}
                  >
                    {tier.name} Partner
                  </p>
                  <p
                    className={`text-body-sm leading-body ${
                      tier.highlighted
                        ? "text-ktf-gray-400"
                        : "text-ktf-gray-600"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-caption ${
                          tier.highlighted
                            ? "bg-ktf-blue/30 text-ktf-blue"
                            : "bg-ktf-success/15 text-ktf-success"
                        }`}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span
                        className={`text-body-sm leading-body ${
                          tier.highlighted
                            ? "text-ktf-gray-300"
                            : "text-ktf-gray-700"
                        }`}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "outline"}
                  className={
                    !tier.highlighted
                      ? "border-ktf-gray-300 text-ktf-navy hover:bg-ktf-surface"
                      : ""
                  }
                >
                  Apply for {tier.name} Tier
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Partner ──────────────────────────────────────── */}
      <section className="bg-ktf-white py-24">
        <Container size="md" className="text-center">
          <p className="text-overline font-semibold uppercase tracking-widest text-ktf-blue mb-3">
            Why Partner with KTF
          </p>
          <h2 className="text-h2 font-bold leading-heading text-ktf-navy mb-6">
            More than a Logo on a Page
          </h2>
          <p className="text-body-lg text-ktf-gray-600 leading-body max-w-2xl mx-auto mb-4">
            We take partnerships seriously. When your brand is associated with
            ours, we make certain you benefit from that association in
            measurable ways — through co-created content, joint initiatives, and
            genuine promotion.
          </p>
          <p className="text-body text-ktf-gray-600 leading-body max-w-2xl mx-auto mb-10">
            If you believe in what we are building and want to grow alongside a
            principled engineering practice, we would love to talk.
          </p>
          <Button size="lg" href="/contact">
            Enquire About Partnering
          </Button>
        </Container>
      </section>
    </>
  );
}
