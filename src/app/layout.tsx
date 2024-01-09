import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '#/utils';

import './globals.css';

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
});

export const metadata: Metadata = {
   title: 'Roisul Adib',
   description: 'My portfolio as software engineer',
};

const LazyHeader = dynamic(() => import('../components/Header'));

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html
         lang="en"
         suppressHydrationWarning>
         <body
            className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
            <LazyHeader />
            {children}
         </body>
      </html>
   );
}
