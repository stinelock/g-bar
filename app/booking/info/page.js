'use client'; //Bruger localStorage

import CTAButton from "@/components/CTAButton";

export default function BookingInfo() {

  const currentBooking = JSON.parse(localStorage.getItem("booking")) || {};

  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <h2 className="md:col-span-2">Booking Oplysninger</h2>
        <div>
          <h3>Adresse</h3>
          <p>G-bar</p>
          <p>Skolegade 28, 8000 Aarhus</p>
        </div>
        <div>
          <h3>Område</h3>
          <p>{currentBooking.type?.name}</p>
        </div>
        <div>
          <h3>Antal gæster</h3>
          <p>{currentBooking.guests} personer</p>
        </div>
        <div>
          <h3>Dato & tid</h3>
          <p>
            {currentBooking.date} kl. {currentBooking.time}
          </p>
        </div>
      </section>
      <section className="mt-8">
        <h2>Personlige oplysninger</h2>
        <p>Log ind og optjen point til rabatter!</p>
        <CTAButton text="Log ind med Google"></CTAButton>
        <CTAButton text="Log ind med FaceBook"></CTAButton>
        <p>Ingen konto?</p>
        <div> Fortsæt som gæst</div>
      </section>
    </>
  );
}
