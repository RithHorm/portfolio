import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  Home,
  Settings,
  User,
  Mail,
  BriefcaseBusiness,
  FileVideo2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingDock } from "./ui/uis/floating-dock";
const Navbar = () => {
  const dockItems = [
    {
      title: "Home",
      icon: <Home className="w-full h-full" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <BriefcaseBusiness className="w-full h-full" />,
      href: "/projects",
    },

    {
      title: "Contact",
      icon: <Mail className="w-full h-full" />,
      href: "/contact",
    },
    {
      title: "Resources",
      icon: <FileVideo2 className="w-full h-full" />,
      href: "/resources",
    },
    {
      title: "About",
      icon: <User className="w-full h-full" />,
      href: "/about",
    },
  ];
  return (
    <div className=" flex justify-center items-center z-50 relative">
      <nav className="fixed bottom-3 md:bottom-5   rounded-xl ">
        <FloatingDock
          items={dockItems}
          desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-6 right-4 z-50"
        />
      </nav>
    </div>
  );
};

export default Navbar;
