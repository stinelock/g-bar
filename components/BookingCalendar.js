import BookingCalendarGrid from "./BookingCalendarGrid";
import Image from "next/image";

export default function BookingCalendar() {
  return (
    <section className="grid gap-4 mt-4">
      <div className="flex flex-row justify-between items-center">
        <span>
          <Image
            src="/img/arrow_back_white.png"
            alt="Forrige måned"
            width="20"
            height="20"
          ></Image>
        </span>
        <h2 className="text-3xl">December</h2>
        <span>
          <Image
            src="/img/arrow_forward_white.png"
            alt="Næste måned"
            width="20"
            height="20"
          ></Image>
        </span>
      </div>
      <BookingCalendarGrid />
    </section>
  );
}
