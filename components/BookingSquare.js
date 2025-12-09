export default function BookingSquare({value}) {
    return(
        <div className="flex self-center justify-center items-center aspect-square w-full p-3 bg-white cursor-pointer">
            <h2 className="text-4xl font-black text-black">{value}</h2>
        </div>
    )
}