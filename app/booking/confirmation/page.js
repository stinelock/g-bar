import Image from "next/image";

export default function BookingConfirmationPage() {
  return (
    <section>
      <div>
        <Image
          src="/img/silhouette1-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          className="w-24 h-auto mx-auto mt-8 opacity-30 "
        />
        <Image
          src="/img/silhouette2-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          className="w-24 h-auto mx-auto mt-8 opacity-30 "
        />
        <Image
          src="/img/silhouette3-w.png"
          alt="dansende silhouette"
          width="50"
          height="50"
          className="w-24 h-auto mx-auto mt-8 opacity-30 "
        />
      </div>
      <div className="w-full h-auto p-8 bg-white text-black">
        <h1 className="text-black">dit bord er booket!</h1>
        <p>Your booking has been confirmed. Thank you!</p>
      </div>
    </section>
  );
}
