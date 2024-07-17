import React from "react";

const ProductCard = ({ title, image }) => (
  <div className="border p-4 m-2">
    <img src={image} alt={title} className="w-full h-auto" />
    <h3 className="text-lg font-bold">{title}</h3>
    <button className="mt-2 p-2 bg-gray text-white">View Details</button>
  </div>
);

export default ProductCard;
