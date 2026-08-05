import type { Metadata } from 'next';
import { Outfit, Work_Sans } from 'next/font/google';
import './globals.css';

const display = Outfit({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-display-loaded', display: 'swap' });
const sans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans-loaded', display: 'swap' });

export const metadata: Metadata = {
  title: 'Driving lessons for the road ahead',
  description: 'Teen, adult, and road-test driving lessons with a clear next step by phone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body
        style={{
          ['--font-display' as string]: 'var(--font-display-loaded), ui-sans-serif, system-ui, sans-serif',
          ['--font-sans' as string]: 'var(--font-sans-loaded), ui-sans-serif, system-ui, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
