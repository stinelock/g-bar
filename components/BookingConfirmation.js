"use client";

export default function BookingConfirmation({ bookingData }) {
  return (
    <div className="w-full h-auto p-8 bg-white text-black">
      <h1 className="text-black">dit bord er booket!</h1>
      <p>Your booking has been confirmed. Thank you!</p>
      <p>Name: {bookingData.name}</p>
      <p>Guests: {bookingData.guests}</p>
      <p>Date: {bookingData.formattedDate}</p>
      <p>Comments: {bookingData.comments || "No comments provided."}</p>
    </div>
  );
}
