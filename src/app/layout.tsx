import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Vedant Ghatole - Seed to Tree',
  description: 'The cinematic portfolio and journey of Vedant Ghatole.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0f1712]">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
