import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-24"
      aria-label="About me"
    >
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        About
      </h2>
      <div className="text-slate-400">
        <p className="mb-4">
          I'm a Software Engineer with a passion for building robust, scalable
          solutions where design meets functionality. My journey into tech began
          in 2020 when I decided to make a career pivot, teaching myself to code
          through online courses before taking the leap to attend a coding
          bootcamp in Columbus: a decision that transformed my professional
          trajectory.
        </p>

        <p className="mb-4">
          I recently joined{" "}
          <a
            href="https://kodehealth.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium"
          >
            Kode Health
          </a>
          , a rapidly growing health-tech startup that's revolutionizing medical
          coding through innovative marketplace solutions. Prior to this, I spent
          three years at{" "}
          <a
            href="https://ikesmartcity.com"
            target="_blank"
            rel="noreferrer noopener"
            className="font-medium"
          >
            Orange Barrel Media
          </a>{" "}
          developing software for interactive kiosks deployed across major U.S.
          cities, where I led the implementation of their first AI feature: an
          agentic chatbot powered by Anthropic's API that transforms how users
          interact with advertising inventory data.
        </p>

        <p className="mb-4">
          Throughout my career, I've had the opportunity to work on diverse
          projects ranging from AI-powered conversational interfaces to scalable
          transit data systems. I specialize in Ruby on Rails and React, with
          recent experience integrating LLMs and building intelligent systems
          that bridge complex data with intuitive user experiences. I find the
          most satisfaction in solving challenging problems that have real-world
          impact, whether that's helping healthcare providers optimize their
          operations or making public information more accessible.
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
