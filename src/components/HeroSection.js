import React from "react";
import heroImage from "../assets/image1.jpeg"; // Actualizează calea către imagine

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>The ultimate online personal training plan!</h1>
          <div className="hero-buttons">
            <a href="#checkout">
              <button className="btn-primary">Buy the Plan</button>
            </a>
            <a href="#about">
              <button className="btn-secondary">About Me</button>
            </a>
          </div>
          <div className="hero-icons">
            {/* <span>.</span> */}
            <span>Affordable Training</span>
            <span>Easy contact for more information</span>
            {/* <span>7 Day Free Return on Purchase</span> */}
            <span>5 Star Rated Personal Trainer</span>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
