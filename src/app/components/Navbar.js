import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          Portfölyo
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-blue-400">
            Ana Sayfa
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            Hakkımda
          </Link>
          <Link href="/projects" className="hover:text-blue-400">
            Projeler
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
}
