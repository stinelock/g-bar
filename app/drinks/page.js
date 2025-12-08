"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";
import Link from "next/link";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const drinksRef = ref(database, "drinks");
        const snapshot = await get(drinksRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const drinksArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setDrinks(drinksArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching drinks:", error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDrinks();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-8">Drinks Menu</h1>
      {loading ? (
        <p>Loading drinks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="flex flex-col border border-gray-300 p-4 rounded"
            >
              <h2 className="text-xl font-semibold mb-2">{drink.name}</h2>
              <p className="text-sm text-gray-400 mb-2">{drink.description}</p>
              <p className="text-sm mb-2">{drink.size}</p>
              <p className="text-lg font-bold mb-4">${drink.price}</p>
              <button className="mt-auto bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
