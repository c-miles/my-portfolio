import React from "react";
import { projects } from "../../content/projects";

const Projects = () => (
  <section
    id="projects"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div className="text-slate-400 group/list">
      {projects.list.map((project, index) => (
        <div
          key={index}
          className={`group relative ${
            index < projects.list.length - 1 ? "mb-12" : ""
          } -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50`}
        >
          <h3 className="text-lg font-semibold text-slate-200">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400">{project.tech}</p>
          <p className="mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
