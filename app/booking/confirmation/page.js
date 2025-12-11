import BookingConfirmation from "@/components/BookingConfirmation";
import Image from "next/image";

export default async function BookingConfirmationPage({ searchParams }) {
const bookingId = await searchParams.bookingId;

const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/bookings/${bookingId}.json`;
const res = await fetch(url);

const bookingData = await res.json();

console.log("Booking data:", bookingData);

  return (
    <section>
      <div className="flex flex-row justify-center">
        <Image
          src="/img/silhouette1-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          loading="eager"
          className="w-24 h-auto mt-8 opacity-30 "
        />
        <Image
          src="/img/silhouette2-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          className="w-24 h-auto mt-8 opacity-30 "
        />
        <Image
          src="/img/silhouette3-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          className="w-24 h-auto mt-8 opacity-30 "
        />
      </div>
      <BookingConfirmation bookingData={bookingData}/>
      
    </section>
  );
}
