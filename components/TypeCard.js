import Image from "next/image";

export default function TypeCard({ type, onClick }) {
  return (
    <div className="bg-white w-full h-auto mb-10 p-6 grid grid-cols-1 gap-4 md:max-w-md"
    onClick={onClick}>
      <div className="w-auto h-auto mb-4 overflow-hidden">
        <Image
          src={type.image}
          alt="standard bord"
          width="200"
          height="100"
          className="w-full h-auto object-fill object-center"
        ></Image>
      </div>
      <h2 className="text-black text-2xl md:text-2xl font-molend">{type.name}</h2>
      <div className="flex flex-row gap-4 items-center">
        <Image
          src={type.icon}
          alt="rygning tilladt ikon"
          width="30"
          height="30"
          className="w-auto h-8"
        ></Image>
        <p className="text-black self-center"> Rygning tilladt</p>
      </div>
    </div>
  );
}
