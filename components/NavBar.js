import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-dark-grey grid grid-cols-3 p-5 w-screen">
      <Link href="/" className="col-start-2">
        <Image src="/img/logo.png" alt="G-bar" width="180" height="100"></Image>
      </Link>
      <Image
        src="/img/burgermenu.png"
        alt="menu"
        width="30"
        height="20"
        className="justify-self-end"
      ></Image>
      {/* <ul>
        <li>
          <Link href="/booking">Book Bord</Link>
        </li>
        <li>
          <Link href="/drinks">Bestil Drinks</Link>
        </li>
      </ul> */}
    </nav>
  );
}
