'use client';
import HamburgerMenu from "../components/HamburgerMenu";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-gray-900 min-h-screen text-white">
      <HamburgerMenu />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">Hakkımda</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Merhaba! Ben Batuhan, modern web uygulamaları geliştirme ve kullanıcı dostu arayüzler tasarlama konusunda uzmanlaşmış bir geliştiriciyim.
        </p>
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Beceriler</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>React, Next.js, Tailwind CSS</li>
          <li>Node.js, Express.js</li>
          <li>MongoDB, PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}
