import BookingCalendar from "@/components/BookingCalendar";


export default async function BookingDatePage() {
  const url =
    "https://g-bar-2d8b9-default-rtdb.europe-west1.firebasedatabase.app/dateCapacities.json";
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch date capacity");
  }

  const dateCapacities = await res.json();

  return (
    <section className="flex flex-col gap-4 mt-8 justify-self-center md:w-full">
      <BookingCalendar dateCapacities={dateCapacities} />
    </section>
  );
}
