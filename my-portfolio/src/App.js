import { useState, useEffect } from "react";
import UseMediaQuery from "./hooks/UseMediaQuery";
import NavBar from "./containers/NavBar";
import DotScrollGroup from "./containers/DotScrollGroup";
import Homebanner from "./containers/Homebanner";
import { motion } from "framer-motion";
import AboutMe from "./containers/AboutMe";
import SectionLine from "./commoncomponents/SectionLine";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Technologies from "./containers/Technologies";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import Footer from "./containers/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY === 0;
      if (isScrolled) {
        setScrolled(true);
        setSelectedPage("home");
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app deep-blue">
        <NavBar
          scrolled={scrolled}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

      <div className=" w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotScrollGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Homebanner setSelectedPage={setSelectedPage}> </Homebanner>
          </motion.div>
        </div>

        <div className="mx-auto p-4 max-w-screen-lg">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("about")}
          >
            <SectionLine />
            <AboutMe />
          </motion.div>
        </div>
        <div className="mx-auto p-4 max-w-screen-lg">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("education")}
          >
            <SectionLine />
            <Education />
          </motion.div>
        </div>
        <div className="mx-auto p-4 max-w-screen-lg ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("experience")}
          >
            <SectionLine />
            <Experience />
          </motion.div>
        </div>

        <div className="mx-auto p-4 max-w-screen-lg ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("technologies")}
          >
            <SectionLine />
            <Technologies />
          </motion.div>
        </div>


        <div className="mx-auto p-4 max-w-screen-lg  ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <SectionLine />
            <Projects />
          </motion.div>
        </div>

        <div className="mx-auto p-4 max-w-screen-lg ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <SectionLine />
            <Contact />
          </motion.div>
        </div>

        
      
        <div className=" mx-auto  p-5 max-w-screen-lg ">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("footer")}
          >
             <SectionLine />
            <Footer />
          </motion.div>
        </div>
        
      </div>
    </>
  );
}

export default App;
