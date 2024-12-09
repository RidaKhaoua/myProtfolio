/***
 * Components
 */
import Hero from "@components/sections/hero/Hero";
import { Header } from "@components/layouts/index";
import About from "@components/sections/about/About";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
}

export default App;
