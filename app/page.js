import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative h-[1150px] md:max-w-4xl md:w-3xl md:justify-self-center md:pb-12">
      <BackgroundImage />
      <div className="flex flex-col items-center pt-50">
        <h1 className="font-molend text-lg z-10">Velkommen til</h1>
        <Image
          src="/img/logo.png"
          alt="G-BAR"
          width="150"
          height="150"
          className="w-70 z-10"
        />
      </div>
      <section className="flex flex-col mx-10 my-20 h-auto gap-10 py-20 md:flex-row md:justify-center">
        <Link
          href="/booking"
          className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center md:w-1/3"
        >
          Book Bord
        </Link>
        <Link
          href="/drinks"
          className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center md:w-1/3"
        >
          bestil drinks
        </Link>
      </section>
    </main>
  );
}
