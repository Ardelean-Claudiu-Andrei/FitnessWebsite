import React, { useState } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
// import ServicesSection from "./components/ServicesSection";
import SocialIcons from "./components/SocialIcons"; // Import the SocialIcons component
import Footer from "./components/Footer";
import EmbededSection from "./components/EmbededSection";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_your_public_key");

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">Andrei Ardelean</div>
          <nav className={navOpen ? "nav-open" : ""}>
            <ul className={navOpen ? "show" : ""}>
              <li>
                <a href="#hero" onClick={toggleNav}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleNav}>
                  About
                </a>
              </li>
              {/* <li><a href="#">Services</a></li> */}
              {/* <li><a href="#">Blog</a></li> */}
              <li>
                <a href="#footer" onClick={toggleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a href="#checkout">
            <button className="btn-book">Buy the Plan</button>
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </header>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <SocialIcons />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <Footer />
      {/* <EmbededSection /> */}
    </div>
  );
}

export default App;
