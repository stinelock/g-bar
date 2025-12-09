"use client"; // Skal bruge UseState

import BookingCalendarGrid from "./BookingCalendarGrid";
import Image from "next/image";
import React from "react";

export default function BookingCalendar() {
  const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const [currentDate, setCurrentDate] = React.useState(new Date());

  function handlePreviousMonth() {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1, //finder aktuel måned og trækker en fra
        1
      );
      return newDate;
    });
  }

  function handleNextMonth() {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1, //finder aktuel måned og lægger en fra
        1
      );
      return newDate;
    });
  }

  function handleDateSelect({date, day}) {
    const selectedDate = `${day} ${date} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    const existingBooking = JSON.parse(localStorage.getItem("booking")) || {};
    const updatedBooking = { ...existingBooking, date: `${day} ${selectedDate}`};

    localStorage.setItem("booking", JSON.stringify(updatedBooking));

    console.log("Valgt dato:", selectedDate);
  }

  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <section className="grid gap-4 mt-4">
      <div className="flex flex-row justify-between items-center">
        <span>
          <Image
            src="/img/arrow_back_white.png"
            alt="Forrige måned"
            width="20"
            height="20"
            onClick={handlePreviousMonth}
          ></Image>
        </span>
        <h2 className="text-3xl">{`${currentMonth} ${currentYear}`}</h2>
        <span>
          <Image
            src="/img/arrow_forward_white.png"
            alt="Næste måned"
            width="20"
            height="20"
            onClick={handleNextMonth}
          ></Image>
        </span>
      </div>
      <BookingCalendarGrid
        year={currentYear}
        month={currentDate.getMonth()}
        onClick={handleDateSelect}
      />
    </section>
  );
}
