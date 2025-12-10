export default function BookingSquare({value, onClick}) {
    return(
        <div className="flex self-center justify-center items-center aspect-square w-full p-3 bg-white cursor-pointer"
        onClick={onClick}>
            <h2 className="text-3xl font-black text-black md:text-4xl">{value}</h2>
        </div>
    )
}