'use client';
import HamburgerMenu from "../components/HamburgerMenu";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      setProjects(data.projects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <HamburgerMenu />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-blue-400 mb-8">Projelerim</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
