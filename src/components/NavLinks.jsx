import React from "react";

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

export default NavLinks;
