import React from "react";
import Hero from "./Hero";
import { ProductCard } from "../ProductCard";
import products from "../../data/products";

function Home() {
  return (
    <>
      <Hero />
      <section className="products mt-4 p-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
