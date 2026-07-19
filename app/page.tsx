import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
<AnimatedSection>
    <section className="mx-auto max-w-7xl px-6 py-20">

  <h2 className="mb-12 text-center text-5xl font-bold">
    Featured Collection
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    <ProductCard
      image="/products/shirt1.jpg"
      name="Casual Shirt"
      price="₱250"
    />

    <ProductCard
      image="/products/dress1.jpg"
      name="Premium Dress"
      price="300"
    />

    <ProductCard
      image="/products/skirt1.jpg"
      name="Trendy Skirt"
      price="₱120"
    />

    <ProductCard
      image="/products/tshirt1.jpg"
      name="Classic T-Shirt"
      price="150"
    />

  </div>

      </section> </AnimatedSection>
      <AnimatedSection>
    
          <section className="bg-[#FCD3D4] py-20">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-12 text-center text-5xl font-bold">
      Shop by Category
    </h2>

    <div className="grid gap-8 md:grid-cols-3">

      <CategoryCard
        title="Shorts"
        image="/categories/men.jpg"
      />

      <CategoryCard
        title="Dress"
        image="/categories/women.jpg"
      />

      <CategoryCard
        title="Shirt"
        image="/categories/accessories.jpg"
      />

    </div>

  </div>

      </section> </AnimatedSection>
      <AnimatedSection>
        <section className="py-20">

  <div className="mx-auto max-w-6xl px-6">

    <h2 className="mb-12 text-center text-5xl font-bold">
      Why Choose Cathly Shoppe?
    </h2>

    <div className="grid gap-10 md:grid-cols-3">

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          Premium Preloved
        </h3>

        <p>
          Every item is carefully selected to ensure great condition, style, and value.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          Sustainable Fashion
        </h3>

        <p>
          Shop preloved pieces and help reduce fashion waste while looking your best.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          Affordable Style
        </h3>

        <p>
          Discover trendy, branded, and unique fashion at prices you'll love
        </p>
              </div>
              

    </div>
<div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-[#111827] px-8 py-4 text-white font-semibold transition hover:bg-[#374151]"
              > Contact Us </Link>
              </div>
             
  </div>

        </section> 
      </AnimatedSection>
      
      
    </>
  );
}