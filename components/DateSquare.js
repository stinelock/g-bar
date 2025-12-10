export default function DateSquare({ date, day, onClick }) {

  return (
    <div
      className="h-12 w-auto aspect-square border border-light-purple flex flex-col items-center justify-center cursor-pointer md:h-20 md:w-auto md:aspect-square"
      onClick={() => onClick({ date, day })}
    >
      <span>{date}</span>
    </div>
  );
}
