"use client";

import Cart from "@/components/Cart";
import { useState, useEffect } from "react";

export default function DrinksCheckoutPage() {
  const [kurv, setKurv] = useState([]);
  const [visKurv, setVisKurv] = useState(false);
  const [kurvenErTom, setkurvenErTom] = useState(true);
  const [betalingÅben, setBetalingÅben] = useState(false);

  useEffect(() => {
    let gemtKurv = localStorage.getItem("kurv");
    if (gemtKurv) {
      setKurv(JSON.parse(gemtKurv));
    }
    setkurvenErTom(false);
    console.log({ gemtKurv });
  }, []);

  function fjernFraKurv(index) {
    const opdaterKurv = kurv.filter((_, i) => i !== index);
    setKurv(opdaterKurv);
    localStorage.setItem("kurv", JSON.stringify(opdaterKurv));
  }

  function beregnPris() {
    return kurv.reduce((total, item) => total + (item.price || 0), 0);
  }

  function tømKurv() {
    setKurv([]);
    localStorage.removeItem("kurv");
  }

  if (kurvenErTom && kurv.length === 0) {
    return (
      <div>
        <p>Kurven er tom!</p>
        <button onClick={() => (window.location.href = "/drinks")}>
          Gå til drinks
        </button>
      </div>
    );
  }

  if (!betalingÅben) {
    return (
      <>
        <main>
          <h1>Drinks Checkout page</h1>
          <Cart
            kurv={kurv}
            visKurv={visKurv}
            setVisKurv={setVisKurv}
            fjernFraKurv={fjernFraKurv}
            beregnPris={beregnPris}
            tømKurv={tømKurv}
            setKurv={setKurv}
          />
          {/*vælg betalingsmetode*/}
          <section className="pt-4">
            <h2
              className="text-2xl mb-4 font-molend bg-white text-black flex justify-center p-4 "
              onClick={() => setBetalingÅben(true)}
            >
              Vælg betalingsmetode
            </h2>
            <div className="mt-4 pt-4">
              <p className="text-xl font-molend">
                Samlet Pris: {beregnPris()} Kr
              </p>
            </div>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <main>
        <p>Wow, du er så sej</p>
        <button
          onClick={() => setBetalingÅben(false)}
          className="bg-white text-black"
        >
          Tilbage til checkout
        </button>
      </main>
    );
  }
}
