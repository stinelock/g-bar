export default function BookingSquare({key}) {
    return(
        <div className="flex self-center justify-center items-center aspect-square w-full p-3 bg-white cursor-pointer">
            <h2 className="text-4xl font-black text-black">{key}</h2>
        </div>
    )
}