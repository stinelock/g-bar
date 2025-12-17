"use client";

import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig";
import DrinkCard from "../../components/DrinkCard";
import Cart from "../../components/Cart";
import Notification from "../../components/Notification";
import Filter from "../../components/filter";

export default function DrinksPage() {
  const [drinks, setDrinks] = useState([]);
  const [valgteDrink, setValgteDrink] = useState(null);
  const [kurv, setKurv] = useState([]);
  const [visKurv, setVisKurv] = useState(false); // Kurv pop-up
  const [notifikation, setNotifikation] = useState(null);
  const [valgteTags, setValgteTags] = useState([]); // filter tags
  const alleTags = Array.from(
    new Set(drinks.flatMap((drink) => drink.tags || []))
  ); // alle tags

  const filteredeDrinks =
    valgteTags.length === 0
      ? drinks
      : drinks.filter((drink) =>
          valgteTags.every((tag) => drink.tags && drink.tags.includes(tag))
        );

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
      //eslint-disable-next-line
      setKurv(JSON.parse(gemtKurv));
    }
  }, []);

  //funktion til at tilføje til kurv
  function tilføjTilKurv(drink) {
    console.log("Tilføjer til kurv:", drink.name);
    const opdaterKurv = [...kurv, drink];
    setKurv(opdaterKurv);
    localStorage.setItem("kurv", JSON.stringify(opdaterKurv));
    setNotifikation({
      message: `${drink.name} tilføjet til kurven!`,
      farve: "bg-green-600",
    });
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
      {notifikation && (
        <Notification
          indhold={notifikation.message}
          farve={notifikation.farve}
          vedLuk={() => setNotifikation(null)}
        />
      )}
      <h1 className="text-3xl mb-8 font-molend">Drinks Menu</h1>
      {/* Filter*/}
      <Filter
        alleTags={alleTags}
        valgteTags={valgteTags}
        setValgteTags={setValgteTags}
      />

      <Cart
        kurv={kurv}
        visKurv={visKurv}
        setVisKurv={setVisKurv}
        fjernFraKurv={fjernFraKurv}
        beregnPris={beregnPris}
        tømKurv={tømKurv}
        setKurv={setKurv}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredeDrinks.map((drink) => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            SeMere={setValgteDrink}
            TilføjTilKurv={tilføjTilKurv}
          />
        ))}
      </section>
    </main>
  );
}
