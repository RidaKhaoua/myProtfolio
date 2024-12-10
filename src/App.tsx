/***
 * Components
 */
import Hero from "@components/sections/hero/Hero";
import { Header } from "@components/layouts/index";
import About from "@components/sections/about/About";
import Skills from "@components/sections/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>
    </>
  );
}

export default App;
