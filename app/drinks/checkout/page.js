"use client";

import Cart from "@/components/Cart";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Notification from "@/components/Notification";
import BookingBackgroundImage from "@/components/BookingBackgroundImage";

export default function DrinksCheckoutPage() {
  const router = useRouter();
  const [kurv, setKurv] = useState([]);
  const [visKurv, setVisKurv] = useState(false);
  const [kurvenErTom, setkurvenErTom] = useState(true);
  const [betalingÅben, setBetalingÅben] = useState(false);
  const [betalingValgt, setBetalingValgt] = useState(false);
  const [notifikation, setNotifikation] = useState(null);
  const [valgtMetode, setValgtMetode] = useState("Vælg betalingsmetode");
  const [betalingsFejl, setBetalingsFejl] = useState(false);

  useEffect(() => {
    let gemtKurv = localStorage.getItem("kurv");
    if (gemtKurv) {
      //eslint-disable-next-line
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
      <main className="relative min-h-screen">
        <div className="fixed inset-0 bg-[url('/img/silhouette2-w.png')] bg-cover bg-right bg-no-repeat opacity-20 -z-10 -scale-x-100 mt-35"></div>
        {notifikation && (
          <Notification
            indhold={notifikation.indhold}
            farve={notifikation.farve}
            vedLuk={() => setNotifikation(null)}
          />
        )}
        <main>
          <img
            src="/img/arrow-white.png"
            alt="tilbage"
            className="max-w-[7vw] pb-5 ml-5 mt-5 "
            onClick={() => router.back()}
          />
          <div className="w-85 mx-auto">
            <Cart
              kurv={kurv}
              visKurv={visKurv}
              setVisKurv={setVisKurv}
              fjernFraKurv={fjernFraKurv}
              beregnPris={beregnPris}
              tømKurv={tømKurv}
              setKurv={setKurv}
            />
          </div>
          {/*vælg betalingsmetode knap*/}
          <section className="pt-4 w-85 mx-auto">
            <div
              className={`text-xl mb-4 font-helvetica font-medium bg-white text-black flex justify-between p-4 ${
                betalingsFejl ? "border-3 border-red-500" : ""
              }`}
              onClick={() => {
                setBetalingÅben(true);
                setBetalingsFejl(false);
              }}
            >
              <h2>{valgtMetode}</h2>
              <img
                src="/img/credit-card.png"
                alt="kort"
                className="w-7 h-auto"
              />
            </div>
            <div>
              <p className="font-semibold mb-2 mt-10 font-helvetica">
                Modtag SMS når din bestilling er klar!
              </p>
              <p className="font-helvetica font-medium text-sm mb-2">
                Indtast dit telefonnummer
              </p>

              <input
                type="text"
                placeholder="+45 "
                className="w-full p-3 mb-6 font-helvetica text-black"
              />
            </div>
            <div className="mt-4 pt-4 flex justify-between items-center">
              <p className="text-xl font-molend">Samlet Pris</p>
              <p className="text-3xl font-molend">{beregnPris()} Kr</p>
            </div>
            <button
              className="px-6 py-3 bg-light-purple text-white text-lg font-bold w-full font-helvetica mt-6"
              onClick={() => {
                if (betalingValgt === false) {
                  console.log("Betaling ikke valgt");
                  setBetalingsFejl(true);
                  setNotifikation({
                    indhold: "Vælg venligst en betalingsmetode",
                    farve: "bg-red-500",
                  });
                } else {
                  router.push("/drinks/checkout/confirmation");
                  tømKurv();
                }
              }}
            >
              Betal
            </button>
          </section>
        </main>
      </main>
    );
  } else {
    return (
      <>
        <main>
          <img
            src="/img/arrow-white.png"
            alt="tilbage"
            className="max-w-[7vw] pb-10"
            onClick={() => router.back()}
          />
          <div className="w-85 mx-auto">
            <Cart
              kurv={kurv}
              visKurv={visKurv}
              setVisKurv={setVisKurv}
              fjernFraKurv={fjernFraKurv}
              beregnPris={beregnPris}
              tømKurv={tømKurv}
              setKurv={setKurv}
            />
          </div>
        </main>

        {/*Betalings pop up*/}
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4"
          onClick={() => setBetalingÅben(false)}
        >
          <div
            className="bg-white rounded-tr-[30px] rounded-bl-[30px] shadow-xl max-w-md w-full max-h-[80vh] p-6 text-black relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600"
              onClick={() => setBetalingÅben(false)}
            >
              ×
            </button>
            <h2 className="text-2xl mb-4 font-molend">{valgtMetode}</h2>

            {/*Betalingmuligheder*/}
            <div className="space-y-4">
              <button
                className={`w-full p-4 border-2 font-helvetica ${
                  valgtMetode === "Kreditkort"
                    ? "bg-black text-white border-black"
                    : "border-gray-400"
                }`}
                onClick={() => {
                  setValgtMetode("Kreditkort");
                  setBetalingValgt(true);
                  console.log("Kreditkort valgt");
                }}
              >
                Kreditkort
              </button>
              <button
                className={`w-full p-4 border-2 font-helvetica ${
                  valgtMetode === "MobilePay"
                    ? "bg-black text-white border-black"
                    : "border-gray-400"
                }`}
                onClick={() => {
                  setValgtMetode("MobilePay");
                  setBetalingValgt(true);
                  console.log("MobilePay valgt");
                }}
              >
                MobilePay
              </button>
              <button
                className={`w-full p-4 border-2 font-helvetica ${
                  valgtMetode === "Saldo"
                    ? "bg-black text-white border-black"
                    : "border-gray-400"
                }`}
                onClick={() => {
                  setValgtMetode("Saldo");
                  setBetalingValgt(true);
                  console.log("Saldo valgt");
                }}
              >
                Saldo
              </button>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-light-purple text-white w-full font-semibold"
              onClick={() => {
                setBetalingÅben(false);
                setNotifikation(null);
              }}
            >
              Bekræft
            </button>
          </div>
        </div>
      </>
    );
  }
}
