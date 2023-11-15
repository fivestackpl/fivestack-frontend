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

  const footerNavs = [
    {
        label: "Company",
        items: [
            {
                href: 'javascript:void()',
                name: 'Partners'
            },
            {
                href: 'javascript:void()',
                name: 'Blog'
            },
            {
                href: 'javascript:void()',
                name: 'Team'
            },
            {
                href: 'javascript:void()',
                name: 'Careers'
            },
        ],
    },
    {
        label: "Resources",
        items: [
            {
                href: 'javascript:void()',
                name: 'contact'
            },
            {
                href: 'javascript:void()',
                name: 'Support'
            },
            {
                href: 'javascript:void()',
                name: 'Docs'
            },
            {
                href: 'javascript:void()',
                name: 'Pricing'
            },
        ],
    },
    {
        label: "About",
        items: [
            {
                href: 'javascript:void()',
                name: 'Terms'
            },
            {
                href: 'javascript:void()',
                name: 'License'
            },
            {
                href: 'javascript:void()',
                name: 'Privacy'
            },
            {
                href: 'javascript:void()',
                name: 'About US'
            },
        ]
    }
]

  return (
    <html lang="pl">
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
                            <a href="/login" className="flex items-center text-gray-200 hover:text-gray-300">
                                Zaloguj się
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        {children}
        </body>
    </html>
  )
}