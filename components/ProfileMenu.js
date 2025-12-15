import Link from "next/link";
import { motion } from "motion/react";

export default function ProfileMenu({ isOpen, onNotification }) {
  function handleMenuClose() {
    setisOpen(false);
  }

  function handleNotifikation() {
    alert("Du er nu logget ind!");
  }

  return (
    <nav className="col-span-3 md:col-span-1">
      {/*Mobile version*/}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "400px" : 0, opacity: isOpen ? 1 : 0 }}
        className="flex flex-col justify-center col-span-3 text-4xl overflow-hidden font-molend md:hidden"
      >
        <li
          className="ml-6 md:mt-0 md:z-10 font-medium transition-all hover:underline"
          onClick={() =>
            onNotification("Du kan desværre ikke logge ind lige nu.")
          }
        >
          Log ind
        </li>
        <li
          className="ml-6 mt-10 md:mt-0 md:z-10 font-medium transition-all hover:underline"
          onClick={() =>
            onNotification("Du kan desværre ikke oprette en profil lige nu.")
          }
        >
          Opret profil
        </li>
      </motion.ul>
    </nav>
  );
}
