import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, SubNavigation } from "./components/Header";
import SocialMediaPage from "./pages/SocialMediaPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("EXPERIMENTAL");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {isAuthenticated ? (
          <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <SubNavigation
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
            <Routes>
              <Route
                path="/"
                element={
                  selectedCategory === "DIGITAL" ? (
                    <SocialMediaPage selectedCategory={selectedCategory} />
                  ) : selectedCategory === "CREATIVE" ? (
                    <ProductDisplayPage selectedCategory={selectedCategory} />
                  ) : (
                    <div className="p-4">Content.</div>
                  )
                }
              />
              <Route path="/details" element={<ProductDetail />} />
            </Routes>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
