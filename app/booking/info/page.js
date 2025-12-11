"use client";

import { useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import BookingDetails from "@/components/BookingDetails";
import BookingForm from "@/components/BookingForm";

export default function BookingInfoPage() {
  const [viewForm, setViewForm] = useState(false);
  const bookingUrl = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/bookings.json`;

  function handleViewForm() {
    setViewForm(true);
  }

  function getLocalStorageBooking() {
    if (typeof window !== "undefined") {
      const bookingData = localStorage.getItem("booking");
      return bookingData ? JSON.parse(bookingData) : null;
    }
    return null;
  }

  async function handleConfirm(formData) {
    const localStoragebooking = getLocalStorageBooking();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const comments = formData.get("comments");

    const newBooking = {
      ...localStoragebooking,
      name,
      phone,
      email,
      comments,
    };

    const selectedDate = localStoragebooking?.formattedDate;
    const selectedGuests = localStoragebooking?.guests;

    if (!selectedDate) {
      alert("ingen date fundet");
      return;
    }

    try {
      // 1. Hent kapacitet for den valgte dag
      const capacityUrl = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/capacity/${selectedDate}.json`;
      const capacityResponse = await fetch(capacityUrl);

      if (!capacityResponse.ok) {
        throw new Error("Kunne ikke hente kapacitet for den valgte dag.");
      }

      
      const currentCapacity = await capacityResponse.json();
  
      if (currentCapacity === null) {
        alert("ingen kapacitet fundet for den valgte dag");
        return;
      }

      // 2. Opdater kapaciteten i Firebase
      const capacity = currentCapacity - selectedGuests;
      

      const updatedCapacityResponse = await fetch(capacityUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({capacity}),
      });

      if (!updatedCapacityResponse.ok) {
        throw new Error("Kunne ikke opdatere kapacitet i Firebase");
      }
    } catch (error) {
      console.error("Fejl:", error);
      alert("Der opstod en fejl. Prøv igen senere.");
      return;
    }

    // 3. Gem den nye booking i Firebase
    try {
      const response = await fetch(bookingUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newBooking,
          createdAt: new Date().toISOString(), // Tilføj tidsstempel
        }),
      });

      if (response.ok) {
        console.log("Booking gemt:", newBooking);
        alert("Din booking er blevet gemt!");
      } else {
        console.error("Fejl ved oprettelse af booking");
        alert(
          "Der opstod en fejl ved oprettelse af din booking. Prøv igen senere."
        );
      }
    } catch (error) {
      console.error("Netværksfejl:", error);
      alert("Der opstod en netværksfejl. Prøv igen senere.");
    }
  }

  return (
    <>
      <BookingDetails />
      <section className="mt-8">
        <h2>Personlige oplysninger</h2>

        {!viewForm ? (
          <>
            <p>Log ind og optjen point til rabatter!</p>
            <CTAButton text="Log ind med Google"></CTAButton>
            <CTAButton text="Log ind med FaceBook"></CTAButton>
            <p>Ingen konto?</p>
            <button
              className="px-6 py-3 border border-white"
              onClick={handleViewForm}
            >
              {" "}
              Fortsæt som gæst
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center my-5">
              <Image
                src="/img/arrow_back_white.png"
                alt="Tilbage"
                width="30"
                height="30"
                onClick={() => setViewForm(false)}
                style={{ cursor: "pointer" }}
              />
              <p>Skift til log ind</p>
            </div>
            <BookingForm action={handleConfirm} />
          </>
        )}
      </section>
    </>
  );
}
