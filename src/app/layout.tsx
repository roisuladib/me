import '@/styles/globals.css';

import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Navbar } from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';

import { Providers } from './providers';
import type { Children } from '@/types';

export const metadata: Metadata = {
   title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
   },
   description: siteConfig.description,
   themeColor: [
      // { media: '(prefers-color-scheme: light)', color: 'white' },
      // { media: '(prefers-color-scheme: dark)', color: 'black' },
   ],
   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
   },
};

const ProgressBar = dynamic(() => import('@/components/progress-bar'));

export default function RootLayout({ children }: Children) {
   return (
      <html
         lang="en"
         suppressHydrationWarning>
         <head />
         <body
            className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
            <ProgressBar />
            <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
               <div className="relative flex h-screen flex-col">
                  <Navbar />
                  <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
                     {children}
                  </main>
                  <footer className="flex w-full items-center justify-center py-3">
                     <Link
                        isExternal
                        className="flex items-center gap-1 text-current"
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage">
                        <span className="text-default-600">Powered by</span>
                        <p className="text-primary">NextUI</p>
                     </Link>
                  </footer>
               </div>
            </Providers>
         </body>
      </html>
   );
}
