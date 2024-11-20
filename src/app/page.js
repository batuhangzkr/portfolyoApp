'use client';
import HamburgerMenu from "../components/HamburgerMenu";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen text-white">
      <HamburgerMenu />
      <div className="max-w-6xl mx-auto text-center p-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
          Merhaba, Ben Batuhan.
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Full-stack geliştirici, problem çözücü ve yaratıcı bir teknoloji tutkunu.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Hakkımda
          </a>
          <a href="/projects" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Projelerim
          </a>
        </div>
      </div>
    </div>
  );
}
