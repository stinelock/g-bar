export default function DateSquare({ date, day, onClick }) {
  return (
    <div
      className="h-12 w-auto aspect-square border border-light-purple flex flex-col items-center justify-center cursor-pointer"
      onClick={() => onClick({ date, day })}
    >
      <span>{date}</span>
    </div>
  );
}
