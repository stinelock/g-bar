import BookingHeader from "@/components/BookingHeader";
import BookingNav from "@/components/BookingNav";
import PreviousButton from "@/components/PreviousButton";

//Alle undersider under /booking vil bruge denne layout komponent med booking navnavigation

export default function Layout({ children }) {
  return (
    <section className="grid grid-cols-1 p-8 gap-4 md:px-50 md:pb-12">
      <BookingHeader />
      <BookingNav />
      <main>{children}</main>
      <PreviousButton />
    </section>
  );
}
