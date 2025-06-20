import React from "react";
import { experience } from "../../content/experience";

const Experience = () => (
  <section
    id="experience"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
      Experience
    </h2>
    <div className="text-slate-400">
      <ul className="group/list">
        {experience.jobs.map((job, index) => (
          <li key={index} className="mb-12">
            <a
              href={job.companyLink}
              target="_blank"
              rel="noreferrer noopener"
              className="group block text-slate-400"
              aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
            >
              <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 -ml-4 rounded-lg border border-transparent py-5 px-4 transition-colors group-hover:border-slate-700/50 group-hover:bg-slate-800/50 lg:group-hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Left column - Period */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={job.period}
                >
                  {job.period}
                </header>

                {/* Right column - Job details */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <div className="inline-flex items-baseline text-slate-200 group-hover:text-teal-300">
                      <span>
                        {job.title} ·{" "}
                        <span className="inline-block relative">
                          {job.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 ml-1 translate-y-px transition-transform duration-200 group-hover:[transform:translate(4px,-4px)]"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>

                    {job.previousRoles &&
                      job.previousRoles.map((role, i) => (
                        <div key={i}>
                          <div className="text-slate-500" aria-hidden="true">
                            {role}
                          </div>
                        </div>
                      ))}
                  </h3>

                  {job.description && (
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {job.description}
                    </p>
                  )}

                  {job.technologies && (
                    <ul
                      className="mt-2 mb-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {job.technologies.map((tech, i) => (
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
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          className="group flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 no-underline"
          href={experience.resumeLink}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: "rgb(226, 232, 240) !important",
            textDecoration: "none",
          }}
        >
          <span className="text-slate-200 group-hover:text-teal-300">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              {experience.resumeLinkText}
            </span>
            <span className="whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover:[transform:translate(4px,-4px)]"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
