"use client";

import { usePathname } from "next/navigation";

export default function BookingHeader() {
  const pathname = usePathname();


if (pathname === "/booking/confirmation") {
  return null;
}

  return (
    <h1 className="text-4xl text-center m-4">
      {pathname === "/booking" && "Vælg Område"}
      {pathname === "/booking/guests" && "Vælg antal gæster"}
      {pathname === "/booking/date" && "Vælg Dato"}
      {pathname === "/booking/time" && "Vælg Tidspunkt"}
      {pathname === "/booking/info" && "Bekraeft Booking"}
    </h1>
  );
}
