"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PreviousButton() {
  const currentPath = usePathname();

  let href = null;

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
  }

  if (!href) {
    return null;
  }

  return (
    <Link
      href={href}
      className="flex justify-center p-2 mt-4 w-30 border md:mt-10 border-white"
    >
      Forrige
    </Link>
  );
}
