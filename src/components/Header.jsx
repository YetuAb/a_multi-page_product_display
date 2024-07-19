import React from "react";
import Logo from "../assets/images/logo.png";
import Phone from "../assets/images/iphone-2-16.png";
import Desktop from "../assets/images/desktop-4-16.png";
import Menu from "../assets/images/menu-4-16.png";

const categoryColors = {
  EXPERIMENTAL: "#fcd34d",
  CREATIVE: "#000000",
  DIGITAL: "#f87171",
  "PR & MEDIA": "#9370DB",
  PRODUCTION: "#fcd34d",
  RESEARCH: "#fdba74",
  COMMUNICATION: "#f9a8d4",
};

export const Header = ({ darkMode, toggleDarkMode, selectedLink }) => (
  <header
    className={`flex items-center p-2 md:p-4 lg:p-6 ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}
  >
    <div className="flex-1 flex items-end space-x-4 md:space-x-6 lg:space-x-[90px]">
      <div className="logo">
        <img className="h-10 md:h-12 lg:h-14" src={Logo} alt="Logo" />
      </div>
      <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 lg:space-x-[90px]">
        {[
          "Home",
          "Culture",
          "About",
          "Clients",
          "News",
          "Contact",
          "Career",
        ].map((item) => (
          <a
            href="#"
            key={item}
            className={`transition-transform transform text-sm md:text-base lg:text-lg ${
              selectedLink === item ? "text-orange-500" : ""
            } hover:scale-105 hover:text-orange-500`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
    <div className="flex items-end space-x-4 md:space-x-6 lg:space-x-8">
      <span className="icon-desktop">
        <img className="h-6 md:h-8 lg:h-10" src={Desktop} alt="desktop" />
      </span>
      <div className="w-[3px] h-6 md:h-8 lg:h-10 bg-gray-300"></div>
      <span className="icon-mobile">
        <img className="h-6 md:h-8 lg:h-10" src={Phone} alt="phone" />
      </span>
      <span className="icon-tablet">
        <img className="h-6 md:h-8 lg:h-10" src={Menu} alt="menu" />
      </span>
      <label className="flex items-center cursor-pointer">
        <span
          className={`mr-2 text-xs md:text-sm lg:text-base ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {darkMode ? "Dark" : "Light"}
        </span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="toggle-checkbox hidden"
        />
        <div className="relative">
          <div
            className={`toggle-track w-8 md:w-10 lg:w-12 h-4 md:h-6 lg:h-8 flex items-center rounded-full p-1 cursor-pointer ${
              darkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`toggle-thumb w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full shadow-md transform ${
                darkMode ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </label>
    </div>
  </header>
);

export const SubNavigation = ({ selectedCategory, onCategorySelect }) => (
  <div className="flex overflow-x-auto bg-white">
    {Object.keys(categoryColors).map((category, index, array) => {
      const isSelected = selectedCategory === category;
      const color = categoryColors[category];
      const backgroundColor = isSelected ? color : "#ffffff";
      const borderColor = color;
      const textColor = isSelected ? "#ffffff" : borderColor;

      const marginLeft = index === 0 ? "2rem" : "0";
      const marginRight = index === array.length - 1 ? "2rem" : "0";

      return (
        <span
          key={category}
          className="flex-1 p-1 cursor-pointer border text-center text-xs md:text-sm lg:text-base hover:scale-105 transition-all duration-300"
          style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            color: textColor,
            marginLeft: marginLeft,
            marginRight: marginRight,
          }}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </span>
      );
    })}
  </div>
);
