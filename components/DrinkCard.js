"use client";

import { useRouter } from "next/navigation";

export default function DrinkCard({ drink, SeMere, TilføjTilKurv }) {
  const router = useRouter();

  return (
    <div className="border rounded p-4 bg-white shadow text-black flex flex-row bg-white rounded-tr-[30px] rounded-bl-[30px] shadow-xl w-full">
      <img
        src={drink.image}
        alt={drink.name + " image"}
        className="w-24 h-24 object-cover rounded flex-shrink-0"
      />
      <div className="flex flex-col font-helvetica ml-4 flex-1 justify-between min-w-0">
        <div className="flex flex-col items-start min-w-0">
          <h2 className="text-base md:text-lg font-molend truncate w-full">
            {drink.name}
          </h2>
          <p className="mb-1 text-xs truncate w-full">
            {drink.mainIngredients.join(" - ")}
          </p>
          <button
            className="text-gray-600 underline text-left text-xs"
            onClick={() => router.push(`/drinks/${drink.id}`)}
          >
            Se mere
          </button>
        </div>
        <div className="flex flex-col items-end">
          <p className="mb-1 font-molend text-lg md:text-xl whitespace-nowrap">
            {drink.price} Kr
          </p>
          <button
            className="px-3 py-1 bg-light-purple text-white text-xs font-medium font-helvetica whitespace-nowrap"
            onClick={() => TilføjTilKurv(drink)}
          >
            FØJ TIL KURV
          </button>
        </div>
      </div>
    </div>
  );
}
