import DateSquare from "./DateSquare";

export default function BookingCalendarGrid({
  year,
  month,
  onClick,
  dateCapacities,
}) {
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const weekdays = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  return (
    <section className="grid grid-cols-7 gap-2 w-auto h-auto max-w-lg self-center md:w-auto md:max-w-3xl md:h-auto">
      <p className="text-center">Ma</p>
      <p className="text-center">Ti</p>
      <p className="text-center">On</p>
      <p className="text-center">To</p>
      <p className="text-center">Fr</p>
      <p className="text-center">Lø</p>
      <p className="text-center">Sø</p>

      {/* Tomme pladser før den første dag i måneden */}
      {[...Array((firstDayOfMonth + 6) % 7)].map((_, index) => (
        <div
          key={`empty-${index}`}
          className="h-12 w-auto md:h-20 md:w-auto"
        ></div>
      ))}

      {[...Array(daysInMonth)].map((_, index) => {
        const date = index + 1;
        const fullDate = new Date(year, month, date);
        const day = weekdays[fullDate.getDay()];
        const capacity = dateCapacities[fullDate]?.capacity || 0;

        return (
          <DateSquare
            key={index}
            date={date}
            fullDate={fullDate}
            day={day}
            capacity={capacity}
            onClick={onClick}
          />
        );
      })}
    </section>
  );
}
