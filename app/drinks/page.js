"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";

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

      <section className="border rounded p-4 bg-white shadow text-black">
        {/*Kurv knap*/}
        <button
          className="bg-purple-600 text-white rounded px-4 py-2 w-full flex justify-between items-center"
          onClick={() => setVisKurv(!visKurv)}
        >
          Kurven <div className="bg-dark-purple rounded w-5">{kurv.length}</div>
        </button>
        {/*Kurv åbnet*/}
        {visKurv && (
          <section className="">
            <div className="mt-4 mb-2">
              <h2 className="text-2xl mb-4">Din Kurv</h2>
              {kurv.length === 0 ? (
                <p>Kurven er tom</p>
              ) : (
                <>
                  <ul>
                    {kurv.map((item, index) => (
                      <li
                        key={index}
                        className="mb-2 border-b pb-2 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-sm font-semibold">
                            {item.price} Kr
                          </p>
                        </div>
                        <button
                          className="text-red-600 text-sm"
                          onClick={() => fjernFraKurv(index)}
                        >
                          Fjern
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xl font-bold">
                      Total: {beregnPris()} DKK
                    </p>
                  </div>

                  <button
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded w-full"
                    onClick={() => alert("Ikke sat op endnu")}
                  >
                    Gå til betaling
                  </button>

                  <button
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded w-full"
                    onClick={tømKurv}
                  >
                    Tøm kurv
                  </button>
                </>
              )}

              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded w-full"
                onClick={() => setVisKurv(false)}
              >
                Luk Kurv
              </button>
            </div>
          </section>
        )}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <strong>Pris:</strong> {drink.price} DKK{" "}
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
                onClick={() => tilføjTilKurv(drink)}
              >
                Tilføj til kurv
              </button>
            </div>
          </div>
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
