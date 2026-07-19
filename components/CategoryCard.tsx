import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  image: string;
};

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <Link href="/gallery">
      <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">

        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
}