"use client";

import BackgroundImage from "@/components/BackgroundImage";
import Notification from "@/components/Notification";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [notifikation, setNotifikation] = useState(null);

  return (
    <main className="relative h-[1150px] md:max-w-4xl md:w-3xl md:justify-self-center md:pb-12 md:flex md:flex-col">
      {notifikation && (
        <Notification
          indhold={notifikation.indhold}
          farve={notifikation.farve}
          vedLuk={() => setNotifikation(null)}
        />
      )}
      <BackgroundImage />
      <div className="flex flex-col items-center pt-25">
        <h1 className="font-molend text-lg z-10">Velkommen til</h1>
        <Image
          src="/img/logo.png"
          alt="G-BAR"
          width="150"
          height="150"
          className="w-70 z-10"
        />
      </div>
      <section className="flex flex-col justify-center md:items-center mx-10 h-auto gap-4 py-10">
        <h2 className="font-molend text-3xl text-center mr-12 ml-12 mt-10">
          Book Bord gratis!
        </h2>
        <Link
          href="/booking"
          className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center md:w-1/3"
        >
          Book Bord
        </Link>
      </section>
      <section className="flex flex-col mx-10 h-auto gap-4 py-10 ">
        <h3 className="font-molend text-center text-3xl mt-12 ">
          Er du her allerede?
        </h3>
        <div className="flex flex-col gap-8 md:flex-row md:justify-around md:gap-8 md:items-center">
          <Link
            href="/drinks"
            className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center md:w-1/3"
          >
            bestil drinks
          </Link>
          <Link
            href="/"
            className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center md:w-1/3"
            onClick={(e) => {
              e.preventDefault();
              setNotifikation({
                indhold: "Denne funktion er ikke tilgængelig endnu",
                farve: "bg-red-500",
              });
            }}
          >
            Optjen Rabatter
          </Link>
        </div>
      </section>
    </main>
  );
}
