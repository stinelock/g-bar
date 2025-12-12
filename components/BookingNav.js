"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookingNav() {
  const pathname = usePathname();

  const bookingSteps = [
    "/booking",
    "/booking/guests",
    "/booking/date",
    "/booking/time",
    "/booking/info",
  ]

  const currentStepIndex = bookingSteps.indexOf(pathname);

if (pathname === "/booking/confirmation") {
    return null; // Skjul navigationen på bekræftelsessiden
  }
  
  return (
    <ul className="flex flex-row justify-between w-full max-w-md h-auto mx-auto z-1">
      {bookingSteps.map((step, index) => (
        <li key={step}>
          <Link
            href={step}
            className={`py-2 font-medium transition-all ${
              pathname === step ? "underline" : ""
            } ${
              index > currentStepIndex ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {step === "/booking" && "Type"}
            {step === "/booking/guests" && "Gæster"}
            {step === "/booking/date" && "Dato"}
            {step === "/booking/time" && "Tid"}
            {step === "/booking/info" && "Bekræft"}
          </Link>
        </li>
      ))}
    </ul>
  );
}
