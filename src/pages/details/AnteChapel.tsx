import React from 'react';
import { Footer } from '../../components/Footer'; 
import { useNavigate } from "react-router-dom";
import "../../assets/styles/info.css";

export const AnteChapel: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="info-container" style={{ minHeight: '150vh' }}>
      <div className="two-column-section">
        <div className="column">
          <h2>The Ante-Chapel</h2>
          <p>
            The Antechapel today provides space to remember those connected to the University who gave their lives in support of freedom during the Great Wars, also known as World War I and II. The window across from the door through which you entered is a testament to honor these students and staff members, with their individual names displayed around the room.
          </p>

          <p>
            The overall structure of the Antechapel has not changed throughout its long history, but it has become much smaller — see the Rood Screen link to find out why. Today, the Antechapel serves as a welcoming space for visitors entering the Chapel, with the doors to the Rood Screen kept open. Services and events are still regularly held in the Chapel, and a schedule can be accessed online.
          </p>
        </div>

        <div className="column">
          <img src="/images/anteChapelPhoto.jpg" alt="Ante-Chapel" width="350" height="200" className="image" />
        </div>
      </div>

      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button> 

      <Footer />
    </div>
  );
}