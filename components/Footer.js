import Image from "next/image";
import Link from "next/link";

import logo from "@/img/logo.png";
import FaceBook from "@/img/fb.png";
import Instagram from "@/img/instagram.png";

export default function Footer() {
  return (
    <footer className="grid grid-rows-2 gap-5 fixed bottom-0 bg-dark-grey w-full h-80 py-8 px-20">
      <Link href="/">
        <Image src={logo} alt="G-bar" width="150" height="100"></Image>
      </Link>
      <address>Skolegade 28, 8000 Aarhus</address>
      <div>
        <h3>Åbningstider</h3>
        <p>Torsdag: 20:00 - 02:00</p>
        <p>Fredag: 20:00 - 05:00</p>
        <p>Lørdag: 20:00 - 05:00</p>
      </div>

      <div className="flex flex-row">
        <Link href="https://www.instagram.com/gbaraarhus/?hl=da">
          <Image
            src={Instagram}
            alt="G-bar Instagram"
            width="50"
            height="100"
            className="mr-8"
          ></Image>
        </Link>
        <Link href="https://www.facebook.com/Ilovegbar">
          <Image
            src={FaceBook}
            alt="G-bar Facebook"
            width="50"
            height="100"
            className="mr-8"
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
