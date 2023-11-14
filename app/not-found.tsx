import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="header">
            <h1 className="text-center text-5xl font-extrabold">Nie znalziono</h1>
            <p className="text-center text-xl font-bold">Adres podanej witryny nie został odnaleziony</p>
            <Link className="text-center hover:text-gray-300" href="/"> <a> Powrót do strony glównej </a> </Link>
        </div>
    )
}
