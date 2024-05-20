import '@/styles/globals.css';

import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { Navbar } from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import type { Children } from '@/types';

import { Providers } from './providers';

export const metadata: Metadata = {
   metadataBase: new URL(siteConfig.url),
   title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
   },
   keywords: [
      'kokometric',
      'roisuladib',
      'adib',
      'amik',
      'amikjtc',
      'amikjtcsemarang',
      'typescript enthusiastically',
      'frontend developer',
      'frontend engineer',
      'backend engineer',
      'backend developer',
      'backend engineer',
   ],
   description: siteConfig.description,
   robots: { index: true, follow: true },
   icons: [
      {
         rel: 'apple-touch-ico',
         url: '/favicon/apple-touch-icon.png',
         type: 'image/png',
         sizes: '180x180',
      },
      {
         rel: 'icon',
         url: '/favicon/favicon-32x32.png',
         type: 'image/png',
         sizes: '32x32',
      },
      {
         rel: 'icon',
         url: '/favicon/favicon-16x16.png',
         type: 'image/png',
         sizes: '16x16',
      },
   ],
   manifest: '/favicon/site.webmanifest',
   openGraph: {
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [`${siteConfig.url}/images/og.jpg`],
      type: 'website',
      locale: 'en_US',
   },
   twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/images/og.jpg`],
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
