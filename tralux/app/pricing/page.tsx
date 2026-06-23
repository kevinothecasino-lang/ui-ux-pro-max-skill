import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";
import { Stagger, StaggerItem } from "../_components/Stagger";
import { AmbientBlobs } from "../_components/AmbientBlobs";
import {
  Button,
  Container,
  Eyebrow,
  PageShell,
  SectionHeading,
} from "../_components/ui";
import { faqs, tiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent engagement tiers — Essential, Signature, and Monthly — for projects of every scale.",
};

export default function PricingPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <Container className="relative pt-40 pb-20 text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-gradient sm:text-6xl">
              Considered work, clearly priced.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Fixed-scope engagements with no surprises. Every tier includes our
              full standard of craft.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Tiers — card layout (skill UX: cards over wide tables) */}
      <section className="py-20">
        <Container>
          <Stagger className="grid items-stretch gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <StaggerItem key={t.name} className="h-full">
                <div
                  className={`glass flex h-full flex-col p-8 ${
                    t.featured
                      ? "border-line-strong bg-surface-strong ring-1 ring-white/15"
                      : ""
                  }`}
                >
                  {t.featured ? (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                      Most popular
                    </span>
                  ) : null}
                  <h2 className="font-serif text-2xl">{t.name}</h2>
                  <p className="mt-2 text-sm text-muted">{t.blurb}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    {t.contactOnly ? (
                      <span className="text-sm text-muted">Contact us for payment options</span>
                    ) : (
                      <>
                        <span className="font-serif text-4xl">{t.price}</span>
                        <span className="text-sm text-muted">{t.cadence}</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-7 flex-1 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="/contact"
                    variant={t.featured ? "primary" : "ghost"}
                    className="mt-8 w-full"
                  >
                    {t.contactOnly ? "Get in touch" : "Get started"}
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* FAQ — native disclosure for accessibility, no JS required */}
      <section className="border-t border-line py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium text-foreground marker:content-['']">
                    {f.q}
                    <span className="text-muted transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
