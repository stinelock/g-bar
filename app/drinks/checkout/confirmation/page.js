"use client";

import { useRouter } from "next/navigation";

export default function DrinksConfirmationPage() {
  const router = useRouter();

  return (
    <main className="p-8 bg-white text-black flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-row gap-4 mb-8">
        <img src="/img/silhouette1-b.png" alt="G-BAR" className="w-10 h-auto" />
        <img src="/img/silhouette2-b.png" alt="G-BAR" className="w-10 h-auto" />
      </div>
      <h1 className="text-3xl font-molend font-bold mb-15 text-black text-center">
        Din bestilling <br />
        er sendt!
      </h1>
      <img src="/img/check-icon.png" alt="bekræftet" className="mb-15" />
      <p className="text-lg font-helvetica mb-8 text-center">
        Du Modtager en SMS når din bestilling er klar til afhentning!
      </p>
      <button
        className="px-6 py-3 bg-light-purple text-white text-lg font-bold w-full font-helvetica mt-15"
        onClick={() => router.push("/")}
      >
        Luk vindue
      </button>
    </main>
  );
}
