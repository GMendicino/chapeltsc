import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/info.css";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";

interface Tour {
  title: string;
  image: string;
  link: string;
}

export const Main: React.FC = () => {
  const tours: Tour[] = [
    { title: "Chapel", image: "/images/temporaryIcon.png", link: "/tour" },
    { title: "Example Tour", image: "/images/temporaryIcon.png", link: "/tour" },
    { title: "Example Tour 2", image: "/images/temporaryIcon.png", link: "/tour" },
  ];

  //Images used for slideshow
  const slideshowImages = [
  "/images/carousel.jpg",
  "/images/carousel2.jpg",
  ];

  return (
    <div className="info-container">
      {/* Slideshow (sits behind the navbar via CSS offset) */}
      <div className="mainpage-slideshow">
        <Carousel images={slideshowImages} interval={5000} />
      </div>

      {/* Map + Welcome side-by-side */}
      <div className="two-column-section" style={{ alignItems: "center" }}>
        <div className="column">
          <h2>Welcome!</h2>
          <p style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            This application was built by University students to provide interactive virtual tours of
            historic university buildings, making it easier to explore spaces that are not always
            accessible in person. Each tour combines panoramic imagery with interactive features so you
            can move through key locations and learn about the buildings as you go.
          </p>
          <p style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            The University of Aberdeen has many fascinating and historic buildings, each with its own
            character and purpose, ranging from ceremonial and religious spaces to academic and civic
            architecture. Select a tour below or use the map to explore.
          </p>
        </div>

        <div className="column">
          <div
            style={{
              width: "500px",
              height: "500px",
              overflow: "hidden",
              borderRadius: "70px",
            }}
          >
            <img
              src={"/images/MapExample.png"}
              alt="Interactive map placeholder"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Tour selection */}
      <div className="services-container" style={{ justifyContent: "center", flexWrap: "wrap" }}>
        <h1 style={{ width: "100%", textAlign: "center", marginBottom: "24px" }}>Select a tour</h1>

        {tours.map((tour, i) => (
          <Link key={i} to={tour.link} className="service-item">
            <img src={tour.image} alt={tour.title} className="service-icon" />
            <h3>{tour.title}</h3>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};