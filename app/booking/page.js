import TypeCard from "@/components/TypeCard";


export default function BookingType() {

const types = [
  {
    id: 1,
    name: "Standard Bord",
    description: "Rygning ikke tilladt",
    image: "/img/standardbord.png",
    icon: "/img/rygning-nej.png",
  },
  {
    id: 2,
    name: "Opvarmet Tagterrasse",
    description: "Rygning tilladt",
    image: "/img/tagterrasse.jpg",
    icon: "/img/rygning-ja.png",
  },
];

  return (
    <section>
      {types.map((type) => (
        <TypeCard key={type.id} type={type} />
      ))}
    </section>
  );
}
