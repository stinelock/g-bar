"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="bg-dark-grey grid grid-cols-3 p-5 w-screen sticky z-10 md:px-10">
      <Image src="/img/avatar.png" alt="profil menu" width="30" height="30" />
      <Link href="/" className="col-start-2">
        <Image
          src="/img/logo.png"
          alt="G-bar"
          width="180"
          height="100"
          className="justify-self-center self-center z-10"
        ></Image>
      </Link>
      <Image
        src={isOpen ? "/img/burgerclose.png" : "/img/burgermenu.png"}
        alt="menu"
        width="30"
        height="20"
        loading="eager"
        onClick={handleClick}
        className="justify-self-end z-10 md:hidden"
      ></Image>
      <NavLinks isOpen={isOpen} className="col-start-5 md:col-start-3" />
    </header>
  );
}
