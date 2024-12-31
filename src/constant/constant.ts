import CSS3 from "@assets/images/CSS3.svg";
import Javascript from "@assets/images/JavaScript.svg";
import React from "@assets/images/React.svg";
import Redux from "@assets/images/Redux.svg";
import Sass from "@assets/images/Sass.svg";
import Tailwind from "@assets/images/Tailwind CSS.svg";
import Typescript from "@assets/images/TypeScript.svg";
// image projects
import OrderFood from "@assets/images/order_food.png";
import FifaWorldCup from "@assets/images/Fifa World.png";
import Food from "@assets/images/food.png";

export const links: {
  label: string;
  link: string;
  className: string;
  ref?: boolean;
}[] = [
  {
    label: "Home",
    link: "#home",
    className: "nav-link active",
    ref: true,
  },
  {
    label: "Projects",
    link: "#projects",
    className: "nav-link",
  },
  {
    label: "About",
    link: "#about_us",
    className: "nav-link",
  },
  {
    label: "contact",
    link: "#contact",
    className: "nav-link md:hidden",
  },
];

export const aboutItems = [
  {
    label: "Project done",
    number: 1,
  },
  {
    label: "Years of expierience",
    number: 1,
  },
];

export const skillItems = [
  {
    imgSrc: CSS3,
    label: "Css",
    desc: "Design tool",
  },
  {
    imgSrc: Javascript,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: React,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: Typescript,
    label: "TypeScript",
    desc: "extends Javascript",
  },
  {
    imgSrc: Redux,
    label: "Redux",
    desc: "Global state management",
  },
  {
    imgSrc: Tailwind,
    label: "Tailwind css",
    desc: "User Interface",
  },
  {
    imgSrc: Sass,
    label: "Sass",
    desc: "CSS with superpowers",
  },
];

export const works: {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
}[] = [
  {
    imgSrc: OrderFood,
    title: "eCommerce website",
    tags: [
      "eCommerce",
      "React",
      "Redux_toolkit",
      "React-router",
      "React-hook-form",
      "TS"
    ],
    projectLink: "https://ridakhaoua.github.io/order_food_app",
  },
  {
    imgSrc: FifaWorldCup,
    title: "Fifa World cup website",
    tags: ["Development", "HTML", "CSS", "Sass", "JS"],
    projectLink: "https://ridakhaoua.github.io/fifa-world-cup/",
  },
  {
    imgSrc: Food,
    title: "Order Food",
    tags: ["HTML", "CSS", "JS"],
    projectLink: "https://ridakhaoua.github.io/food_store/"
  }
];

export const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/RidaKhaoua",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/reda-khaoua-1718a81b1/",
  },
];
