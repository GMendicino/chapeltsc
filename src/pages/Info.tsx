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
  const mobileImages: string[] = useMemo(() => [
    "/images/chapel1M.png",
    "/images/chapel2M.png",
    "/images/chapel3M.png",
  ], []);
  
  const desktopImages: string[] = useMemo(() => [
    "/images/Desktop1.png",
    "/images/Desktop2.png",
    "/images/Desktop3.png",
    "/images/Desktop4.png",
    "/images/Desktop5.png",
  ], []);
  
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768);
  const [images, setImages] = useState<string[]>(isDesktop ? desktopImages : mobileImages);
  const [carouselOpacity, setCarouselOpacity] = useState<number>(1);

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
      icon: "/images/alter.jpg" 
    },
    {
      title: "Cross",
      content: "The cross stands as a central symbol of Christianity, representing the sacrificial death and resurrection of Jesus Christ.",
      icon: "/images/cross.jpg"
    },
    {
      title: "Chapel",
      content: "A chapel is a smaller place of worship intended for private prayer, reflection, or more intimate religious gatherings.",
      icon: "/images/chapel_icon.jpg"
    },
    {
      title: "Bible",
      content: "The Bible is the holy scripture of Christianity, encompassing sacred texts that guide believers in faith, doctrine, and morality.",
      icon: "/images/bible.jpg"
    },
    {
      title: "Chalice", 
      content: "The chalice is a consecrated cup used in Christian liturgy to hold wine, symbolizing the blood of Christ.",
      icon: "/images/challace.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 800;
      const scrolled = window.scrollY;
      let newOpacity = 1 - scrolled / maxScroll;
      if (newOpacity < 0.2) {
        newOpacity = 0.2;
      }
      setCarouselOpacity(newOpacity);
    };

    const handleResize = () => {
      const desktop = window.innerWidth > 768;
      setIsDesktop(desktop);
      setImages(desktop ? desktopImages : mobileImages);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    handleResize(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [desktopImages, mobileImages]); 

  const infoContainerStyle: CSSProperties = {
     minHeight: '150vh',
     position: 'relative'
  };

  /*
  THIS IS WHERE ADMIN INPUT CAN BE "PIPED" INTO
  */
  return (
    <div className="info-container" style={infoContainerStyle}>
        <Carousel images={images} interval={3200} style={{opacity: carouselOpacity, transition: 'opacity 0.2s ease-out'}} />
      <div className="Start-Tour">
        <StartTour/>
      </div>
      <div className="two-column-section">
        <div className="column">
          <h2>Welcome!</h2>
          <p>
          'Good day to you' or as we say in Doric: 'Fit Like'. Welcome to the King's Chapel one of the oldest surviving buildings on our Aberdeen Campus founded in 1495 and began construction in 1500. We are happy to have you today and hope that you will enjoy exploring with our app. As you move around the chapel use your phone to look for areas highlighted by unique links to find out more.
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
