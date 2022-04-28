import { HiHome, HiBookOpen, HiMail } from "react-icons/hi";

export const navbar = [
  {
    id: "home",
    icon: HiHome,
    path: "/",
  },
  {
    id: "projects",
    icon: HiBookOpen,
    path: "/projects",
  },
  {
    id: "contact",
    icon: HiMail,
    path: "/contact",
  },
];

export const footer = [...navbar];

export const externalLinks = {
  twitter: "https://twitter.com/home",
  linkedin: "https://linkedin.com",
  gitlab: "https://gitlab.com",
  github: "https://github.com",
  email: "mailto:druon.constant@gmail.com",
};
