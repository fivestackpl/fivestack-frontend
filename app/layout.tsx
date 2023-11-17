import type { Metadata } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'FiveStack.pl',
  description: 'Współpracując z FiveStack®️ możesz być pewny o wizerunek swojej firmy, z nami stworzysz najładniejszą strone lub aplikacje dla twojej firmy',
  themeColor: '#fb923c',
  openGraph: {
    images: [{url: "https://cdn.discordapp.com/attachments/1174457335150805022/1175122959074074834/nbg.png?ex=656a158a&is=6557a08a&hm=bdf0f4ad5612d9fbd555e7689d37eb7fa536be73fdd7d7997c846f9f96a2ed53&"}]
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pl" className='scroll-smooth'>
      <Head>
          <meta name='theme-color' content='#fb923c' />
      </Head>
      <body className='bg-blacks overflow-visible'>
      <div>
            <header>
                <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
                    <a href="/">
                        <img
                            src="./fivestack.webp" 
                            width={120} 
                            height={50}
                            alt="FiveStack"
                        />
                    </a>
                    <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
                        <li className="text-gray-200 hover:text-gray-300">
                            <a href="/">Strona Główna</a>
                        </li>
                        <li className="text-gray-200 hover:text-gray-300">
                            <a href="/#about">Nasze zalety</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        {children}

        <footer className='w-full pt-5 pb-5'>
            <p className='text-gray-600 text-center'> Stworzone z ❤️ przez <a href="https://github.com/fivestackpl" className='text-orange-500 hover:text-orange-600'>FiveStack</a> i jest dostępne za darmo na <a href="https://github.com/fivestackpl/fivestack-frontend" className='text-orange-500 hover:text-orange-600'>Github</a></p>
        </footer>
        </body>
    </html>
  )
}