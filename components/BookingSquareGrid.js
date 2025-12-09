"use client"; //Bruger localStorage

import { useRouter } from "next/navigation";
import BookingSquare from "./BookingSquare";

export default function BookingSquareGrid({ page }) {
  const router = useRouter();

  function handleSelectedValue(value) {
    const existingBooking = JSON.parse(localStorage.getItem("booking")) || {};
    const updatedBooking = { ...existingBooking, [page]: value.value };

    localStorage.setItem("booking", JSON.stringify(updatedBooking));

    console.log(`Selected ${page}:`, value.value);

    if (page === "guests") {
      router.push("/booking/date");
    } else if (page === "time") {
      router.push("/booking/info");
    }
  }

  if (page === "guests") {
    const values = [
      { key: 2, value: 2 },
      { key: 3, value: 3 },
      { key: 4, value: 4 },
      { key: 5, value: 5 },
      { key: 6, value: 6 },
      { key: 7, value: 7 },
      { key: 8, value: 8 },
      { key: 9, value: 9 },
      { key: 10, value: 10 },
    ];
    console.log("Rendering BookingSquareGrid for guests");

    return (
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
        {values.map((guest) => (
          <BookingSquare
            key={guest.key}
            value={guest.value}
            onClick={() => handleSelectedValue(guest)}
          />
        ))}
      </div>
    );
  } else if (page === "time") {
    const startHour = 19;
    const endHour = 22;
    const intervalMinutes = 30;

    const values = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minutes = 0; minutes < 60; minutes += intervalMinutes) {
        if (hour === endHour && minutes > 0) break; // Stop ved sidste timepunkt (22:00)
        const timeString = `${hour.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`;
        values.push({ key: timeString, value: timeString });
      }
    }

    return (
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
        {values.map((time) => (
          <BookingSquare
            key={time.key}
            value={time.value}
            onClick={() => handleSelectedValue(time)}
          />
        ))}
      </div>
    );
  }
}
