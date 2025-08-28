"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prodRes = await fetch("/api/product");
        const prodData = await prodRes.json();
        setProducts(prodData.products || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <section className="relative w-full bg-[#f7fbfc] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/images/shop1.jpg"
                alt="products"
                fill
                className="object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          <div className="text-center md:w-1/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Shop Now
            </h2>
            <p className="text-lg text-black">FEEL CONFIDENT</p>
            <span className="text-sm text-black italic">
              One Stop Marketplace
            </span>
          </div>

          <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src="/images/shop2.jpg"
                alt="products"
                fill
                className="object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">   
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-sm p-4 flex flex-col items-center"
              >
             
                <div className="relative w-40 h-40 mb-4">
                  <img
                    src={product?.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-black">${product.price}</p>
                <span className="text-sm text-black">
                  {product.category?.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-black">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
