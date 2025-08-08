"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "Medical Records", path: "/medical-records" },
  { name: "contact", path: "/contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl transition-colors duration-200 ease-in-out hover:text-[#FFD86F]">
        <RiMenu3Fill className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="bg-primary transition-all duration-300 ease-in-out">
        <div>
          <SheetHeader>
            <SheetTitle>
              <Logo />
              <div className="border-b border-[#3D5C3E] mt-2"></div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>

          {/* <ul className="w-full flex flex-col justify-center text-center gap-6 text-white pt-2 pb-10">
            {links.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-[17px] capitalize font-[var(--font-ubuntu-condensed)] hover:text-[#FFD86F] transition"
                  activeClass="text-[#FFD86F]"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul> */}

          <ul className="w-full flex flex-col justify-center text-center gap-6 text-white pt-2 pb-10">
            {links.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.path}
                    className={`cursor-pointer text-[17px] capitalize transition-colors duration-300 ${
                      isActive ? "text-[#FFD86F]" : "hover:text-[#FFD86F]"
                    }`}
                  >
                    <span className="font-[var(--font-ubuntu-condensed)]">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex items-center justify-center">
            <Socials />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
