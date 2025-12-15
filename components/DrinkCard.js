"use client";

import { useRouter } from "next/navigation";

export default function DrinkCard({ drink, SeMere, TilføjTilKurv }) {
  const router = useRouter();

  return (
    <div className="border rounded p-4 bg-white shadow text-black flex flex-row">
      <img
        src={drink.image}
        alt={drink.name + " image"}
        className="w-[25vw] h-auto object-cover mb-2 rounded"
      />
      <div className="flex flex-col font-helvetica ml-4">
        <div className="flex flex-col items-start">
          <h2 className="font-bold font-molend text-lg whitespace-nowrap max-w-full">
            {drink.name}
          </h2>
          <p className="mb-1 text-sm">{drink.mainIngredients.join(" - ")}</p>
          <button
            className="text-black-600 underline w-32 text-left"
            onClick={() => router.push(`/drinks/${drink.id}`)}
          >
            Se mere
          </button>
        </div>
        <div className="flex flex-col items-end">
          <p className="mb-1 font-molend">{drink.price} Kr</p>
          <button
            className="bg-purple-600 text-white px-4 py-2 mt-2 w-32 self-end"
            onClick={() => TilføjTilKurv(drink)}
          >
            Tilføj til kurv
          </button>
        </div>
      </div>
    </div>
  );
}
