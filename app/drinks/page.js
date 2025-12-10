"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";
import DrinkCard from "../../components/DrinkCard";
import Cart from "../../components/Cart";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  const [valgteDrink, setValgteDrink] = useState(null);
  const [kurv, setKurv] = useState([]);
  const [visKurv, setVisKurv] = useState(false); // Kurv pop-up

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

  //funktionen til at indlæse kurv
  useEffect(() => {
    let gemtKurv = localStorage.getItem("kurv");
    if (gemtKurv) {
      setKurv(JSON.parse(gemtKurv));
    }
  }, []);

  //funktion til at tilføje til kurv
  function tilføjTilKurv(drink) {
    console.log("Tilføjer til kurv:", drink.name);
    const opdaterKurv = [...kurv, drink];
    setKurv(opdaterKurv);
    localStorage.setItem("kurv", JSON.stringify(opdaterKurv));
    alert(`${drink.name} tilføjet til kurven!`);
  }

  //fjern drink fra kurv
  function fjernFraKurv(index) {
    const opdaterKurv = kurv.filter((_, i) => i !== index);
    setKurv(opdaterKurv);
    localStorage.setItem("kurv", JSON.stringify(opdaterKurv));
  }

  function beregnPris() {
    return kurv.reduce((total, item) => total + item.price, 0);
  }

  function tømKurv() {
    setKurv([]);
    localStorage.removeItem("kurv");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl mb-8">Drinks Menu</h1>

      <Cart
        kurv={kurv}
        visKurv={visKurv}
        setVisKurv={setVisKurv}
        fjernFraKurv={fjernFraKurv}
        beregnPris={beregnPris}
        tømKurv={tømKurv}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            SeMere={setValgteDrink}
            TilføjTilKurv={tilføjTilKurv}
          />
        ))}
      </section>
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
              <strong>Pris:</strong> {valgteDrink.price} DKK
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
              onClick={() => tilføjTilKurv(valgteDrink)}
            >
              Tilføj til kurv
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
