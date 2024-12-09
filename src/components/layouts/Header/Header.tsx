/**
 * UI
 */
import { useState } from "react";
import { Button, Logo } from "@components/ui";

/**
 * Layouts
 */
import Navbar from "../Navbar/Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div
        className="max-w-screen-2xl w-full   mx-auto px-4 flex items-center justify-between 
      md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1 className="">
          <a href="/">
          <Logo/>
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <Button
            className=" bg-zinc-50/10 w-10 h-10 grid place-items-center rounded-xl 
          ring-inset ring-1 ring-red-500/[0.02] backdrop-blur-2xl hover:bg-zinc-50/15 duration-300 active:scale-95 md:hidden"
            onClick={toggleNavbar}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </Button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          className="bg-purple-600 rounded p-2 text-sm max-md:hidden w-fit md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;
