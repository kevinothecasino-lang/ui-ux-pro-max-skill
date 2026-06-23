import { AmbientBlobs } from "./_components/AmbientBlobs";
import { KineticHeadline } from "./_components/KineticHeadline";
import { Reveal } from "./_components/Reveal";
import { Stagger, StaggerItem } from "./_components/Stagger";
import {
  Button,
  Container,
  Eyebrow,
  GlassCard,
  PageShell,
  SectionHeading,
} from "./_components/ui";
import { features, stats } from "@/lib/content";

export default function Home() {
  return (
    <PageShell>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <AmbientBlobs />
        <Container className="relative pt-32 pb-20">
          <Reveal from="up">
            <Eyebrow>Design & Engineering Studio</Eyebrow>
          </Reveal>

          <KineticHeadline
            text="Luxury, engineered for the modern web."
            className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-gradient sm:text-6xl md:text-7xl"
          />

          <Reveal from="up" delay={0.3}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Tralux crafts refined digital products — brand, interface, and
              motion in perfect tension — for ambitious teams who care about
              every detail.
            </p>
          </Reveal>

          <Reveal from="up" delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact">Start a project</Button>
              <Button href="/services" variant="ghost">
                Explore services
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ──────────────────── Value proposition ──────────────────── */}
      <section className="relative border-t border-line py-24">
        <Container>
          <Reveal>
            <p className="max-w-4xl font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
              We build the few things that matter, exceptionally well — sites and
              systems that feel inevitable, and quietly outperform.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────── Feature grid ─────────────────────── */}
      <section className="relative py-24">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="A studio built for craft"
            intro="Six disciplines, one standard. Each engagement draws on whichever the work demands."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.kicker}>
                <GlassCard className="h-full">
                  <span className="font-serif text-sm text-muted">{f.kicker}</span>
                  <h3 className="mt-4 font-serif text-2xl">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ───────────────────────── Stats ───────────────────────── */}
      <section className="relative border-y border-line bg-bg-base py-20">
        <Container>
          <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ─────────────────────── CTA band ─────────────────────── */}
      <section className="relative py-28">
        <Container>
          <Reveal>
            <div className="glass relative overflow-hidden p-12 text-center md:p-20">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Let&apos;s make something worth remembering.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                Tell us about your project. We take on a small number of
                engagements each quarter.
              </p>
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
