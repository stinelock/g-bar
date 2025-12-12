import BackgroundImage from "@/components/BackgroundImage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <BackgroundImage />
      <div className="flex flex-col items-center mt-20">
        <h1 className="font-molend text-lg z-10">Velkommen til</h1>
        <Image
          src="/img/logo.png"
          alt="G-BAR"
          width="150"
          height="150"
          className="w-70 z-10"
        />
      </div>
      <section className="flex flex-col mx-10 my-20 h-auto gap-10">
        <Link
          href="/booking"
          className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center"
        >
          Book Bord
        </Link>
        <Link
          href="/drinks"
          className="bg-white z-10 text-black flex px-4 py-3 font-molend justify-center"
        >
          bestil drinks
        </Link>
      </section>
    </main>
  );
}
