import React from "react";
import { about } from "../../content/about";

const About = () => (
  <section
    id="about"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div className="text-slate-400">
      {about.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={index < about.paragraphs.length - 1 ? "mb-4" : ""}
        >
          {paragraph}
        </p>
      ))}
    </div>
  </section>
);

export default About;
