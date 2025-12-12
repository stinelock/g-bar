export default function CTAButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-light-purple text-white mb-4 text-lg font-bold"
    >
      {text}
    </button>
  );
}