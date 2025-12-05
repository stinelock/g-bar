import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function NavLinks({ isOpen }) {
  const pathname = usePathname();
  return (
    <motion.ul
      className={`${
        isOpen ? "h-auto opacity-100" : "h-0 opacity-0"
      } md:flex md:flex-row md:items-center md:justify-end`}
    >
      <li className="ml-6">
        <Link
          href="/booking"
          className={`font-medium transition-all hover:underline ${
            pathname === "/booking" ? "underline" : ""
          }`}
        >
          Book Bord
        </Link>
      </li>
      <li className="ml-6">
        <Link
          href="/drinks"
          className={`font-medium transition-all hover:underline ${
            pathname === "/drinks" ? "underline font-bold" : ""
          }`}
        >
          Bestil Drinks
        </Link>
      </li>
    </motion.ul>
  );
}
