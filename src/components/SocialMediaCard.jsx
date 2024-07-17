import React from "react";

const SocialMediaCard = ({ image, description }) => (
  <div className="border p-4 m-2">
    <img src={image} alt={description} className="w-full h-auto" />
    <p className="text-sm">{description}</p>
  </div>
);

export default SocialMediaCard;
