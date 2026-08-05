import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans-loaded',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Driving School Enrolment System',
  description: 'DMV-licensed driving instruction. Teen and adult behind-the-wheel lessons.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body style={{ ['--font-sans' as string]: 'var(--font-sans-loaded), ui-sans-serif, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
