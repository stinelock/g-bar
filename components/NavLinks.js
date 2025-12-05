import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function NavLinks({ isOpen }) {
  const pathname = usePathname();
  return (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? "400px" : 0, opacity: isOpen ? 1 : 0 }}
      className={`${
        isOpen ? "h-auto opacity-100 flex flex-col justify-center text-5xl col-span-3" : "h-0 opacity-0 "
      } md:flex md:flex-row md:items-center md:justify-end`}
    >
      <li className="ml-6 mt-6 md:mt-0">
        <Link
          href="/booking"
          className={`font-medium transition-all hover:underline ${
            pathname === "/booking" ? "underline" : ""
          }`}
        >
          Book Bord
        </Link>
      </li>
      <li className="ml-6 mt-6 md:mt-0">
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
