import React from "react";

const Header = ({ selectedCategory }) => (
  <header className="flex justify-between items-center p-4">
    <div className="logo">LOGO</div>
    <nav className="flex space-x-4">
      {["Home", "Culture", "About", "Clients", "News", "Contact", "Career"].map(
        (item) => (
          <a href="#" key={item} className="hover:underline">
            {item}
          </a>
        )
      )}
    </nav>
    <div className="flex space-x-2">
      <span className="icon-desktop">🖥️</span>
      <span className="icon-tablet">📱</span>
      <span className="icon-mobile">📞</span>
    </div>
  </header>
);

const SubNavigation = ({ selectedCategory }) => (
  <div className="flex justify-around p-2 bg-gray-100">
    {[
      "Experimental",
      "Creative",
      "Digital",
      "PR & Media",
      "Production",
      "Research",
      "Communication",
    ].map((category) => (
      <span
        key={category}
        className={`p-2 ${selectedCategory === category ? "font-bold" : ""}`}
      >
        {category}
      </span>
    ))}
  </div>
);

export { Header, SubNavigation };
