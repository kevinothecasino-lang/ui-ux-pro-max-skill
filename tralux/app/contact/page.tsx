import type { Metadata } from "next";
import { Reveal } from "../_components/Reveal";
import { AmbientBlobs } from "../_components/AmbientBlobs";
import { Container, Eyebrow, PageShell } from "../_components/ui";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Tralux. Tell us what you're building and we'll be in touch within two business days.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <AmbientBlobs />
        <Container className="relative grid gap-12 pt-40 pb-28 md:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-md font-serif text-5xl leading-[1.05] text-gradient sm:text-6xl">
                Let&apos;s start something.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Tell us about your project. We take on a small number of
                engagements each quarter, so the more you share, the better.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 space-y-2 text-sm">
                <p className="text-muted">Prefer email?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal from="left" delay={0.15}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
