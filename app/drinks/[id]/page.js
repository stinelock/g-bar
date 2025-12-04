"use client";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  databaseURL:
    "https://g-bar-2d8b9-default-rtdb.europe-west1.firebasedatabase.app",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

export default function DrinksDetailPage() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDrinks() {
      const drinksRef = ref(database, "drinks");
      const snapshot = await get(drinksRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const drinksArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setDrinks(drinksArray);
      } else {
        console.log("No data available");
      }
    }

    fetchDrinks();
  }, []);

  return (
    <>
      <main>
        <h1>Drinks Detail Page</h1>
        <ul>
          {drinks.map((drink) => (
            <li key={drink.id}>
              <h2>{drink.name}</h2>
              <p>{drink.description}</p>
              <p>Price: ${drink.price}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
