import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Elevate Preloved Fashion
          </h1>

          <p className="text-lg md:text-2xl mb-8">
            Where premium meets affordable. Explore handpicked thrift collections designed.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/gallery"
              className="rounded-lg bg-black px-6 py-3 text-white font-semibold"
            >
              Shop Collection
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}