import { useState, useEffect } from "react";
import UseMediaQuery from "./hooks/UseMediaQuery";
import NavBar from "./components/NavBar";
import DotScrollGroup from "./components/DotScrollGroup";
import Homebanner from "./components/Homebanner";
import { motion } from "framer-motion";

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

        <div className="w-5/6 mx-auto md:h-full">
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
      </div>
    </>
  );
}

export default App;
