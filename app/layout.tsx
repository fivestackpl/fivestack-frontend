import type { Metadata } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FiveStack.pl',
  description: 'Pozwól nam wszystko wyszlifować',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <nav className="bg-ttransparent">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 w-max flex items-center">
            <div className='relative flex items-center justify-between'>

            </div>
            <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <ul className="decoration-0 flex gap-3">
                        <li className="font-semibold hover:text-gray-300"><a href="/panel"> Panel Klienta </a></li>
                        <li className="font-semibold hover:text-gray-300"><a href="/panel"> Kontakt </a></li>
                        <li className="font-semibold hover:text-gray-300"><a href="/panel"> Zespół </a></li>
                        <li className="font-semibold hover:text-gray-300"><a href="/panel"> Portfolio </a></li>
                    </ul>
                </div>
            </div>
          </div>

        </nav>
        {children}
        </body>
    </html>
  )
}