import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";
import { Stagger, StaggerItem } from "../_components/Stagger";
import { AmbientBlobs } from "../_components/AmbientBlobs";
import {
  Button,
  Container,
  Eyebrow,
  GlassCard,
  PageShell,
  SectionHeading,
} from "../_components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tralux is a design and engineering studio built around craft, restraint, and measurable outcomes.",
};

const values = [
  {
    title: "Restraint",
    body: "We remove until only the essential remains. Luxury is what's left when nothing is arbitrary.",
  },
  {
    title: "Craft",
    body: "Every pixel, easing curve, and line of code is considered. Details are the work, not the polish.",
  },
  {
    title: "Outcomes",
    body: "Beauty that performs. We measure success in clarity, speed, and the results our partners ship.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <Container className="relative pt-40 pb-24">
          <Reveal>
            <Eyebrow>About Tralux</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-gradient sm:text-6xl">
              A small studio with an obsessive standard.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              We&apos;re a tight team of designers and engineers who believe the
              best digital work feels effortless — because the effort is hidden
              in the craft.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Built on a simple belief" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                Tralux began with a frustration: most digital products look the
                same and feel forgettable. We set out to prove that restraint and
                rigor could produce work that&apos;s both quietly elegant and
                genuinely effective.
              </p>
              <p>
                Today we partner with a small number of brands each quarter,
                giving every engagement the attention it deserves — from the first
                line of strategy to the last frame of motion.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we value"
              title="Three principles, applied everywhere"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <GlassCard className="h-full">
                  <h3 className="font-serif text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <Container>
          <Reveal>
            <div className="glass p-12 text-center md:p-16">
              <h2 className="font-serif text-3xl sm:text-4xl">
                Want to work together?
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href="/contact">Start a project</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
