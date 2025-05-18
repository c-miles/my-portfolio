import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="text-slate-400">
        <p className="mb-4">
          I'm a Software Engineer with a passion for building robust, scalable
          solutions where design meets functionality. My journey into tech began
          in 2020 when I decided to make a career pivot, teaching myself to code
          through online courses before taking the leap to attend a coding
          bootcamp in Columbus — a decision that transformed my professional
          trajectory.
        </p>

        <p className="mb-4">
          Currently at{" "}
          <a
            href="https://ikesmartcity.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium"
          >
            Orange Barrel Media
          </a>{" "}
          where I develop and maintain software for{" "}
          <a
            href="https://ikesmartcity.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium"
          >
            interactive kiosks
          </a>{" "}
          deployed across major U.S. cities. I specialize in creating
          experiences that blend intuitive design with technical excellence,
          using technologies like Ruby on Rails and React to build features that
          enhance both performance and user experience.
        </p>

        <p className="mb-4">
          Throughout my time in the industry, I've had the opportunity to work
          on diverse projects — from designing scalable data systems for transit
          information to integrating mapping APIs for location-based services. I
          find the most satisfaction in solving complex problems that improve
          how people interact with technology in public spaces.
        </p>

        <p>
          When I'm not coding, you'll find me hiking trails with my wife,
          chasing achievements in video games, lifting weights, or planning our
          next travel adventure.
        </p>
      </div>
    </section>
  );
};

export default About;
