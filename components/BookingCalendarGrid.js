import DateSquare from "./DateSquare";

export default function BookingCalendarGrid({
  year,
  month,
  onClick,
  dateCapacities,
  selectedGuests,
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

  // Formater dato som YYYY-MM-DD uden tidszoneforskydning
  const formatDate = (date) => {
    // Formatér dato som YYYY-MM-DD uden tidszoneforskydning
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
        const fullDate = new Date(Date.UTC(year, month, date));
        const formattedDate = formatDate(fullDate);
        const day = weekdays[fullDate.getDay()];
        const capacity = dateCapacities[formattedDate]?.capacity || 0;

        return (
          <DateSquare
            key={index}
            date={date}
            fullDate={fullDate}
            formattedDate={formattedDate}
            day={day}
            capacity={capacity}
            selectedGuests={selectedGuests}
            onClick={onClick}
          />
        );
      })}
    </section>
  );
}
