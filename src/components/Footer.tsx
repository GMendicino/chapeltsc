import React, { useState, useEffect } from 'react';
import '../assets/styles/footer.css'; 

export const Footer: React.FC = () => {
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
      <div className="footer-container">
        <img src="/images/UoA.svg" alt="University of Aberdeen" className="footer-logo" />

        <div className="footer-content-container">
          <div className="footer-text-container">
            <div className="footer-tight-spacing">
              <p>University of Aberdeen</p>
              <p>King's College,</p>
              <p>Aberdeen,</p>
              <p className="footer-postcode">AB24 3FX</p>
            </div>

            <div className="footer-normal-spacing">
              <p>Tel: <span className="footer-highlight">+44 (0)1224 272000</span></p>
            </div>
          </div>

          <img src="/images/UK.png" alt="UK Flag" className="footer-uk-image" />
          <img src="/images/pointer.png" alt="Pointer" className="footer-pointer-image" />
        </div>
      </div>

      {isVisible && (
        <button onClick={scrollToTop} className="footer-back-to-top-button">
          Top Of Page
        </button>
      )}
    </div>
  );
};