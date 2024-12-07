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
