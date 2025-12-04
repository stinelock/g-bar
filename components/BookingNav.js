"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookingNav() {
    const pathname = usePathname();
    return (
      <nav className=" flex flex-row justify-around w-screen h-auto m-4">
        <Link href="/booking/type">Type</Link>
        <Link href="/booking/guests">Gæster</Link>
        <Link href="/booking/date">Dato</Link>
        <Link href="/booking/time">Tid</Link>
        <Link href="/booking/info">Bekræft</Link>
      </nav>
    );
}