import React from "react";

const Experience = () => (
  <section
    id="experience"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
    </div>
    <div className="text-slate-400 group/list">
      <div className="group relative mb-12 -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <h3 className="text-lg font-semibold text-slate-200">
          Senior Full Stack Developer
        </h3>
        <p className="text-sm text-slate-400">TechCorp Inc. • 2021 - Present</p>
        <ul className="mt-4 list-disc pl-4">
          <li>Led the development of a scalable microservices architecture</li>
          <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
          <li>Mentored junior developers and conducted code reviews</li>
        </ul>
      </div>
      <div className="group relative mb-12 -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <h3 className="text-lg font-semibold text-slate-200">
          Frontend Developer
        </h3>
        <p className="text-sm text-slate-400">
          WebSolutions Ltd. • 2019 - 2021
        </p>
        <ul className="mt-4 list-disc pl-4">
          <li>
            Developed responsive web applications using React and TypeScript
          </li>
          <li>
            Optimized application performance resulting in 30% faster load times
          </li>
          <li>
            Collaborated with UX designers to implement pixel-perfect designs
          </li>
        </ul>
      </div>
      <div className="group mb-16">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 group-hover:text-teal-300"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-slate-200">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{" "}
              <span className="whitespace-nowrap">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
