import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/info.css";
import { Footer } from "../components/Footer";
import MapExample from "../assets/images/MapExample.png";

interface Tour {
  title: string;
  image: string;
  link: string;
}



export const Main: React.FC = () => {
  const tours: Tour[] = [
    {
      title: "Chapel",
      image: "/images/chapel_icon.jpg", 
      link: "/tour"
    },
    {
      title: "Example Tour",
      image: "/images/cross.jpg",
      link: "/tour"
    },
    {
      title: "Example Tour 2",
      image: "/images/bible.jpg",
      link: "/tour"
    }
  ];

  return (
    <div className="info-container">
      {/* Welcome */}
      <div className="two-column-section">
        <div className="column">
          <h2>Welcome, please pick a tour</h2>
          <p>
            This application provides interactive virtual tours of historic university buildings. Select a tour below or use the map to explore.
          </p>
        </div>
      </div>

      <div className="services-container">
        <div className="service-item" style={{ height: "100px", width: "600px", zoom: 4}}>
          <img
            src={MapExample}
            alt="Interactive map placeholder"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* Tour selection */}
      <div className="services-container">
        {tours.map((tour, i) => (
          <Link key={i} to={tour.link} className="service-item">
            <img src={tour.image} alt={tour.title} className="service-icon" />
            <h3>{tour.title}</h3>
            <p>Open tour</p>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};