"use client";

import { usePathname } from "next/navigation";

export default function BookingHeader() {
  const pathname = usePathname();


if (pathname === "/booking/confirmation") {
  return null;
}

  return (
    <h1 className="text-xl text-center z-1">
      {pathname === "/booking" && "Vaelg bordtype"}
      {pathname === "/booking/guests" && "Vaelg antal gaester"}
      {pathname === "/booking/date" && "Vaelg Dato"}
      {pathname === "/booking/time" && "Vaelg Tidspunkt"}
      {pathname === "/booking/info" && "Bekraeft Booking"}
    </h1>
  );
}
