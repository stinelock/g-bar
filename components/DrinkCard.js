export default function DrinkCard({ drink, SeMere, TilføjTilKurv }) {
  return (
    <div className="border rounded p-4 bg-white shadow text-black">
      <img
        src={drink.image}
        alt={drink.name + " image"}
        className="w-32 h-32 object-cover mb-2 rounded"
      />
      <h2 className="text-xl font-bold mb-2">{drink.name}</h2>
      <p className="mb-1">{drink.description}</p>
      <p className="mb-1">
        <strong>Pris:</strong> {drink.price} DKK
      </p>
      <p className="mb-1">
        <strong>Hovedingredienser:</strong> {drink.mainIngredients.join(", ")}
      </p>
      <div className="flex flex-col">
        <button
          className="text-black-600 underline w-32 self-start"
          onClick={() => SeMere(drink)}
        >
          Se mere -&gt;
        </button>
        <button
          className="bg-purple-600 text-white rounded px-4 py-2 mt-2 w-32 self-end"
          onClick={() => TilføjTilKurv(drink)}
        >
          Tilføj til kurv
        </button>
      </div>
    </div>
  );
}
