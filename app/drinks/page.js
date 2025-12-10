"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    async function fetchDrinks() {
      const drinksRef = ref(database, "drinks");
      const snapshot = await get(drinksRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        const drinksObjektArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDrinks(drinksObjektArray);
      } else {
        console.log("Vi kunne ikke indlæse dine drinks");
      }
    }
    fetchDrinks();
  }, []);
  return (
    <main className="p-8">
      <h1 className="text-3xl mb-8">Drinks Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="border rounded p-4 bg-white shadow text-black"
          >
            <h2 className="text-xl font-bold mb-2">{drink.name}</h2>
            <p className="mb-1">{drink.description}</p>
            <p className="mb-1">
              <strong>Pris:</strong> {drink.price}
            </p>
            <p className="mb-1">
              <strong>Størrelse:</strong> {drink.size}
            </p>
            <p className="mb-1">
              <strong>Ingredienser:</strong> {drink.ingredients.join(", ")}
            </p>
            <p className="mb-1">
              <strong>Hovedingredienser:</strong>{" "}
              {drink.mainIngredients.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
