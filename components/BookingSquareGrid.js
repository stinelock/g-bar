'use client';

import BookingSquare from "./BookingSquare";

export default function BookingSquareGrid({ page }) {
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
          <BookingSquare key={guest.key} value={guest.value} />
        ))}
      </div>
    );
  } else if (page === "time") {
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

    return (
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
        {values.map((number) => <BookingSquare key={number.key} value={number.value}/>)}
      </div>
    );
  }
}
