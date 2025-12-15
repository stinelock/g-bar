"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PreviousButton({ text, href, isConfirmationPage }) {
  const currentPath = usePathname();

  if (!href) {
    switch (currentPath) {
      case "/booking":
        return null;
      case "/booking/guests":
        href = "/booking";
        break;
      case "/booking/date":
        href = "/booking/guests";
        break;
      case "/booking/time":
        href = "/booking/date";
        break;
      case "/booking/info":
        href = "/booking/time";
        break;
      default:
        return null;
    }
  }

  return (
    <Link
      href={href}
      className={`flex justify-center p-2 mt-4 border md:mt-10 border-white uppercase ${
        isConfirmationPage ? "w-full" : "w-30"
      }`}
    >
      {text}
    </Link>
  );
}
