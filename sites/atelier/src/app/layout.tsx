import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display-loaded', display: 'swap' });
const sans = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans-loaded', display: 'swap' });

export const metadata: Metadata = {
  title: 'Driving School Enrolment System',
  description: 'Private DMV-licensed driving instruction. One instructor, start to finish.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body
        style={{
          ['--font-display' as string]: 'var(--font-display-loaded), Georgia, serif',
          ['--font-sans' as string]: 'var(--font-sans-loaded), ui-sans-serif, system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
