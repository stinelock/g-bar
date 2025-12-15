import { useEffect } from "react";

export default function Notification({ indhold, farve, vedLuk }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      vedLuk();
    }, 3000);
    return () => clearTimeout(timer);
  }, [vedLuk]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${farve} text-white px-6 py-3 rounded shadow-lg z-[100] animate-fade-in`}
    >
      <div className="flex items-center gap-2">
        <p>{indhold}</p>
      </div>
    </div>
  );
}
