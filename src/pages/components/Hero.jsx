import React from "react";

import "../../assets/css/hero.css";
import heroImg from "../../assets/images/hero-image.png";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text">
        <h1 className="hero-heading">Your Gateway to Smart Education</h1>
        <p className="hero-subheading">
          Unite for a transformative education journey – where teachers,
          students, and parents join hands in lifelong learning.
        </p>
        <div className="hero-buttons">
          <Button type="default" text="Sign Up" />
          <Button type="info" text="Log In" />
        </div>
      </div>
      <div className="hero-section__image">
        <img src={heroImg} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
