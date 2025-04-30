import React from "react";
import { experience } from "../../content/experience";

const Experience = () => (
  <section
    id="experience"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div className="text-slate-400 group/list">
      {experience.jobs.map((job, index) => (
        <div
          key={index}
          className="group relative mb-12 -ml-4 rounded-lg border border-transparent p-4 transition-colors hover:border-slate-700/50 hover:bg-slate-800/50 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <h3 className="text-lg font-semibold text-slate-200">{job.title}</h3>
          <p className="text-sm text-slate-400">
            {job.company} • {job.period}
          </p>
          <ul className="mt-4 list-disc pl-4">
            {job.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="group mb-16">
        <a
          className="inline-flex items-center font-medium leading-tight text-slate-200 group-hover:text-teal-300"
          href={experience.resumeLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="text-slate-200">
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              {experience.resumeLinkText}
              <span className="whitespace-nowrap">
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
