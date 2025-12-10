'use client';

import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const Router = useRouter();

  return (
    <button
      onClick={() => Router.back()}
      className="flex justify-center p-2 mt-4 w-30 border md:mt-10 border-white"
    >
      Forrige
    </button>
  );
}
