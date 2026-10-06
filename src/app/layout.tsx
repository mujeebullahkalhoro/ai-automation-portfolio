import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { Container } from "@/components/ui";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
};

function HeaderFallback() {
  return (
    <header className="border-b border-border">
      <Container className="flex h-16 items-center">
        <span className="text-sm font-semibold tracking-tight">{site.name}</span>
      </Container>
    </header>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:inline-flex focus-visible:h-11 focus-visible:items-center focus-visible:rounded-md focus-visible:bg-foreground focus-visible:px-4 focus-visible:text-sm focus-visible:text-background"
        >
          Skip to content
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <div
          id="content"
          tabIndex={-1}
          className="flex flex-1 flex-col focus-visible:outline-none"
        >
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
