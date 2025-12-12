"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BookingNav() {
  const pathname = usePathname();

  const bookingSteps = [
    { path: "/booking", imgsrc: "bookingtype.png", label: "Type" },
    { path: "/booking/guests", imgsrc: "avatar.png", label: "Gæster" },
    { path: "/booking/date", imgsrc: "bookingdato.png", label: "Dato" },
    { path: "/booking/time", imgsrc: "bookingtid.png", label: "Tid" },
    { path: "/booking/info", imgsrc: "bookinginfo.png", label: "Bekræft" },
  ];

const currentStepIndex = bookingSteps.findIndex(
  (step) => step.path === pathname
);

  if (pathname === "/booking/confirmation") {
    return null; // Skjul navigationen på bekræftelsessiden
  }

  return (
    <ul className="flex flex-row justify-between w-full max-w-md h-auto mx-auto z-1">
      {bookingSteps.map((step, index) => (
        <li key={step.path} className="flex flex-col items-center justify-center">
          <Link
            href={index <= currentStepIndex ? step.path : "#"}
            className={`py-2 font-medium transition-all ${
              pathname === step.path ? "underline" : ""
            } ${
              index > currentStepIndex ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <Image
              src={`/img/${step.imgsrc}`}
              alt={step.label}
              width="30"
              height="30"
              className="mx-auto mb-1"
            />
            {step.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
