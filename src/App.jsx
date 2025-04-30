import React from "react";
import "./App.css";
import { useSectionVisibility } from "./hooks/useSectionVisibility";

import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import NavLinks from "./components/NavLinks";
import Projects from "./components/sections/Projects";
import Socials from "./components/Socials";
import Spotlight from "./components/Spotlight";
import Title from "./components/Title";

function App() {
  const activeSection = useSectionVisibility();

  return (
    <div className="bg-slate-900 text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Title />
              <NavLinks activeSection={activeSection} />
            </div>
            <div className="mt-auto pt-8 mb-16 md:mb-24 lg:mb-0">
              <Socials />
            </div>
          </header>

          <main id="content" className="lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
