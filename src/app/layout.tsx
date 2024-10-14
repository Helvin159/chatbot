import '../css/output.css'
import '../css/custom-style.css'

import type { Metadata } from 'next'
import Nav from './_components/Nav'
import Link from 'next/link'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  title: 'Practice Chat Bot',
  description: 'Generated by Helvin Rymer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className='min-h-dvh max-w-full'>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
