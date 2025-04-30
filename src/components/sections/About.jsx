import React from "react";

const About = () => (
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
        I'm a Full Stack Engineer with a passion for building accessible,
        pixel-perfect digital experiences for the web. With a background in both
        frontend and backend development, I specialize in creating seamless user
        experiences while maintaining robust and scalable architectures.
      </p>
      <p className="mb-4">
        My journey in tech started with a curiosity about how things work, which
        led me to explore everything from low-level programming to modern web
        frameworks. I believe in writing clean, maintainable code and staying
        up-to-date with the latest industry trends.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies,
        contributing to open source projects, or enjoying the great outdoors.
        I'm always looking for new challenges and opportunities to grow as a
        developer.
      </p>
    </div>
  </section>
);

export default About;
