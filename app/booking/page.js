"use client";

import { useRouter } from "next/navigation";
import TypeCard from "@/components/TypeCard";

export default function BookingType() {
  const router = useRouter();

  const types = [
    {
      id: 1,
      name: "Standard Bord",
      description: "Rygning ikke tilladt",
      image: "/img/standardbord.png",
      icon: "/img/rygning-nej.png",
    },
    {
      id: 2,
      name: "Opvarmet Tagterrasse",
      description: "Rygning tilladt",
      image: "/img/tagterrasse.jpg",
      icon: "/img/rygning-ja.png",
    },
  ];

  const handleTypeSelect = (type) => {
    localStorage.setItem("booking", JSON.stringify({ type }));

    router.push("/booking/guests");
    console.log("Selected type:", type);
  };

  return (
    <section className="md:flex md:flex-row md:justify-center gap-8 md:gap-12">
      {types.map((type) => (
        <TypeCard
          key={type.id}
          type={type}
          onClick={() => handleTypeSelect(type)}
        />
      ))}
    </section>
  );
}
