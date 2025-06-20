import React from "react";
import { projects } from "../../content/projects";

const Projects = () => (
  <section
    id="projects"
    className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
      Projects
    </h2>
    <div className="text-slate-400">
      <ul className="group/list">
        {projects.list.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group block text-slate-400">
              <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 -ml-4 rounded-lg border border-transparent py-5 px-4 transition-colors group-hover:border-slate-700/50 group-hover:bg-slate-800/50 lg:group-hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="z-10 sm:col-span-8">
                  <h3 className="font-medium leading-snug text-slate-200">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>

                  {project.technologies && (
                    <ul
                      className="mt-2 mb-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {project.technologies.map((tech, i) => (
                        <li key={i} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {tech}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
