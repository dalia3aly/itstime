import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer";
import LandingPage from "../pages/LandingPage/LandingPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import CartPage from "../pages/CartPage/CartPage";
// import { CartProvider } from "../contexts/CartProvider";
// create a not found page to handle 404 errors and import it when it's done

const AppRoutes = () => (
  <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
  </Router>
);

export default AppRoutes;
