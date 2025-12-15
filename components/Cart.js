import Notification from "./Notification";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { set } from "firebase/database";

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
  const pathname = usePathname();

  // Tilføj antal til hver vare i kurven
  const gruppeAntal = kurv.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id);
    if (found) {
      found.quantity += item.quantity || 1;
    } else {
      acc.push({ ...item, quantity: item.quantity || 1 });
    }
    return acc;
  }, []);

  // Tilføj en vare til kurven
  function tilføjTilKurv(id) {
    const item = kurv.find((i) => i.id === id);
    if (item) {
      const newKurv = [...kurv, item];
      setKurv(newKurv);
      localStorage.setItem("kurv", JSON.stringify(newKurv));
    }
  }

  // Djern en vare fra kurven
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

  return (
    <>
      {notifikation && (
        <Notification
          indhold={notifikation.indhold}
          farve={notifikation.farve}
          vedLuk={() => setNotifikation(null)}
        />
      )}

      {pathname === "/drinks/checkout" ? (
        <section>
          <div className="mt-4 mb-2">
            <h2 className="text-3xl mb-4 font-molend">
              Check din <br />
              ordre
            </h2>
            <img
              className="w-6 h-auto ml-auto mb-4"
              src="/img/edit.png"
              onClick={() => {
                console.log("rediger");
                setVisKurv(true);
              }}
            />
            {gruppeAntal.length === 0 ? (
              <p>Kurven er tom</p>
            ) : (
              <ul className="bg-white text-black">
                {gruppeAntal.map((item, index) => (
                  <li
                    key={item.id}
                    className={`flex items-center pr-4 pl-4 py-4 ${
                      index !== gruppeAntal.length - 1
                        ? "border-b border-black"
                        : ""
                    }`}
                  >
                    <div className="pr-4 font-molend">
                      <p> {item.quantity}x</p>
                    </div>
                    <div className="font-molend flex flex-row justify-between w-full">
                      <p>{item.name}</p>
                      <p className="text-xl">{item.quantity * item.price} Kr</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ) : (
        <button
          className="fixed bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.7)] flex items-center justify-center z-40"
          onClick={() => setVisKurv(true)}
        >
          <img src="/img/cart.png" alt="cart" className="w-8 h-8" />
          {kurv.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-dark-purple text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-helvetica ">
              {kurv.length}
            </span>
          )}
        </button>
      )}

      {/*Kurv pop up*/}
      {visKurv && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4"
          onClick={() => setVisKurv(false)}
        >
          <div
            className="bg-white rounded-tr-[30px] rounded-bl-[30px] shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto p-6 text-black relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900"
              onClick={() => setVisKurv(false)}
            >
              ×
            </button>
            <h2 className="text-2xl mb-4 font-molend">Din Kurv</h2>
            {gruppeAntal.length === 0 ? (
              <p>Kurven er tom</p>
            ) : (
              <>
                <ul>
                  {gruppeAntal.map((item) => (
                    <li
                      key={item.id}
                      className="mb-4 pb-4 border-b flex justify-between items-center"
                    >
                      <div className="flex flex-col font-helvetica">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm">{item.price} Kr</p>
                      </div>
                      <div className="flex items-center gap-2 font-helvetica">
                        <button
                          className="bg-gray-300 px-2 rounded-full"
                          onClick={() => fjernFraKurv(item.id)}
                        >
                          -
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          className="bg-gray-300 px-2 rounded-full"
                          onClick={() => tilføjTilKurv(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="text-red-600 font-bold text-sm ml-5"
                          onClick={() => fjernAlleFraKurv(item.id)}
                        >
                          Fjern
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4">
                  <p className="text-xl font-bold">Total: {beregnPris()} DKK</p>
                </div>
              </>
            )}
            <button
              className="mt-4 px-4 py-2 bg-light-purple text-white rounded w-full font-semibold"
              onClick={() =>
                pathname === "/drinks/checkout"
                  ? setVisKurv(false)
                  : router.push("/drinks/checkout")
              }
            >
              {pathname === "/drinks/checkout" ? "Luk" : "Gå til betaling"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
