import Image from "next/image";

export default function BackgroundImage() {
 return (
   <div className="w-screen h-[1200px] absolute top-0 overflow-hidden bottom-0 -z-10 md:absolute md:h-5/6 md:w-auto md:right-30 md:-bottom-30">
     <Image
       src="/img/bg-drink.png"
       alt="baggrund"
       width="100"
       height="500"
       className="w-auto pl-2 h-full relative z-0"
     />
   </div>
 );
}