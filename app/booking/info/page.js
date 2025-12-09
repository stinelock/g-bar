"use client";

import CTAButton from "@/components/CTAButton";
import BookingDetails from "@/components/BookingDetails";

export default function BookingInfoPage() {
 

  return (
    <>
      <BookingDetails />
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
