"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import Notification from "./Notification";

export default function NavBar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOpen((prev) => !prev);
    setIsProfileOpen(false);
  }

  function handleProfileClick() {
    if (window.innerWidth <= 768) {
      setIsProfileOpen((prev) => !prev);
      setIsBurgerOpen(false);
    }
  }

  function handleLogInClick(message) {
    setNotification({
      message: message,
      farve: "bg-red-500",
    });
  }

  return (
    <header className="bg-dark-grey grid grid-cols-3 p-5 w-screen sticky z-10 md:px-10">
      {notification && (
        <Notification
          indhold={notification.message}
          farve={notification.farve}
          vedLuk={() => setNotification(null)}
        />
      )}
      <div className="flex flex-row justify-start items-center">
        <Image
          src="/img/avatar.png"
          alt="profil menu"
          width="30"
          height="30"
          className="w-8 h-auto"
          onClick={handleProfileClick}
        />
        <ul className="hidden md:flex font-molend">
          <li
            className="ml-6 md:mt-0 md:z-10 font-medium transition-all hover:underline"
            onClick={() =>
              handleLogInClick("Du kan desværre ikke logge ind lige nu.")
            }
          >
            Logo ind
          </li>
          <li
            className="ml-6 md:mt-0 md:z-10 font-medium transition-all hover:underline"
            onClick={() =>
              handleLogInClick("Du kan desværre ikke oprette en profil lige nu.")
            }
          >
            Opret profil
          </li>
        </ul>
      </div>

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
        src={isBurgerOpen ? "/img/burgerclose.png" : "/img/burgermenu.png"}
        alt="menu"
        width="30"
        height="20"
        loading="eager"
        onClick={handleBurgerClick}
        className="justify-self-end z-10 md:hidden"
      ></Image>
      <NavLinks isOpen={isBurgerOpen} className="col-start-5 md:col-start-3" />
      <ProfileMenu
        isOpen={isProfileOpen}
        className="col-start-5 md:col-start-3"
        onNotification={handleLogInClick}
      />
    </header>
  );
}
