import React from "react";
import "./App.css";
import { HomePage } from "./layouts/homePage/HomePage";
import { Footer } from "./layouts/navbarAndFooter/Footer";
import { Navbar } from "./layouts/navbarAndFooter/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
