import React from "react";

const Projects = () => (
  <section
    id="projects"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Projects
      </h2>
    </div>
    <div className="text-slate-400 group/list">
      <div className="group relative mb-12 -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <h3 className="text-lg font-semibold text-slate-200">
          E-commerce Platform
        </h3>
        <p className="text-sm text-slate-400">React • Node.js • MongoDB</p>
        <p className="mt-2">
          A full-featured e-commerce platform with real-time inventory
          management, payment processing, and analytics dashboard.
        </p>
      </div>
      <div className="group relative mb-12 -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <h3 className="text-lg font-semibold text-slate-200">
          Task Management App
        </h3>
        <p className="text-sm text-slate-400">
          Vue.js • Firebase • Tailwind CSS
        </p>
        <p className="mt-2">
          A collaborative task management application with real-time updates,
          team workspaces, and progress tracking.
        </p>
      </div>
      <div className="group relative -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <h3 className="text-lg font-semibold text-slate-200">
          Weather Dashboard
        </h3>
        <p className="text-sm text-slate-400">
          Next.js • OpenWeather API • Chart.js
        </p>
        <p className="mt-2">
          A weather dashboard providing detailed forecasts, historical data
          visualization, and location-based alerts.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
