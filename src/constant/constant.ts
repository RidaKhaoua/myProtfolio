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
    imgSrc: "/src/assets/images/CSS3.svg",
    label: "Css",
    desc: "Design tool",
  },
  {
    imgSrc: "/src/assets/images/JavaScript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/src/assets/images/React.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/src/assets/images/TypeScript.svg",
    label: "TypeScript",
    desc: "extends Javascript",
  },
  {
    imgSrc: "/src/assets/images/Redux.svg",
    label: "Redux",
    desc: "Global state management",
  },
  {
    imgSrc: "/src/assets/images/Tailwind CSS.svg",
    label: "Tailwind css",
    desc: "User Interface",
  },
  {
    imgSrc: "/src/assets/images/Sass.svg",
    label: "Sass",
    desc: "CSS with superpowers",
  },
];

export const works = [
  {
    imgSrc: "/src/assets/images/order_food.png",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://ridakhaoua.github.io/order_food_app",
  },
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
