export default function BookingCalendarGrid() {


    return (
      <section className="grid grid-cols-7 gap-2 w-auto h-auto max-w-lg self-center">
        {[...Array(31)].map((_, index) => (
          <div
            key={index}
            className="h-12 w-auto aspect-square border border-gray-300 flex items-center justify-center"
          >
            {index + 1}
          </div>
        ))}
      </section>
    );
}