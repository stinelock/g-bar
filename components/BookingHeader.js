"use client";

import { usePathname } from "next/navigation";

export default function BookingHeader() {
  const pathname = usePathname();

  return (
    <h1 className="text-4xl text-center mb-4 mt-8">
      {pathname === "/booking/type" && "Vælg Område"}
      {pathname === "/booking/guests" && "Vælg antal gæster"}
      {pathname === "/booking/date" && "Vælg Dato"}
      {pathname === "/booking/time" && "Vælg Tidspunkt"}
      {pathname === "/booking/info" && "Bekraeft Booking"}
    </h1>
  );
}
