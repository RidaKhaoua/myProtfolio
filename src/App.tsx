/***
 * Components
 */
import Hero from "@components/sections/hero/Hero";
import { Header } from "@components/layouts/index";
import About from "@components/sections/about/About";
import Skills from "@components/sections/skills/Skills";
import Work from "@components/sections/work/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills/>
        <Work/>
      </main>
    </>
  );
}

export default App;
