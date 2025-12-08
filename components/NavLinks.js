import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function NavLinks({ isOpen }) {
  const pathname = usePathname();

  function handleMenuClose() {
    setisOpen(false);
  }

  return (
    <nav>
      {/*Mobile version*/}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "400px" : 0, opacity: isOpen ? 1 : 0 }}
        className="flex flex-col justify-center text-5xl md:hidden overflow-hidden"
      >
        <li className="ml-6 md:mt-0 md:z-10">
          <Link
            href="/booking"
            onClick={handleMenuClose}
            className={`font-medium transition-all hover:underline ${
              pathname === "/booking" ? "underline" : ""
            }`}
          >
            Book Bord
          </Link>
        </li>
        <li className="ml-6 mt-10 md:mt-0">
          <Link
            href="/drinks"
            onClick={handleMenuClose}
            className={`font-medium transition-all hover:underline ${
              pathname === "/drinks" ? "underline font-bold" : ""
            }`}
          >
            Bestil Drinks
          </Link>
        </li>
      </motion.ul>

      {/*Tablet/Desktop version*/}
      <ul className="hidden md:flex md:flex-row md:justify-end md:self-end md:h-full md:items-center">
        <li className="ml-6 md:mt-0 md:z-10">
          <Link
            href="/booking"
            className={`font-medium transition-all hover:underline ${
              pathname === "/booking" ? "underline" : ""
            }`}
          >
            Book Bord
          </Link>
        </li>
        <li className="ml-6 mt-10 md:mt-0">
          <Link
            href="/drinks"
            className={`font-medium transition-all hover:underline ${
              pathname === "/drinks" ? "underline font-bold" : ""
            }`}
          >
            Bestil Drinks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
