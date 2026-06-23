import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg-base">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-2xl">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm text-foreground underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
