import BookingSquare from "./BookingSquare";

export default function BookingSquareGrid() {
    return(
        <div className="grid grid-cols-3 gap-8 w-full max-w-lg self-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                BookingSquare({ key: number })
            ))}
        </div>
    )
}