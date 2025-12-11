export default function DateSquare({ date, day, onClick, fullDate, capacity, selectedGuests }) {
  const closedDays = ["Søndag", "Mandag", "Tirsdag", "Onsdag"];

  const isClosed = closedDays.includes(day);

  const today = new Date();
  const givenDate = new Date(
    Date.UTC(
      fullDate.getUTCFullYear(),
      fullDate.getUTCMonth(),
      fullDate.getUTCDate()
    )
  );
  const isPastDate = givenDate < today.setHours(0, 0, 0, 0);

  const isFullyBooked = capacity <= 0 || capacity < selectedGuests;

    console.log(`DateSquare - Date: ${date}, Day: ${day}, FullDate: ${fullDate}, Capacity: ${capacity}, SelectedGuests: ${selectedGuests}`);

  return (
    <div
      className={`h-12 w-auto aspect-square ${
        isClosed || isPastDate
          ? "text-black bg-white opacity-30"
          : isFullyBooked
          ? "bg-red-800 text-white hover:bg-red-700"
          : "bg-white text-black"
      } flex flex-col items-center justify-center cursor-pointer md:h-20 md:w-auto md:aspect-square`}
      onClick={() =>
        !isClosed &&
        !isPastDate &&
        !isFullyBooked &&
        onClick({ date, day, fullDate })
      }
    >
      <span>{date}</span>
    </div>
  );
}
