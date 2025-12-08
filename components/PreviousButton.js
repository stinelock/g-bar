import Link from "next/link";

export default function PreviousButton(){
    return (
        <Link href="/booking" className="flex justify-center p-2 m-4 w-30 border border-light-purple">
        Forrige
        </Link>
    )
}