export default function Cart({
  kurv,
  visKurv,
  setVisKurv,
  fjernFraKurv,
  beregnPris,
  tømKurv,
}) {
  return (
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
                        <p className="text-sm font-semibold">{item.price} Kr</p>
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
                  <p className="text-xl font-bold">Total: {beregnPris()} DKK</p>
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
              onClick={() => alert("Ikke sat op endnu")}
            >
              Gå til betaling
            </button>
          </div>
        </section>
      )}
    </section>
  );
}
