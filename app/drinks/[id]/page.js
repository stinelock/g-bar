"use client";

import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { database } from "../../firebaseConfig";
import Notification from "@/components/Notification";
import AntalTilKurv from "@/components/AntalTilKurv";

export default function DrinksDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [valgteDrink, setValgteDrink] = useState(null);
  const [count, setCount] = useState(1);
  const [notifikation, setNotifikation] = useState(null);

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

  function tilføjTilKurv() {
    console.log("tilføjet:", valgteDrink.name, count);
    //Check om der er noget i kurven / hent kurven
    let kurv = JSON.parse(localStorage.getItem("kurv")) || [];
    //check om denne drink er i kurven, gentager for hver item i kurven
    let erIKurven = false;
    for (let i = 0; i < kurv.length; i++) {
      if (kurv[i].id === valgteDrink.id) {
        kurv[i].quantity = (kurv[i].quantity || 1) + count;
        erIKurven = true;
        break;
      }
    }
    if (!erIKurven) {
      kurv.push({ ...valgteDrink, quantity: count });
    }
    localStorage.setItem("kurv", JSON.stringify(kurv));
  }

  return (
    <main className="p-8">
      {notifikation && (
        <Notification
          indhold={notifikation.indhold}
          farve={notifikation.farve}
          vedLuk={() => setNotifikation(null)}
        />
      )}
      {valgteDrink && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#ffffff] p-6 rounded shadow-lg max-w-md w-full h-full text-black flex flex-col">
            <img
              src="/img/arrow-left.png"
              alt="tilbage"
              className="max-w-[7vw] pb-10"
              onClick={() => router.back()}
            />
            <h2 className="text-[8vw] font-molend mb-8">{valgteDrink.name}</h2>
            <div className="flex flex-row">
              <img
                src={valgteDrink.image}
                alt={valgteDrink.name + " image"}
                className="w-full h-auto object-cover max-w-[40vw] mr-4"
              />
              <div className="flex flex-col">
                <div className="mb-1 ml-2">
                  <strong className="font-bold font-helvetica text-xl">
                    Ingredienser:
                  </strong>
                  <ul className="list-disc pl-4 mt-2 ml-2 font-helvetica">
                    {valgteDrink.ingredients?.map((ingredient, idx) => (
                      <li key={idx} className="text-sm">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-5 w-[85vw] break-words text-sm">
              {valgteDrink.description}
            </p>
            <div className="flex flex-col mt-auto mb-15">
              <div className="flex flex-row pt-4 items-center mb-7">
                <AntalTilKurv count={count} setCount={setCount} />
                <p className="font-bold font-molend text-[9vw] whitespace-nowrap mr-4">
                  {valgteDrink.price} KR
                </p>
              </div>
              <button
                className="px-6 py-3 bg-light-purple text-white mb-4 text-lg font-bold font-helvetica"
                onClick={() => {
                  tilføjTilKurv();
                  setNotifikation({
                    indhold: `${count} ${valgteDrink.name} er tilføjet til kurven`,
                    farve: "bg-green-600",
                  });
                }}
              >
                Føj til kurv
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
