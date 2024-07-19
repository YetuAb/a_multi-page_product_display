import React from "react";
import { Link } from "react-router-dom";
import Product from "../assets/images/holland_product.png";

const ProductCard = () => (
  <div className="relative border-2 p-8 m-4 bg-gray-200 border-orange-300 rounded-tl-xl rounded-br-xl w-full max-w-xs md:max-w-md lg:max-w-md max-w-[200px] mx-auto transition-transform transform hover:scale-105">
    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-4 border-gray-500 rounded-full w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-transparent"></div>
    <img src={Product} alt="title" className="w-full h-auto pl-5 pr-5 mb-2" />
    <Link to="/details">
      <button className="text-black w-full bg-transparent hover:text-orange-300 hover:shadow-lg">
        VIEW DETAILS
      </button>
    </Link>
  </div>
);

export default ProductCard;
