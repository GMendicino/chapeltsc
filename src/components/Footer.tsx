import React, { useState, useEffect, CSSProperties } from 'react';
import { Link } from "react-router-dom";
import UoALogo from '../assets/images/UoA.svg'; // Example: Assuming you move this to assets
import UKFlag from '../assets/images/UK.png';     // Example: Assuming you move this to assets
import Pointer from '../assets/images/pointer.png'; // Example: Assuming you move this to assets


const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      <div style={footerStyle}>
        <img src={UoALogo} alt="University of Aberdeen" style={logoStyle} />

        <div style={contentContainerStyle}>
          <div style={textContainerStyle}>
            <div style={tightSpacingStyle}>
              <p>University of Aberdeen</p>
              <p>King's College,</p>
              <p>Aberdeen,</p>
              <p style={postcodeStyle}>AB24 3FX</p>
            </div>

            <div style={normalSpacingStyle}>
              <p>Tel: <span style={highlightStyle}>+44 (0)1224 272000</span></p>
            </div>
          </div>

          <img src={UKFlag} alt="UK Flag" style={ukImageStyle} />
          <img src={Pointer} alt="Pointer" style={PointerStyle} />
        </div>
      </div>

      {isVisible && (
        <button onClick={scrollToTop} style={backToTopButtonStyle}>
          Top Of Page    
        </button>
      )}
    </div>
  );
}

// Define types for styles
const footerStyle: CSSProperties = {
  backgroundColor: '#272727',
  color: 'white',
  textAlign: 'left',
  height: '350px',
  fontSize: '0.9rem',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '20px',
};

const logoStyle: CSSProperties = {
  display: 'block',
  margin: '20px',
  height: '50px',
};

const contentContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
};

const textContainerStyle: CSSProperties = {
  marginLeft: '20px',
  zIndex: 1,
};

const tightSpacingStyle: CSSProperties = {
  lineHeight: '0.2',
};

const normalSpacingStyle: CSSProperties = {
  lineHeight: '1.0',
  marginTop: '10px',
};

const highlightStyle: CSSProperties = {
  color: '#FFD414',
  fontWeight: 600,
  zIndex: 1,
};

const postcodeStyle: CSSProperties = {
  marginBottom: '25px',
};

const ukImageStyle: CSSProperties = {
  position: 'absolute',
  left: '130px',
  top: '10px',
  height: '220px',
  filter: 'grayscale(100%)',
  zIndex: -0,
};

const PointerStyle: CSSProperties = {
  position: 'absolute',
  left: '260px',
  top: '40px',
  height: '25px',
  width: '20px',
  filter: 'grayscale(0%)',
  zIndex: 1,
};

const backToTopButtonStyle: CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#8A2F2F',
  color: 'white',
  border: 'none',
  padding: '10px 15px',
  fontSize: '16px',
  borderRadius: '5px',
  cursor: 'pointer',
  zIndex: 2,
};

export default Footer;