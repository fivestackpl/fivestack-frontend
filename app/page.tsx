import Image from 'next/image'

export default function Home() {

  const features = [
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>,
        title: "Wydajność",
        desc: "Nasze aplikacje to gwarancja błyskawicznej prędkości. Optymalizacja kodu i nowoczesne technologie eliminują opóźnienia, zapewniając natychmiastowe doświadczenia klientom."
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>,
        title: "Bezpieczeństwo",
        desc: "Nasza infrastruktura jest wyposażona w wielowarstwowe zabezpieczenia, obejmujące zarówno podstawowe, jak i kompleksowe mechanizmy, aby skutecznie uniemożliwić wszelkie próby atakowania klientów."
    },
    {
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>,
        title: "Skalowalność",
        desc: "Nasze oprogramowanie jest zoptymalizowane pod kątem łatwej skalowalności, umożliwiając szybkie dostosowywanie się do rosnących potrzeb."
    },
]

  return (
    <main>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                        Najlepsze rozwiązanie dla
                         <span className="text-orange-400"> twojej firmy</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Współpracując z FiveStack®️ możesz być pewny o wizerunek swojej firmy, z nami stworzysz najładniejszą strone lub aplikacje dla twojej firmy
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="" className="px-7 py-3 w-full bg-orange-500 hover:bg-orange-600 text-gray-200 text-center rounded-md shadow-md block sm:w-auto">
                            Zacznij teraz
                        </a>
                        <a href="" className="px-7 py-3 w-full bg-blacke hover:bg-blackd text-gray-200 text-center rounded-md block sm:w-auto">
                            Zobacz więcej
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="./head.svg" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
    </section>
    <section className="relative py-28 mt-28">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Zrób z nami <div className='text-orange-400 font-bold'> więcej</div>
                    </h3>
                    <p className="mt-3">
                        Nasze innowacyjne rozwiązania ułatwiają Twojej firmie ekspansję na światowe rynki, gwarantując elastyczność i skuteczność w dostosowywaniu się do różnych wymagań biznesowych.
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-blackd text-orange-400 rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px] mt-12" style={{ background: "linear-gradient(152.92deg, rgba(251, 146, 60, 0.2) 4.54%, rgba(251, 146, 60, 0.26) 34.2%, rgba(251, 146, 60, 0.1) 77.55%)" }}></div>
        </section>
    </main>
  )
}
