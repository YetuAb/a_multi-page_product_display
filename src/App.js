import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductDisplayPage from "./pages/ProductDisplayPage";
import SocialMediaPage from "./pages/SocialMediaPage";

const isAuthenticated = () => {
  return true;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<ProductDisplayPage />} />
      <Route
        path="/social"
        element={isAuthenticated() ? <SocialMediaPage /> : <Navigate to="/" />}
      />
    </Routes>
  </Router>
);

export default App;
