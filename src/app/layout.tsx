import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnimatedCursor } from '$/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Roisul Adib',
  description: 'This is a my resume',
  applicationName: 'Muhammad Roisul Adib',
  generator: 'Next.js',
  keywords: ['react, next, resume'],
  referrer: 'origin',
  authors: {
      name: 'Muhammad Roisul Adib',
      url: 'https://roisuladib.vercel.app'
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
         {children}
         <AnimatedCursor />
      </body>
    </html>
  )
}
