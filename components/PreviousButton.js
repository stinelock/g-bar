import Link from "next/link";

export default function PreviousButton() {
  return (
    <Link
      href="/booking"
      className="flex justify-center p-2 mt-4 w-30 border border-white"
    >
      Forrige
    </Link>
  );
}
