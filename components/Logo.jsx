import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/img/logo.png";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className="h-[60px] w-[150px] md:h-[70px] md:w-[180px] object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
