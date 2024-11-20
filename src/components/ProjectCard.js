import Link from "next/link";

export default function ProjectCard({ id, title, description, image }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between">
      {/* Proje Görseli */}
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />

      {/* Proje Başlık ve Açıklama */}
      <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
      <p className="text-sm text-gray-300 mb-4">{description}</p>

      {/* Detaylar Butonu */}
      <Link
        href={`/projects/${id}`}
        className="text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all"
      >
        Detayları Gör
      </Link>
    </div>
  );
}
