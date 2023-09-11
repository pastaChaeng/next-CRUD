import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Lists from '@/components/Lists'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next CRUD',
  description: 'This website is a simple example of a CRUD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className='max-w-3xl mx-auto p-4'>
        <NavBar/>
        <div className='mt-8'>{children}</div>
       </div>
       </body>
    </html>
  )
}
