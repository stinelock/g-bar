import BookingConfirmation from "@/components/BookingConfirmation";
import Image from "next/image";

export default async function BookingConfirmationPage({ searchParams }) {
  const params = await searchParams;
  const bookingId = params?.bookingId; // Fjern "await"

  console.log("Booking ID from searchParams:", bookingId);

  if (!bookingId) {
    // Håndter tilfælde, hvor bookingId mangler
    return (
      <section>
        <h1>Invalid booking ID</h1>
        <p>Booking ID is missing or invalid.</p>
      </section>
    );
  }

  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/bookings/${bookingId}.json`;
  const res = await fetch(url);

  const bookingData = await res.json();

  if (!bookingData) {
    // Håndter tilfælde, hvor bookingData er null
    return (
      <section>
        <h1>Booking not found</h1>
        <p>No booking data found for the provided ID.</p>
      </section>
    );
  }

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
      <BookingConfirmation bookingData={bookingData} />
    </section>
  );
}
