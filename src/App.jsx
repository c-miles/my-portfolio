import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useSectionVisibility } from "./hooks/useSectionVisibility";
import Spotlight from "./components/Spotlight";

function App() {
  const activeSection = useSectionVisibility();

  return (
    <div className="bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <NameTitle />
              <NavLinks activeSection={activeSection} />
            </div>
            <div className="mt-auto pt-8 mb-16 md:mb-24 lg:mb-0">
              <SocialLinks />
            </div>
          </header>

          <main id="content" className="lg:w-[52%] lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div className="text-slate-400">
                <p className="mb-4">
                  I'm a Full Stack Engineer with a passion for building
                  accessible, pixel-perfect digital experiences for the web.
                  With a background in both frontend and backend development, I
                  specialize in creating seamless user experiences while
                  maintaining robust and scalable architectures.
                </p>
                <p className="mb-4">
                  My journey in tech started with a curiosity about how things
                  work, which led me to explore everything from low-level
                  programming to modern web frameworks. I believe in writing
                  clean, maintainable code and staying up-to-date with the
                  latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open source projects, or
                  enjoying the great outdoors. I'm always looking for new
                  challenges and opportunities to grow as a developer.
                </p>
              </div>
            </section>
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
                  <p className="text-sm text-slate-400">
                    TechCorp Inc. • 2021 - Present
                  </p>
                  <ul className="mt-4 list-disc pl-4">
                    <li>
                      Led the development of a scalable microservices
                      architecture
                    </li>
                    <li>
                      Implemented CI/CD pipelines reducing deployment time by
                      40%
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
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
                      Developed responsive web applications using React and
                      TypeScript
                    </li>
                    <li>
                      Optimized application performance resulting in 30% faster
                      load times
                    </li>
                    <li>
                      Collaborated with UX designers to implement pixel-perfect
                      designs
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
                  <p className="text-sm text-slate-400">
                    React • Node.js • MongoDB
                  </p>
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
                    A collaborative task management application with real-time
                    updates, team workspaces, and progress tracking.
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
                    A weather dashboard providing detailed forecasts, historical
                    data visualization, and location-based alerts.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

const NameTitle = () => (
  <div>
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      Chris Miles
    </h1>
    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
      Full Stack Engineer
    </h2>
    <p className="mt-4 max-w-xs leading-normal">
      I build accessible, pixel-perfect digital experiences for the web.
    </p>
  </div>
);

const NavLinks = ({ activeSection }) => (
  <nav className="nav-links" aria-label="In-page jump links">
    <ul className="w-max">
      <li>
        <a
          className={`group flex items-center py-3 ${
            activeSection === "about" ? "active" : ""
          }`}
          href="#about"
        >
          <span
            className={`mr-4 h-px w-8 transition-all duration-300 group-hover:w-16 motion-reduce:transition-none ${
              activeSection === "about"
                ? "w-16 bg-slate-200"
                : "bg-slate-500 group-hover:bg-slate-200"
            }`}
          ></span>
          <span
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeSection === "about"
                ? "text-slate-200"
                : "text-slate-500 group-hover:text-slate-200"
            }`}
          >
            About
          </span>
        </a>
      </li>
      <li>
        <a
          className={`group flex items-center py-3 ${
            activeSection === "experience" ? "active" : ""
          }`}
          href="#experience"
        >
          <span
            className={`mr-4 h-px w-8 transition-all duration-300 group-hover:w-16 motion-reduce:transition-none ${
              activeSection === "experience"
                ? "w-16 bg-slate-200"
                : "bg-slate-500 group-hover:bg-slate-200"
            }`}
          ></span>
          <span
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeSection === "experience"
                ? "text-slate-200"
                : "text-slate-500 group-hover:text-slate-200"
            }`}
          >
            Experience
          </span>
        </a>
      </li>
      <li>
        <a
          className={`group flex items-center py-3 ${
            activeSection === "projects" ? "active" : ""
          }`}
          href="#projects"
        >
          <span
            className={`mr-4 h-px w-8 transition-all duration-300 group-hover:w-16 motion-reduce:transition-none ${
              activeSection === "projects"
                ? "w-16 bg-slate-200"
                : "bg-slate-500 group-hover:bg-slate-200"
            }`}
          ></span>
          <span
            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
              activeSection === "projects"
                ? "text-slate-200"
                : "text-slate-500 group-hover:text-slate-200"
            }`}
          >
            Projects
          </span>
        </a>
      </li>
    </ul>
  </nav>
);

const SocialLinks = () => (
  <ul className="flex items-center" aria-label="Social media">
    <li className="mr-5">
      <a
        className="group block transition-colors"
        href="https://github.com/c-miles"
        target="_blank"
        rel="noreferrer noopener"
        title="GitHub"
      >
        <span className="sr-only">GitHub</span>
        <FaGithub className="h-6 w-6 text-slate-400 group-hover:text-slate-200" />
      </a>
    </li>
    <li className="mr-5">
      <a
        className="group block transition-colors"
        href="https://linkedin.com/in/c-miles"
        target="_blank"
        rel="noreferrer noopener"
        title="LinkedIn"
      >
        <span className="sr-only">LinkedIn</span>
        <FaLinkedin className="h-6 w-6 text-slate-400 group-hover:text-slate-200" />
      </a>
    </li>
    <li className="mr-5">
      <a
        className="group block transition-colors"
        href="https://www.instagram.com/st0rm_b0rn_/"
        target="_blank"
        rel="noreferrer noopener"
        title="Instagram"
      >
        <span className="sr-only">Instagram</span>
        <FaInstagram className="h-6 w-6 text-slate-400 group-hover:text-slate-200" />
      </a>
    </li>
  </ul>
);

export default App;
