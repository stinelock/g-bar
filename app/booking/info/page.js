"use client";

import { useState } from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import BookingDetails from "@/components/BookingDetails";
import BookingForm from "@/components/BookingForm";

export default function BookingInfoPage() {
const [viewForm, setViewForm] = useState(false);
 
  function handleViewForm (){
   setViewForm(true);
  }

  function handleConfirm(){
    console.log("Booking confirmed!");
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
