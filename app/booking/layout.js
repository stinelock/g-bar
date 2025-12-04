import BookingNav from "@/components/BookingNav";

//Alle undersider under /booking vil bruge denne layout komponent

export default function Layout({ children }) {
  return (
    <>
      <BookingNav />
      <div>{children}</div>
    </>
  );
}
