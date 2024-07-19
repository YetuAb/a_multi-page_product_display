import React from "react";

const SocialMediaCard = ({ image, description }) => (
  <div className="border transition-transform transform hover:scale-105 max-w-[250px] w-full">
    <img src={image} alt={description} className="w-full h-auto" />
    <p className="text-sm text-center mt-2">{description}</p>
  </div>
);

export default SocialMediaCard;
