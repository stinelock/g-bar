import DateSquare from "./DateSquare";

export default function BookingCalendarGrid({ year, month, onClick }) {
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

  return (
    <section className="grid grid-cols-7 gap-2 w-auto h-auto max-w-lg self-center md:w-auto md:max-w-3xl md:h-auto">
      {[...Array(daysInMonth)].map((_, index) => {
        const date = index + 1;
        const fullDate = new Date(year, month, date);
        const day = weekdays[fullDate.getDay()];

        return (
          <DateSquare key={index} date={date} day={day} onClick={onClick} />
        );
      })}
    </section>
  );
}
