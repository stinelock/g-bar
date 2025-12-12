"use client";

import Image from "next/image";

export default function BookingConfirmation({ bookingData }) {
  return (
    <div className="w-full h-auto p-8 bg-white text-black flex flex-col">
      <h1 className="text-black text-center text-3xl">dit bord er booket!</h1>
      <p>
        {bookingData.date} kl. {bookingData.time}
      </p>
      <Image
        src="/img/check-icon.png"
        alt="check-tegn"
        width="50"
        height="50"
        className="w-40 h-auto mb-10 mt-8 mx-auto"
      />
      <div className="grid grid-cols-2 gap-2">
        <p className="font-bold">Booket i navn:</p>
        <p className="text-left">{bookingData.name}</p>
        <p className="font-bold">Område: </p>
        <p className="text-left">{bookingData.type}</p>
        <p className="font-bold">Antal gæster:</p>
        <p className="text-left">{bookingData.guests}</p>
        {bookingData.comment ? <p>Kommentarer: bookingData.comment</p> : null}
        <div className="col-span-2 text-xs mt-8">
          <p>Medbring relevant ID</p>
          <p>Det er forbudt at medbringe væske og umarkeret medicin.</p>
        </div>
      </div>
    </div>
  );
}
