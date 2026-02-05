import React, { useState, useEffect, CSSProperties, useMemo } from 'react';
import { Carousel } from '../components/Carousel';
import "../assets/styles/info.css";
import { Footer } from '../components/Footer';
import { Link } from "react-router-dom";

interface Service {
  title: string;
  content: string;
  icon: string;
}

export const Info: React.FC = () => {
  const tourSlideshowImages = [
  "/images/carousel.jpg",
  "/images/carousel2.jpg",
  ];

  const StartTour: React.FC = () => {
    return (
      <Link to="/panorama" className="Start-Tour-Button">Tour Start
        <img src="/images/eye.png" alt="Eye Icon" className="eye-icon" />
      </Link>
    );
  }
  
  /*
  THIS IS WHERE ADMIN INPUT CAN BE "PIPED" INTO
  */
  const services: Service[] = [
    {
      title: "Altar",
      content: "The altar is a  sacred table used for worship or sacrifice, typically serving as the focal point during religious rites such as the Eucharist.",
      icon: "/images/temporaryIcon.png" 
    },
    {
      title: "Cross",
      content: "The cross stands as a central symbol of Christianity, representing the sacrificial death and resurrection of Jesus Christ.",
      icon: "/images/temporaryIcon.png"
    },
    {
      title: "Chapel",
      content: "A chapel is a smaller place of worship intended for private prayer, reflection, or more intimate religious gatherings.",
      icon: "/images/temporaryIcon.png"
    },
    {
      title: "Bible",
      content: "The Bible is the holy scripture of Christianity, encompassing sacred texts that guide believers in faith, doctrine, and morality.",
      icon: "/images/temporaryIcon.png"
    },
    {
      title: "Chalice", 
      content: "The chalice is a consecrated cup used in Christian liturgy to hold wine, symbolizing the blood of Christ.",
      icon: "/images/temporaryIcon.png"
    }
  ];



  const infoContainerStyle: CSSProperties = {
     minHeight: '150vh',
     position: 'relative'
  };

  /*
  THIS IS WHERE ADMIN INPUT CAN BE "PIPED" INTO
  */
  return (
    <div className="info-container" style={infoContainerStyle}>
        <Carousel images={tourSlideshowImages} interval={5000} />      <div className="Start-Tour">
        <StartTour/>
      </div>
      <div className="two-column-section">
        <div className="column">
          <h2>The King's College Chapel</h2>
          <p>
            Welcome to the King's Chapel, one of the oldest surviving buildings on our Aberdeen Campus founded in 1495 and began construction in 1500. We are happy to have you today and hope that you will enjoy exploring with our app. As you move around the chapel use your phone to look for areas highlighted by unique links to find out more.
          </p>
        </div>
      </div>  
       <div className="services-container">
        {services.map((service, i) => (
          <div key={i} className="service-item">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div> 
      <Footer /> 
    </div>
  );
}
