import React from "react";
import ProductCard from "../components/ProductCard";

const ProductDisplayPage = ({ selectedCategory }) => {
  return (
    <div>
      <main className="p-10 grid grid-cols-1 md:grid-cols-3 gap-[8%] ml-[8%] mr-[8%]">
        {selectedCategory === "CREATIVE" &&
          [1, 2, 3].map((item, index) => <ProductCard key={index} />)}
      </main>
    </div>
  );
};

export default ProductDisplayPage;
