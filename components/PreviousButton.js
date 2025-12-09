'use client';

import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const Router = useRouter();

  return (
    <button
      onClick={() => Router.back()}
      className="flex justify-center p-2 mt-4 w-30 border border-white"
    >
      Forrige
    </button>
  );
}
