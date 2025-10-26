import React from 'react';
import { Footer } from '../../components/Footer'; 
import { useNavigate } from "react-router-dom";
import "../../assets/styles/info.css";

export const OrganImages: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="SmallPulpit">
      <div className="two-column-section">
        <div className="column">
          <h2>The Chapel's Organ</h2>
          <img src="/images/organImage2.jpg" alt="Chapel Organ" width="300" height="300" className="image" />
        </div>

        <div className="column">
          <img src="/images/organImage1.jpg" alt="Chapel Organ" width="300" height="200" className="image" />
        </div>
      </div>  
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}