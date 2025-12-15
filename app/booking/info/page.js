"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import BookingDetails from "@/components/BookingDetails";
import BookingForm from "@/components/BookingForm";
import Notification from "@/components/Notification";

export default function BookingInfoPage() {
  const router = useRouter();
  const [viewForm, setViewForm] = useState(false);
  const [notification, setNotification] = useState(null);

  function handleViewForm() {
    setViewForm(true);
  }

  function handleLoginClick (){
    console.log("Login forsøg");
    setNotification({
      message: "Du kan desværre ikke logge ind endnu. Fortsæt som gæst.",
      farve: "bg-red-500",
    });
     console.log("Notifikation sat:", {
       message: "Du kan desværre ikke logge ind endnu. Fortsæt som gæst.",
       farve: "bg-red-500",
     });
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

      const existingData = await capacityResponse.json();

      if (!existingData) {
        alert("Ingen data fundet for den valgte dag.");
        return;
      }

      const updatedData = {
        capacity: existingData.capacity - selectedGuests,
      };

      // 2. Opdater kapaciteten i Firebase

      const updatedCapacityResponse = await fetch(capacityUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
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
    const bookingUrl = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/bookings.json`;

    try {
      const response = await fetch(bookingUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newBooking,
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const bookingId = await response.json();
        console.log("Booking oprettet med ID:", bookingId);
        localStorage.removeItem("booking");

        router.push(`/booking/confirmation?bookingId=${bookingId.name}`);
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
      {notification && (
        <>
          {console.log("Rendering Notification med:", notification)}
          <Notification
            indhold={notification.message}
            farve={notification.farve}
            vedLuk={() => setNotification(null)}
          />
        </>
      )}
      <BookingDetails />

      <section className="mt-8 w-full flex flex-col gap-1 md:grid md:grid-cols-2 md:gap-x-10">
        <h2 className="font-molend text-xl md:col-span-2">
          Personlige oplysninger
        </h2>

        {!viewForm ? (
          <>
            <div className="flex flex-col w-full ">
              <p className="my-3">Log ind og optjen rabatpoint!</p>
              <CTAButton
                text="Log ind med Google"
                onClick={handleLoginClick}
              ></CTAButton>
              <CTAButton
                text="Log ind med FaceBook"
                onClick={handleLoginClick}
              ></CTAButton>
            </div>
            <div>
              <p className="text-center my-3 md:text-left">Ingen konto?</p>
              <button
                className="px-6 py-3 bg-white text-black w-full font-bold uppercase"
                onClick={handleViewForm}
              >
                {" "}
                Fortsæt som gæst
              </button>
            </div>
          </>
        ) : (
          <div className="col-span-2" s>
            <div
              className="flex flex-row items-center my-5 cursor-pointer"
              onClick={() => setViewForm(false)}
            >
              <Image
                src="/img/arrow_back_white.png"
                alt="Tilbage"
                width="30"
                height="30"
                style={{ cursor: "pointer" }}
              />
              <p>Skift til log ind</p>
            </div>
            <BookingForm action={handleConfirm} />
          </div>
        )}
      </section>
    </>
  );
}
