"use client";

import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { database } from "../../firebaseConfig";

export default function DrinksDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [valgteDrink, setValgteDrink] = useState(null);

  useEffect(() => {
    async function fetchDrink() {
      if (!params.id) return;

      const drinkRef = ref(database, `drinks/${params.id}`);
      const snapshot = await get(drinkRef);
      if (snapshot.exists()) {
        setValgteDrink({
          id: params.id,
          ...snapshot.val(),
        });
      }
    }

    fetchDrink();
  }, [params.id]);

  return (
    <main className="p-8">
      {valgteDrink && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full h-full text-black">
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => router.back()}
            >
              ←
            </button>
            <h2 className="text-xl font-bold mb-4">{valgteDrink.name}</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <img
                src={valgteDrink.image}
                alt={valgteDrink.name + " image"}
                className="w-full sm:w-48 h-auto object-cover rounded mb-4 sm:mb-0"
                style={{ maxWidth: '300px' }}
              />
              <div className="flex-1">
                <p className="mb-2">{valgteDrink.description}</p>
                <p className="mb-1"><strong>Pris:</strong> {valgteDrink.price} DKK</p>
                <p className="mb-1"><strong>Størrelse:</strong> {valgteDrink.size}</p>
                <p className="mb-1"><strong>Ingredienser:</strong> {valgteDrink.ingredients?.join(", ")}</p>
                <p className="mb-1"><strong>Hovedingredienser:</strong> {valgteDrink.mainIngredients?.join(", ")}</p>
                <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded w-full sm:w-auto">
                  Tilføj til kurv
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
