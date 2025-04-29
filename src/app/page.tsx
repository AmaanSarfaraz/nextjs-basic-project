import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans bg-white">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Next JS</h1>
            <nav className="space-x-4">
              <Link href="/home" className="hover:text-gray-200">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-semibold mt-20 text-gray-800">
            Welcome
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            similique eligendi sequi nam! Nobis beatae accusantium suscipit
            iusto ex exercitationem laboriosam repellat veniam tenetur fuga
            dolores, iste pariatur sint doloremque!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </main>

        <footer className="bg-gray-800 text-white py-4 mt-10">
          <div className="container mx-auto px-4 text-center">
            &copy; {new Date().getFullYear()} Next. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
