// import { useRouter } from "next/navigation";
import BookingSquareGrid from "@/components/BookingSquareGrid";

export default function BookingGuests() {
// const router = useRouter();

  return (
    <section className="flex justify-center">
      <BookingSquareGrid page="guests"/>
    </section>
  );
}
