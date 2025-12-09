import Link from "next/link";
import Image from "next/image";

export default function TypeCard({ type }) {
  return (
    <Link href="/booking/guests">
      <div className="bg-white w-full h-auto mb-10 p-6 grid grid-cols-1 gap-4">
        <div className="w-auto h-auto mb-4 overflow-hidden">
          <Image
            src={type.image}
            alt="standard bord"
            width="200"
            height="100"
            className="w-full h-auto object-fill object-center"
          ></Image>
        </div>
        <h2 className="text-black">{type.name}</h2>
        <div className="flex flex-row">
          <Image
            src={type.icon}
            alt="rygning tilladt ikon"
            width="30"
            height="30"
          ></Image>
          <p className="text-black ml-4 self-center"> Rygning tilladt</p>
        </div>
      </div>
    </Link>
  );
}
