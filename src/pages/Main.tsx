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
        <h2>Welcome</h2>
        <p>
          This application was built by University students to provide interactive virtual tours of historic university
          buildings.
        </p>
      </div>
    </div>

    {/* Centered map (image) */}
    <div style={{ display: "flex", justifyContent: "center", margin: "24px 0 48px" }}>
      <div
        style={{
          width: "min(1200px, 95%)",
          height: "320px",
          overflow: "hidden",
          borderRadius: "9999px",
        }}
      >
        <img
          src={MapExample}
          alt="Interactive map placeholder"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>

    {/* Tour selection (below text) */}
      <div style={{ textAlign: "center", margin: "0 0 24px" }}>
        <p style={{ margin: 0, maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          There are many fascinating and historic buildings within the University of Aberdeen. 
          Select a tour below or use the map to explore.
        </p>
      </div>   
    <div className="services-container" style={{ justifyContent: "center", flexWrap: "wrap" }}>
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