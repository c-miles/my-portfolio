import React from "react";
import "./App.css";

const App = () => (
  <div className="bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <NameTitle />
            <NavLinks />
            <SocialLinks />
          </div>
        </header>

        <main id="content" className="lg:w-[52%] lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
        </main>
      </div>
    </div>
  </div>
);

const NameTitle = () => (
  <div>
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      Chris 'Miles'
    </h1>
    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
      Full Stack Engineer
    </h2>
    <p className="mt-4 max-w-xs leading-normal">
      I build accessible, pixel-perfect digital experiences for the web.
    </p>
  </div>
);

const NavLinks = () => (
  <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
    <ul className="w-max">
      <li>
        <a className="group flex items-center py-3 active" href="#about">
          <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
            About
          </span>
        </a>
      </li>
      <li>
        <a className="group flex items-center py-3" href="#experience">
          <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
            Experience
          </span>
        </a>
      </li>
      <li>
        <a className="group flex items-center py-3" href="#projects">
          <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
            Projects
          </span>
        </a>
      </li>
    </ul>
  </nav>
);

const SocialLinks = () => (
  <ul className="mt-8 flex items-center" aria-label="Social media">
    <li className="mr-5">
      <a
        className="block hover:text-slate-200"
        href="https://github.com/YourGitHub"
        target="_blank"
        rel="noreferrer noopener"
        title="GitHub"
      >
        <span className="sr-only">GitHub</span>

        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54..."></path>
        </svg>
      </a>
    </li>
  </ul>
);

const AboutSection = () => (
  <section
    id="about"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div className="sticky top-0 mb-4 w-full bg-slate-900/75 py-5 lg:relative lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>
    </div>
    <p className="mb-4">
      I'm a developer passionate about crafting accessible, pixel-perfect user
      interfaces... (Placeholder text; update as needed.)
    </p>
  </section>
);

const ExperienceSection = () => (
  <section
    id="experience"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Work experience"
  >
    <div className="sticky top-0 mb-4 w-full bg-slate-900/75 py-5 lg:relative lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>
    </div>
    <p className="mb-4">
      Showcase your roles, responsibilities, or timeline here...
    </p>
  </section>
);

const ProjectSection = () => (
  <section
    id="projects"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="Selected projects"
  >
    <div className="sticky top-0 mb-4 w-full bg-slate-900/75 py-5 lg:relative lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Projects
      </h2>
    </div>
    <p className="mb-4">
      List out or showcase a few noteworthy projects. Provide links,
      screenshots, etc.
    </p>
  </section>
);

export default App;
