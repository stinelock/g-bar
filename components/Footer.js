import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid sm:grid-rows-2 gap-5 mt-10 relative bottom-0 bg-dark-grey w-screen h-80 py-8 px-20 md:grid md:grid-cols-2 md:grid-rows-none md:h-55 md:px-40">
      <div className="flex flex-col justify-between md:justify-start md:gap-2">
        <Link href="/">
          <Image src="/img/logo.png" alt="G-bar" width="150" height="100"></Image>
        </Link>
        <Link href="https://www.google.com/maps/place/GBAR/@56.155149,10.2088994,17z/data=!3m1!4b1!4m6!3m5!1s0x464c3f90e813d1cb:0x6a32849dfa42970d!8m2!3d56.155146!4d10.2114743!16s%2Fg%2F1tdkw8jv?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D">
          <address>Skolegade 28, 8000 Aarhus</address>
        </Link>
      </div>
      <div className="flex flex-col justify-between md:items-end">
        <div>
          <h3>Åbningstider</h3>
          <p>Torsdag: 20:00 - 02:00</p>
          <p>Fredag: 20:00 - 05:00</p>
          <p>Lørdag: 20:00 - 05:00</p>
        </div>

        <div className="flex flex-row">
          <Link href="https://www.instagram.com/gbaraarhus/?hl=da">
            <Image
              src="/img/instagram.png"
              alt="G-bar Instagram"
              width="50"
              height="100"
              className="mr-8"
            ></Image>
          </Link>
          <Link href="https://www.facebook.com/Ilovegbar">
            <Image
              src="/img/fb.png"
              alt="G-bar Facebook"
              width="50"
              height="100"
              className="mr-8"
            ></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
}
