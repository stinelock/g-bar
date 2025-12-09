import BookingSquare from "./BookingSquare";

export default function BookingSquareGrid({ page }) {
  if (page === "guests") {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Rendering BookingSquareGrid for guests");

    return (
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
        {values.map((number) => BookingSquare({ key: number }))}
      </div>
    );

  } else if (page === "time") {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
        {values.map((number) => BookingSquare({ key: number }))}
      </div>
    );
  }
}
