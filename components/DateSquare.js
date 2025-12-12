export default function DateSquare({ date, day, onClick, fullDate, capacity, selectedGuests, formattedDate }) {
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

  return (
    <div
      className={`aspect-square h-auto w-auto p-4 font-molend ${
        isClosed || isPastDate
          ? "text-black bg-white opacity-30"
          : isFullyBooked
          ? "bg-dark-purple text-white hover:bg-light-purple"
          : "bg-white text-black"
      } flex flex-col items-center justify-center cursor-pointer md:h-20 md:w-auto md:aspect-square`}
      onClick={() =>
        !isClosed &&
        !isPastDate &&
        !isFullyBooked &&
        onClick({ date, day, fullDate, formattedDate })
      }
    >
      <span>{date}</span>
    </div>
  );
}
