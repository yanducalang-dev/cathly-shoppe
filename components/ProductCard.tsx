import Image from "next/image";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export default function ProductCard({
  image,
  name,
  price,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Image
        src={image}
        alt={name}
        width={400}
        height={500}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="mt-2 text-gray-600">{price}</p>

       
      </div>
    </div>
  );
}