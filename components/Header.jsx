"use client";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "testimonials",
    path: "testimonials",
  },
  {
    name: "contact",
    path: "contact",
  },
];

import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="bg-primary py-3 sticky top-0 z-20">
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <>
            <Logo />
          </>
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-12 text-white ">
              {links.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className="cursor-pointer text-[17px] capitalize"
                    activeClass="text-[#FFD86F]"
                  >
                    <span className="font-[var(--font-ubuntu-condensed)]">
                      {link.name}
                    </span>
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="w-[200px] h-[45px] flex items-center justify-between group bg-secondary rounded-[2rem] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-white cursor-pointer"
            >
              <div className="flex-1 text-center font-medium text-md text-[#0A2655] transition-colors duration-300">
                Book Appointment
              </div>
            </button>
          </nav>

          <div className="lg:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
