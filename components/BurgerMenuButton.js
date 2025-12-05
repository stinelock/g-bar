"use client";
import Image from "next/image";

export default function BurgerMenuButton({isOpen}) {

  return (
    <Image
      src={isOpen ? "/img/burgerclose.png" : "/img/burgermenu.png"}
      alt="menu"
      width="30"
      height="20"
      loading="eager"
      className="justify-self-end md:hidden"
      
    ></Image>
  );
}
