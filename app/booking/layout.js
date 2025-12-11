import BookingHeader from "@/components/BookingHeader";
import BookingNav from "@/components/BookingNav";
import PreviousButton from "@/components/PreviousButton";
import Image from "next/image";

//Alle undersider under /booking vil bruge denne layout komponent med booking navnavigation

export default function Layout({ children }) {
  return (
    <section className="grid grid-cols-1 p-8 gap-4 md:max-w-4xl md:w-3xl md:justify-self-center md:pb-12">
      <div className="w-screen h-screen overflow-hidden fixed left-0 bottom-0 z-0">
        <Image
          src="/img/silhouette3-w.png"
          alt="dansende silhouette"
          width="100"
          height="100"
          className="z-0 opacity-10 top-15 relative w-screen md:top-32 md:left-16"
        />
      </div>
      <BookingHeader />
      <BookingNav />
      <main className="z-1">{children}</main>
      <PreviousButton />
    </section>
  );
}
