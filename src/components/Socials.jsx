import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Socials = () => (
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

export default Socials;
