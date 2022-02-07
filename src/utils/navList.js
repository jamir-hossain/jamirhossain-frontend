import UserIcon from "../Component/icons/UserIcon.jsx";
import ListIcon from "../Component/icons/ListIcon.jsx";
import SkillIcon from "../Component/icons/SkillIcon";
import ContactIcon from "../Component/icons/ContactIcon";
import DocsIcon from "../Component/icons/DocsIcon";

const navList = [
  {
    Icon: UserIcon,
    title: "About",
    url: "/",
  },
  {
    Icon: SkillIcon,
    title: "Skills",
    url: "/skills",
  },
  {
    Icon: ListIcon,
    title: "Works",
    url: "/works",
  },
  {
    Icon: ContactIcon,
    title: "Contact",
    url: "/contact",
  },
  {
    Icon: DocsIcon,
    title: "Resume",
    url: "/resume",
  },
];

export default navList;
