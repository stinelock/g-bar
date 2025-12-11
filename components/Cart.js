import Notification from "./Notification";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { pathname } from "next/navigation";

export default function Cart({
  kurv,
  visKurv,
  setVisKurv,
  fjernFraKurv,
  beregnPris,
  tømKurv,
  setKurv,
}) {
  const [notifikation, setNotifikation] = useState(null);
  const router = useRouter();

  // Group items by id and count quantity
  const gruppeAntal = kurv.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Add one more of an item
  function tilføjTilKurv(id) {
    const item = kurv.find((i) => i.id === id);
    if (item) {
      const newKurv = [...kurv, item];
      setKurv(newKurv);
      localStorage.setItem("kurv", JSON.stringify(newKurv));
    }
  }

  function fjernFraKurv(id) {
    const idx = kurv.findIndex((i) => i.id === id);
    if (idx !== -1) {
      const newKurv = [...kurv];
      newKurv.splice(idx, 1);
      setKurv(newKurv);
      localStorage.setItem("kurv", JSON.stringify(newKurv));
    }
  }

  function fjernAlleFraKurv(id) {
    const newKurv = kurv.filter((item) => item.id !== id);
    setKurv(newKurv);
    localStorage.setItem("kurv", JSON.stringify(newKurv));
  }

  if (pathname === "/drinks/checkout") {
    return (
      <section>
        <div className="mt-4 mb-2">
          <h2 className="text-2xl mb-4 font-molend">Check din ordre</h2>
          {gruppeAntal.length === 0 ? (
            <p>Kurven er tom</p>
          ) : (
            <ul>
              {gruppeAntal.map((item) => (
                <li
                  key={item.id}
                  className="mb-2 pb-2 flex items-center bg-white text-black pr-4 pl-4 pt-2"
                >
                  <div className="font-bold pr-10"> {item.quantity}</div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm font-semibold">{item.price} Kr</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    );
  } else
    return (
      <section className="border rounded p-4 bg-white text-black">
        {notifikation && (
          <Notification
            indhold={notifikation.indhold}
            farve={notifikation.farve}
            vedLuk={() => setNotifikation(null)}
          />
        )}

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
              <h2 className="text-2xl mb-4 font-molend">Din Kurv</h2>
              {gruppeAntal.length === 0 ? (
                <p>Kurven er tom</p>
              ) : (
                <>
                  <ul>
                    {gruppeAntal.map((item) => (
                      <li
                        key={item.id}
                        className="mb-2 pb-2 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-sm font-semibold">
                            {item.price} Kr
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            className="bg-gray-200 px-2 rounded text-lg"
                            onClick={() => fjernFraKurv(item.id)}
                          >
                            -
                          </button>
                          <span className="font-bold">{item.quantity}</span>
                          <button
                            className="bg-gray-200 px-2 rounded text-lg"
                            onClick={() => tilføjTilKurv(item.id)}
                          >
                            +
                          </button>
                          <button
                            className="text-red-600 text-sm ml-2"
                            onClick={() => fjernAlleFraKurv(item.id)}
                          >
                            Fjern
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4">
                    <p className="text-xl font-bold">
                      Total: {beregnPris()} DKK
                    </p>
                  </div>

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
                onClick={() => {
                  router.push("/drinks/checkout");
                }}
              >
                Gå til betaling
              </button>
            </div>
          </section>
        )}
      </section>
    );
}
