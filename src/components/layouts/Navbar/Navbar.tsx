/**
 * Node Modules
 */

import React, { memo, useEffect, useRef } from "react";
/**
 * constant
 */
import { links } from "@constant/constant";

interface INavbar {
  navOpen: boolean;
}

function Navbar({ navOpen }: INavbar) {
  const lastActiveLink = useRef<HTMLLIElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const initActiveBox = () => {
    if (activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current?.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current?.offsetLeft + "px";
      activeBox.current.style.width =
        lastActiveLink.current?.offsetWidth + "px";
      console.log(lastActiveLink.current?.offsetWidth);
      activeBox.current.style.height =
        lastActiveLink.current?.offsetHeight + "px";
    }
  };

  const activeCurrentLink = (e: React.MouseEvent<HTMLLIElement>) => {
    lastActiveLink.current?.classList.remove("active");
    e.currentTarget.classList.add("active");
    if (lastActiveLink.current) {
      lastActiveLink.current = e.currentTarget;
      console.log(lastActiveLink.current);
    }

    initActiveBox();
  };


  useEffect(initActiveBox, []);

  window.addEventListener("resize", initActiveBox);

  const renderListOfLinks = links.map((link) => {
    if (link.ref) {
      return (
        <li
          key={link.link}
          ref={lastActiveLink}
          className={`${link.className} flex items-center`}
          onClick={activeCurrentLink}>
          <a href={link.link}>{link.label}</a>
        </li>
      );
    } else {
      return (
        <li
          key={link.link}
          className={`${link.className}`}
          onClick={activeCurrentLink}>
          <a href={link.link}>{link.label}</a>
        </li>
      );
    }
  });
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      <ul className="sm:block md:flex items-center">{renderListOfLinks}</ul>
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

export default memo(Navbar);
