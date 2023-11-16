import type { Metadata } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="pl" className='scroll-smooth'>
      <body className='bg-blacks overflow-visible'>
      <div>
            <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                    <a href="/">
                        <img
                            src="./fivestack.png" 
                            width={120} 
                            height={50}
                            alt="FiveStack"
                        />
                    </a>
                    <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                        <li className="text-gray-200 hover:text-gray-300">
                            <a href="/">Strona Główna</a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center text-gray-200 hover:text-gray-300">
                                
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        {children}

        <footer className='w-full pt-5 pb-5'>
            <p className='text-gray-600 text-center'> Stworzone z ❤️ przez <a href="https://github.com/fivestackpl" className='text-orange-500 hover:text-orange-600'>FiveStack</a> i jest dostępne za darmo na <a href="https://github.com/fivestackpl/fivestack-frontend" className='text-orange-500 hover:text-orange-600'>Githubie</a></p>
        </footer>
        </body>
    </html>
  )
}