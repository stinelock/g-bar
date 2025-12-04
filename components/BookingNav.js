"use client"; //Nødvendigt for at bruge usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BookingNav() {
    const pathname = usePathname();
    return (
      <nav className="flex-col w-full justify-center">
        <Link href="/type">Type</Link>
        <Link href="/guests">Gæster</Link>
        <Link href="/date">Dato</Link>
        <Link href="/time">Tid</Link>
        <Link href="/info">Bekræft</Link>
      </nav>
    );
}