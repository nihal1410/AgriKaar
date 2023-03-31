import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import Upload from "./scenes/Upload";
import Card from "./components/Card";
import Team from "./scenes/Team";
import "./App.scss";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="all-initial">
      <div className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <div className="">
          {isDesktop && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Landing setSelectedPage={setSelectedPage} />
          </motion.div>
        </div>
        <LineGradient />
        <div className="" id="services">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("services")}
          >
            <div>
              <MySkills></MySkills>
            </div>
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto" id="blogs">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("projects")}
          >
            <Projects />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full" id="about">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("testimonials")}
          >
            <Testimonials />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full" id="contact">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
