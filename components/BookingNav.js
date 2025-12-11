"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookingNav() {
  const pathname = usePathname();

if (pathname === "/booking/confirmation") {
    return null; // Skjul navigationen på bekræftelsessiden
  }

  return (
    <div className="flex flex-row justify-between w-full max-w-md h-auto mx-auto">
      <Link
        href="/booking"
        className={`py-2 font-medium transition-all ${
          pathname === "/booking" ? "underline" : ""
        }`}
      >
        Type
      </Link>
      <Link
        href="/booking/guests"
        className={`py-2 font-medium transition-all ${
          pathname === "/booking/guests" ? "underline" : ""
        }`}
      >
        Gæster
      </Link>
      <Link
        href="/booking/date"
        className={`py-2 font-medium transition-all ${
          pathname === "/booking/date" ? "underline" : ""
        }`}
      >
        Dato
      </Link>
      <Link
        href="/booking/time"
        className={`py-2 font-medium transition-all ${
          pathname === "/booking/time" ? "underline" : ""
        }`}
      >
        Tid
      </Link>
      <Link
        href="/booking/info"
        className={`py-2 font-medium transition-all ${
          pathname === "/booking/info" ? "underline" : ""
        }`}
      >
        Bekræft
      </Link>
    </div>
  );
}
