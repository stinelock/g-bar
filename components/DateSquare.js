export default function DateSquare({ date, day, onClick }) {
  const closedDays = ["Søndag", "Mandag", "Tirsdag", "Onsdag"];

  const isClosed = closedDays.includes(day);

  return (
    <div
      className={`h-12 w-auto aspect-square ${
        isClosed ? "text-black bg-white opacity-30" : "bg-light-purple"
      } flex flex-col items-center justify-center cursor-pointer md:h-20 md:w-auto md:aspect-square`}
      onClick={() => !isClosed && onClick({ date, day })}
    >
      <span>{date}</span>
    </div>
  );
}
