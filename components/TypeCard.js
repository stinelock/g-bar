import Link from "next/link";
import Image from "next/image";

export default function TypeCard() {
  return (
    <Link href="/booking/guests">
      <div className="bg-white w-full h-auto mb-10 p-6">
        <div className="w-auto h-auto mb-4 overflow-hidden border border-amber-600 ">
          <Image src="/img/standardbord.png" alt="standard bord" width="200" height="100" className="w-full h-auto object-fill object-center"></Image>
        </div>
        <h2 className="text-black">Standard Bord</h2>
        <p className="text-black"> Rygning tilladt</p>
      </div>
    </Link>
  );
}
