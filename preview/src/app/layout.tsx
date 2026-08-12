import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import { NOINDEX } from '@/lib/seo';
import './globals.css';

/**
 * Self-hosted at build time by next/font — no runtime request to Google, no
 * layout shift, and the preview still renders correctly behind a restrictive
 * corporate network, which is where half of these links get opened.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

/** Editorial serif — only the Atelier variant uses it, but self-hosting both at
 *  build time costs nothing at runtime and keeps one layout for all variants. */
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Website previews — Epoches',
  description: 'Personalised website previews built for California driving schools.',
  robots: NOINDEX,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
