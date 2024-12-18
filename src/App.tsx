/**
 * Node_modules
 */
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */

gsap.registerPlugin(useGSAP, ScrollTrigger);

/***
 * Components
 */
import Hero from "@components/sections/hero/Hero";
import { Header } from "@components/layouts/index";
import About from "@components/sections/about/About";
import Skills from "@components/sections/skills/Skills";
import Work from "@components/sections/work/Work";
import Contact from "@components/sections/contact/Contact";
import Footer from "@components/sections/footer/Footer";

function App() {
  useGSAP(() => {
    const elements: HTMLElement[] = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger:{
          trigger: element ,
          start:"-8 bottom",
          end:"bottom 20%",
          scrub: true,
        },
        y:0,
        opacity:1,
        duration:1,
        ease: "power2.out"
      })
    })
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
