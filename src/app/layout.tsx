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

const siteConfig = {
   title: 'Roisul Adib',
   description: 'Roisul Adib My portfolio as software engineer',
   url: 'https://roisuladib.vercel.app',
 };

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`
   },
   keywords: 'kokometric',
   description: siteConfig.description,
   robots: { index: true, follow: true },
   icons: {
      icon: '/favicon/favicon.ico',
      shortcut: '/favicon/favicon-16x16.png',
      apple: '/favicon/apple-touch-icon.png',
    },
   manifest: '/favicon/site.webmanifest',
   openGraph: {
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [`${siteConfig.url}/images/og.jpg`],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/images/og.jpg`],
    },
};

const LazyHeader = dynamic(() => import('../components/Header'));

export default function RootLayout({ children }: PropsWithChildren) {
   return (
      <html
         lang="en"
         className="dark"
         suppressHydrationWarning>
         <body
            className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
            <LazyHeader />
            {children}
         </body>
      </html>
   );
}
