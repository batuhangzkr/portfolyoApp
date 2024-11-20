'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
  const { id } = useParams(); // Dinamik rota parametresini al
  const [project, setProject] = useState(null); // Proje bilgisi state

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/projects.json"); // JSON dosyasından veri çek
      const data = await res.json();
      const selectedProject = data.projects.find(
        (project) => project.id === parseInt(id)
      );
      setProject(selectedProject); // İlgili projeyi state'e ata
    };

    fetchProjects();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Proje bulunamadı!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-400 mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-4">{project.details}</p>
        <p className="text-gray-400 mb-4">
          <strong>Kullanılan Teknolojiler:</strong> {project.technologies.join(", ")}
        </p>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-60 object-cover"
        />
      </div>
    </div>
  );
}
