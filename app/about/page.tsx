import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";

const reels = [
  {
    title: "Summer Collection",
    video: "/videos/reels2.mp4",
  },
  {
    title: "Discover Premium Dress",
    video: "/videos/reels3.mp4",
  },
  {
    title: "New Arrivals",
    video: "/videos/reels4.mp4",
  },
  {
    title: "Quick Highlights",
    video: "/videos/reels5.mp4",
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      {/* Page Title */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold">About Cathly Shoppe</h1>

        <p className="mt-4 text-lg text-gray-600">
          Shop premium thrift finds you'll love to wear
        </p>
      </section>

      {/* Images */}
      <AnimatedSection>
      <section className="mb-16 grid gap-6 md:grid-cols-2">
        <Image
          src="/about/about5.jpg"
          alt="About StyleWear"
          width={700}
          height={450}
          className="h-[350px] w-full rounded-xl object-cover shadow-lg"
        />

        <Image
          src="/about/about2.jpg"
          alt="Fashion Collection"
          width={700}
          height={450}
          className="h-[350px] w-full rounded-xl object-cover shadow-lg"
        />
        </section>
        </AnimatedSection>

      {/* Overview */}
      <section className="mx-auto mb-20 max-w-4xl">
      

        <p className="leading-8 text-gray-700">
         Cathly Shoppe was founded in March 2026 with a simple vision to make stylish, high-quality fashion accessible to everyone without compromising affordability. Established by Ms. Catherine, our shop was created out of a passion for discovering unique, premium preloved clothing and giving each piece a second chance to be loved.
<br></br><br></br>
Located at D-5, 2nd Floor, Lingayen Public Market, Lingayen, Pangasinan, Cathly Shoppe has become a destination for shoppers looking for fashionable, carefully curated thrift finds. Every item in our collection is personally selected to ensure quality, style, and value, allowing our customers to enjoy trendy outfits at budget-friendly prices.
<br></br><br></br>
At Cathly Shoppe, we believe that great fashion doesn't have to be expensive or brand new. By choosing preloved clothing, our customers not only save money but also support sustainable fashion by helping reduce textile waste.
      <br></br>  </p>      </section>

      {/* Featured Reels */}
      <AnimatedSection>
     <section className="mt-20">


  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
    {reels.map((reel, index) => (
      <div key={index} className="group">
        <div className="overflow-hidden rounded-3xl shadow-xl bg-black">

          <video
            controls
            preload="metadata"
            className="aspect-[9/16] w-full object-cover transition duration-300 group-hover:scale-105"
          >
            <source src={reel.video} type="video/mp4" />
          </video>

        </div>

        <h3 className="mt-3 text-center font-semibold">
          {reel.title}
        </h3>
      </div>
    ))}
  </div>
</section>
</AnimatedSection>
    </main>
  );
}