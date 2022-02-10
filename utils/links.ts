import { HiHome, HiBookOpen, HiMail } from "react-icons/hi";

export const navbar = [
  {
    id: "home",
    icon: HiHome,
    path: "/",
  },
  {
    id: "portfolio",
    icon: HiBookOpen,
    path: "/portfolio",
  },
  {
    id: "contact",
    icon: HiMail,
    path: "/contact",
  },
];

export const footer = [
  {
    id: "home",
    path: "/",
  },
  {
    id: "portfolio",
    path: "/portfolio",
  },
  {
    id: "contact",
    path: "/contact",
  },
];

export const externalLinks = {
  twitter: "https://twitter.com/home",
  linkedin: "https://linkedin.com",
  gitlab: "https://gitlab.com",
  github: "https://github.com",
  email: "mailto:druon.constant@gmail.com",
};
