"use client";

import Image from "next/image";

export default function BookingConfirmation({ bookingData }) {
  return (
    <div className="w-full h-auto p-8 bg-white text-black">
      <h1 className="text-black">dit bord er booket!</h1>
      <p>{bookingData.date}</p>
      <p>kl. {bookingData.time}</p>
      <Image
        src="/img/check-icon.png"
        alt="check-tegn"
        width="50"
        height="50"
        className="w-40 h-auto mb-4 mx-auto"
      />

      <p>Booket i navn: {bookingData.name}</p>
      <p>Område: {bookingData.type}</p>
      <p>Antal gæster: {bookingData.guests}</p>
      {bookingData.comment ? <p>Kommentarer: bookingData.comment</p> : null}
    </div>
  );
}
