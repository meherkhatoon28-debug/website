"use client";
import React, { useState } from 'react';
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "./projectData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-700 px-4 py-4" style={{ backgroundImage: "url('/bluey.jpeg')" }}>
      <div className="flex flex-row gap-4 items-start">
        <Button href="/">Home</Button>
        <Button href="/experience">Experience</Button>
        <Button href="/leadership">Leadership and Awards</Button>
      </div>

      <div className="text-center mt-8 py-5">
        <h1 className="text-5xl font-bold text-white">My Projects</h1>
        <p className="text-slate-300 mt-2 italic">here's some of my recent project work</p>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-start px-5 py-10">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

/** * HELPER COMPONENT: 
 */
function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >

        <div className="p-8 pb-2 flex justify-between items-start">
          <div>
            <span className="text-[10px] font-black px-2 py-1 rounded bg-slate-100 text-slate-500 uppercase tracking-tighter">Project Overview</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-1">{project.title}</h2>
          </div>
          <button onClick={onClose} className="text-4xl text-gray-300 hover:text-black transition-all">×</button>
        </div>

        <div className="px-8 py-4">
          <div className="bg-slate-100 rounded-3xl overflow-hidden aspect-video flex items-center justify-center border-4 border-slate-50 shadow-inner">
            <img
              src={project.images && project.images.length > 0 ? project.images[activeImg] : "/bluey20.png"}
              className="h-full w-full object-contain"
              alt="project preview"
            />
          </div>

          {project.images && project.images.length > 1 && (
            <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-4 transition-all 
                    ${activeImg === index ? 'border-blue-300 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-8 pb-12 mt-2">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line font-medium">
              {project.details}
            </p>
          </div>

          <div className="mt-6 flex gap-2 flex-wrap">
            {project.tags?.map(tag => (
              <span key={tag} className="bg-blue-300 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase italic">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}