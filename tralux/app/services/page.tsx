import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";
import { AmbientBlobs } from "../_components/AmbientBlobs";
import {
  Button,
  Container,
  Eyebrow,
  PageShell,
  SectionHeading,
} from "../_components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand & identity, product & web, and motion & story — the disciplines Tralux brings to every engagement.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <Container className="relative pt-40 pb-24">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-gradient sm:text-6xl">
              Everything a brand needs to feel inevitable.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Three core disciplines, woven together. We scope each engagement to
              the outcome you&apos;re after — nothing more, nothing missing.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Alternating service rows */}
      <section className="py-12">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="border-b border-line py-20 last:border-b-0"
          >
            <Container className="grid items-center gap-10 md:grid-cols-2">
              <Reveal from={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="font-serif text-sm text-muted">
                  0{i + 1}
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{s.name}</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {s.body}
                </p>
              </Reveal>

              <Reveal from={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "md:order-1" : ""}>
                <ul className="glass divide-y divide-line p-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3 px-5 py-4 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Container>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="bg-bg-base py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A calm, deliberate process"
              intro="Four phases, fully transparent. You always know where the work stands and what's next."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Discover", "Design", "Build", "Ship"].map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="glass h-full p-6">
                  <span className="font-serif text-sm text-muted">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl">{step}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28">
        <Container>
          <Reveal>
            <div className="glass p-12 text-center md:p-16">
              <h2 className="font-serif text-3xl sm:text-4xl">
                See the right fit for your project.
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/pricing">View pricing</Button>
                <Button href="/contact" variant="ghost">
                  Start a project
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
