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
          className="h-[90px] w-[100px] md:h-[90px] md:w-[140px] object-cover"
        />
      </Link>
    </div>
  );
};

export default Logo;
