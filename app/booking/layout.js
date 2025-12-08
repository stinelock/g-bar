import BookingHeader from "@/components/BookingHeader";
import BookingNav from "@/components/BookingNav";

//Alle undersider under /booking vil bruge denne layout komponent med booking navnavigation

export default function Layout({ children }) {
  return (
    <section className="grid grid-cols-1 ">
    <BookingHeader/>
    <BookingNav />
      <main>{children}</main>
    </section>
  );
}
