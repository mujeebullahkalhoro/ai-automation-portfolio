import Link from "next/link";
import { Container } from "@/components/ui";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-8 py-10 sm:py-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold tracking-tight">{site.name}</p>
          <p className="text-sm text-muted">{site.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
