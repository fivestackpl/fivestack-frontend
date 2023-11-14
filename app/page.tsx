import Image from 'next/image'

export default function Home() {
  return (
    <div className="header">
      <h1 className="text-center text-5xl font-extrabold ">Lorem Ipsum</h1>
      <div className="text-center">
        <p className="text-xl font-bold">Lorem Ipsum Donor cos tam</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Image src="/person1.jpg" alt="Person 1" width={200} height={200} className="rounded-full mb-2" />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/person2.jpg" alt="Person 2" width={200} height={200} className="rounded-full mb-2" />
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/person3.jpg" alt="Person 3" width={200} height={200} className="rounded-full mb-2" />
            <h3 className="text-xl font-bold">Bob Smith</h3>
            <p className="text-gray-500">COO</p>
          </div>
        </div>
        <form className="mt-8 bg-orange-500 text-black p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-xl font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-400 p-2 rounded-lg" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-xl font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-400 p-2 rounded-lg" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-xl font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="border border-gray-400 p-2 rounded-lg"></textarea>
          </div>
          <button type="submit" className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">Send</button>
        </form>
      </div>
    </div>
  )
}
