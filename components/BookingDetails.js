import { useState, useEffect } from "react";

export default function BookingDetails({}) {
  const [currentBooking, setCurrentBooking] = useState(null);

  useEffect(() => {
    try {
      const bookingData = JSON.parse(localStorage.getItem("booking"));
      if (bookingData) {
        // eslint-disable-next-line
        setCurrentBooking(bookingData);
      } else {
        console.error("Ingen bookingdata fundet i localStorage.");
      }
    } catch (error) {
      console.error("Fejl ved parsing af bookingdata fra localStorage:", error);
    }
  }, []);

    if (!currentBooking) {
      return <p>Ingen bookingdata fundet.</p>;
    }

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-2">
      <h2 className="font-molend text-xl col-span-2">Booking Oplysninger</h2>
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-black">Adresse</h3>
        <p>G-bar, Skolegade 28, 8000 Aarhus</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className="text-lg font-black">Dato & tid</h3>
        <p>
          {currentBooking.date} kl. {currentBooking.time}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-black">Antal gæster</h3>
        <p>{currentBooking.guests} personer</p>
      </div>
      <div>
        <h3 className="text-lg font-black">Område</h3>
        <p>{currentBooking.type}</p>
      </div>
    </section>
  );
}
