import Image from 'next/image'

export default function Home() {
  return (
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
                        <a href="" className="px-7 py-3 w-full bg-gray-700 hover:bg-gray-800 text-gray-200 text-center rounded-md block sm:w-auto">
                            Zobacz więcej
                        </a>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="/head.svg" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
  )
}
