export default function DateSquare({ date, day, onClick, fullDate, capacity }) {
  const closedDays = ["Søndag", "Mandag", "Tirsdag", "Onsdag"];

  const isClosed = closedDays.includes(day);

  const today = new Date();
  const givenDate = new Date(fullDate);
  const isPastDate = givenDate < today.setHours(0, 0, 0, 0);

  const isFullyBooked = capacity <= 0;

  return (
    <div
      className={`h-12 w-auto aspect-square ${
        isClosed || isPastDate
          ? "text-black bg-white opacity-30"
          : isFullyBooked
          ? "bg-red-800 text-white hover:bg-red-700"
          : "bg-white text-black hover:bg-red-600"
      } flex flex-col items-center justify-center cursor-pointer md:h-20 md:w-auto md:aspect-square`}
      onClick={() => !isClosed && !isPastDate && !isFullyBooked && onClick({ date, day, fullDate })}
    >
      <span>{date}</span>
    </div>
  );
}
