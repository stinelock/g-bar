"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookingNav() {
  const pathname = usePathname();
  return (
    <nav className=" flex flex-row justify-around w-auto h-auto m-4">
      <Link
        href="/booking/type"
        className={`pl-4 py-2 font-medium transition-all ${
          pathname === "/booking/type" ? "underline" : ""
        }`}
      >
        Type
      </Link>
      <Link
        href="/booking/guests"
        className={`pl-4 py-2 font-medium transition-all ${
          pathname === "/booking/guests" ? "underline" : ""
        }`}
      >
        Gæster
      </Link>
      <Link
        href="/booking/date"
        className={`pl-4 py-2 font-medium transition-all ${
          pathname === "/booking/date" ? "underline" : ""
        }`}
      >
        Dato
      </Link>
      <Link
        href="/booking/time"
        className={`pl-4 py-2 font-medium transition-all ${
          pathname === "/booking/time" ? "underline" : ""
        }`}
      >
        Tid
      </Link>
      <Link
        href="/booking/info"
        className={`px-4 py-2 font-medium transition-all ${
          pathname === "/booking/info" ? "underline" : ""
        }`}
      >
        Bekræft
      </Link>
    </nav>
  );
}
