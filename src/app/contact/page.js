'use client';
import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">İletişim</h1>
        <p className="text-lg text-gray-300 mb-6">
          Bana ulaşmak isterseniz aşağıdaki formu doldurun veya sosyal medya hesaplarımdan iletişime geçin!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Adınız"
            className="w-full p-3 bg-gray-800 rounded text-gray-300"
          />
          <input
            type="email"
            placeholder="E-posta"
            className="w-full p-3 bg-gray-800 rounded text-gray-300"
          />
          <textarea
            placeholder="Mesajınız"
            className="w-full p-3 bg-gray-800 rounded text-gray-300"
            rows="5"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
