import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/app/provider'

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Twitter Clone built with Next.js'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
