'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // Menü açık/kapalı durumu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Menü durumunu değiştir
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🌟 Portfölyo
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>

        {/* Menü */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-gray-800 md:static md:block md:bg-transparent md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              >
                Hakkımda
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              >
                Projeler
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
