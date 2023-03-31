import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/Services";
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import Upload from "./scenes/Upload";
import Card from "./components/Card";
import Team from "./scenes/Team";
import Blogs from "./scenes/Blogs";
import Slider from "./Slider/Slider";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.scss'
import TextBlock from "./scenes/TestBlock";

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
    <div className="App">
      <div className="app">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class=    "animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
       
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.25}>
       
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25}>
         
         </ParallaxLayer>
         <ParallaxLayer offset={4} speed={0.25}>
         
         </ParallaxLayer>
         <ParallaxLayer offset={5} speed={0.25}>
         
         </ParallaxLayer>
      </Parallax>
    </div>
    <TextBlock></TextBlock>

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
              <a href="http://127.0.0.1:8000/"><button >Upload</button></a>
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
            <Blogs />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full" id="about">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("testimonials")}
          ><motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red">
            TEAM
          </p>
          <LineGradient width="mx-auto w-2/5" />
          <Slider></Slider>
        </motion.div>
            
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
      
   
  );
}

export default App;
