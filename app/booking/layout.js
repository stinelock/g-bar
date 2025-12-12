import BookingBackgroundImage from "@/components/BookingBackgroundImage";
import BookingHeader from "@/components/BookingHeader";
import BookingNav from "@/components/BookingNav";
import PreviousButton from "@/components/PreviousButton";

//Alle undersider under /booking vil bruge denne layout komponent med booking navnavigation

export default function Layout({ children }) {
  return (
    <section className="grid grid-cols-1 p-8 gap-4 md:max-w-4xl md:w-3xl md:justify-self-center md:pb-12">
      <BookingBackgroundImage />
      <BookingHeader />
      <BookingNav />
      <main className="z-1">{children}</main>
      <PreviousButton text="Forrige" />
    </section>
  );
}
