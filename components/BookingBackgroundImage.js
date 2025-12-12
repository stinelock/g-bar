"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BookingBackgroundImage() {
  const pathname = usePathname();

  const routeToImageMap = {
    "/booking": "/img/silhouette1-w.png",
    "/booking/guests": "/img/silhouette2-w.png",
    "/booking/date": "/img/silhouette3-w.png",
    "/booking/time": "/img/silhouette1-w.png",
    "/booking/info": "/img/silhouette2-w.png",
  };

  const currentImage = routeToImageMap[pathname] || "/img/silhouette1-w.png";

  if (pathname === "/booking/confirmation") {
    return null;
  }

  return (
    <div className="w-screen h-screen fixed overflow-hidden bottom-0 z-0 md:absolute md:w-auto md:h-5/6 md:bottom-0 md:right-30">
      <Image
        src={currentImage}
        alt="dansende silhouette"
        width="100"
        height="100"
        className="z-0 opacity-10 top-30 relative w-screen md:h-full md:w-full md:right-0 md:top-0"
      />
    </div>
  );
}
