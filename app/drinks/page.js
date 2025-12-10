"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  const [valgteDrink, setValgteDrink] = useState(null);

  useEffect(() => {
    async function fetchDrinks() {
      const drinksRef = ref(database, "drinks");
      const snapshot = await get(drinksRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data); // for at teste firebase data bliver hentet korrekt
        const drinksObjektArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDrinks(drinksObjektArray);
      } else {
        console.log("Vi kunne ikke indlæse dine drinks"); // fejlbesked hvis data ikke findes
      }
    }
    fetchDrinks();
  }, []);

  function tilføjTilKurv() {
    console.log("Tilføj til kurv funktion kaldt");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-8">Drinks Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {/* Drink kortet indhold */}
        {drinks.map((drink) => (
          <div
            key={drink.id}
            className="border rounded p-4 bg-white shadow text-black"
          >
            {console.log(drink.image)}
            <img
              src={drink.image}
              alt={drink.name + " image"}
              className="w-32 h-32 object-cover mb-2 rounded"
            />{" "}
            {/* hader de gule linjer, next forsår Image komponent */}
            <h2 className="text-xl font-bold mb-2">{drink.name}</h2>
            <p className="mb-1">{drink.description}</p>
            <p className="mb-1">
              <strong>Pris:</strong> {drink.price}{" "}
              {/* FJERN INDEN DEPLOY, KUN FOR AT JEG KAN SE HVILKEN INFO DER ER VIST */}
            </p>
            <p className="mb-1">
              <strong>Hovedingredienser:</strong>{" "}
              {/* FJERN INDEN DEPLOY, KUN FOR AT JEG KAN SE HVILKEN INFO DER ER VIST */}
              {drink.mainIngredients.join(", ")}
            </p>
            <div className="flex flex-col">
              <button
                className="text-black-600 underline w-32 self-start"
                onClick={() => setValgteDrink(drink)}
              >
                Se mere -&gt;
              </button>
              <button
                className="bg-purple-600 text-white rounded px-4 py-2 mt-2 w-32 self-end"
                onClick={() => tilføjTilKurv()}
              >
                Tilføj til kurv
              </button>
            </div>
          </div>
        ))}
      </div>
      {valgteDrink && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full h-full text-black">
            {" "}
            {/* Drink detalje side*/}
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => setValgteDrink(null)}
            >
              ←
            </button>
            <img
              src={valgteDrink.image}
              alt={valgteDrink.name + " image"}
              className="w-32 h-32 object-cover mb-2 rounded mx-auto"
            />
            <h2 className="text-xl font-bold mb-2">{valgteDrink.name}</h2>
            <p className="mb-1">
              <strong>Pris:</strong> {valgteDrink.price}
            </p>
            <p className="mb-1">
              <strong>Størrelse:</strong> {valgteDrink.size}{" "}
              {/* FJERN INDEN DEPLOY, KUN FOR AT JEG KAN SE HVILKEN INFO DER ER VIST */}
            </p>
            <p className="mb-1">
              <strong>Ingredienser:</strong>{" "}
              {/* FJERN INDEN DEPLOY, KUN FOR AT JEG KAN SE HVILKEN INFO DER ER VIST */}
              {valgteDrink.ingredients.join(", ")}
            </p>
            <p className="mb-1">
              <strong>Hovedingredienser:</strong>{" "}
              {/* FJERN INDEN DEPLOY, KUN FOR AT JEG KAN SE HVILKEN INFO DER ER VIST */}
              {valgteDrink.mainIngredients.join(", ")}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => tilføjTilKurv()}
            >
              Tilføj til kurv
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
