import BookingCalendar from "@/components/BookingCalendar";


export default async function BookingDatePage() {
  // "use server";
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/capacity.json`;
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
