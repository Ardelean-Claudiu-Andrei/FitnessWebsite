import React from "react";
import aboutImage from "../assets/image2.jpeg"; // Update the path to the image

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
        <div className="hero-content">
          <h2>About Andrei Ardelean?</h2>
          <p>
            With 5 years of experience, Andrei Ardelean is a dedicated
            professional. His extensive knowledge and skills enable him to
            provide superior quality solutions for his clients.
          </p>
          {/* <button className="btn-secondary">Learn More</button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
