import React, { useEffect, useState, useRef } from 'react';
import { Pannellum } from "pannellum-react";
import "../assets/styles/Panorama.css"; 
import { Link } from "react-router-dom";

export const ChoirStallsPanorama: React.FC = () => {

  const [graffitiPopupVisible, setGraffitiPopupVisible] = useState<boolean>(false);
  const [choirStallsPopupVisible, setChoirStallsPopupVisible] = useState<boolean>(false);
  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState<boolean>(false);
  const [anteDirectionPopupVisible, setAnteDirectionPopupVisible] = useState<boolean>(false);
  const [deGurbsPopupVisible, setDeGurbsPopupVisible] = useState<boolean>(false);
  const [chapelMousePopupVisible, setChapelMousePopupVisible] = useState<boolean>(false);
  const [sanctuaryDirectionPopupVisible, setSanctuaryDirectionPopupVisible] = useState<boolean>(false);
  const [chairPopupVisible, setChairPopupVisible] = useState<boolean>(false);

  const popupRef = useRef<HTMLDivElement>(null);

  //Add text to speech
  const speakText = (elementId: string) => {
    const text = document.getElementById(elementId)?.textContent;
    if (text) {
      const synth = window.speechSynthesis;
      synth.cancel(); // Cancel previous speech, if any
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };

  //Stop text to speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setGraffitiPopupVisible(false);
          setChoirStallsPopupVisible(false);
          setStainedGlassPopupVisible(false);
          setAnteDirectionPopupVisible(false);
          setDeGurbsPopupVisible(false);
          setChapelMousePopupVisible(false);
          setSanctuaryDirectionPopupVisible(false);
          setChairPopupVisible(false);
          stopSpeech();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  const style={
      width: "100%",
      height: "700px",
      background: "#000000"
    };

  const config = {
      autoLoad: true,
      showControls: false,
      hotSpots: [
        {
          pitch: 180,
          yaw: 2,
          type: "custom",
          cssClass: "directionHotspot",
          handleClick: () => setAnteDirectionPopupVisible(true),
        },
        {
          pitch: 0,
          yaw: 90,
          type: "custom",
          cssClass: "graffitiHotspot",
          handleClick: () => setGraffitiPopupVisible(true),
        },
        {
          pitch: -10,
          yaw: 230,
          type: "custom",
          cssClass: "graffitiHotspot",
          handleClick: () => setChairPopupVisible(true),
        },
        {
          pitch: -30,
          yaw: 130,
          type: "custom",
          cssClass: "chapelMouseHotspot",
          handleClick: () => setChapelMousePopupVisible(true),
        },
        {
          pitch: -40,
          yaw: 360,
          type: "custom",
          cssClass: "choirStallsHotspot",
          handleClick: () => setChoirStallsPopupVisible(true),
        },
        {
            pitch: 30, 
            yaw: 310,    
            scale: 10.0,  
            type: "custom",
            cssClass: "windowsHotspot",
            handleClick: () => setDeGurbsPopupVisible(true),
        },
        {
            pitch: 30, 
            yaw: 240,    
            scale: 10.0,  
            type: "custom",
            cssClass: "windowsHotspot",
            handleClick: () => setStainedGlassPopupVisible(true),
        },
        {
          pitch: 180,
          yaw: 182,
          type: "custom",
          cssClass: "directionHotspot",
          handleClick: () => setSanctuaryDirectionPopupVisible(true),
        },
      ]
    };
  

return (
  <div>

    <Pannellum
      id="1"
      sceneId="firstScene"
      config={config}
      imageSource="images/choirStallsSection.jpg"
      style={style}
    />


    {stainedGlassPopupVisible && (
       <div className="popup">
          <div className="popup-content" ref = {popupRef}>
              <h2>The Pirie Memorial Window</h2>
              <p id = "stainedGlassParagraph">
              Like other windows seen throughout, this one was created by Douglas Strachan – Britain’s most important stained-glass artist of the early 20th century – in 1912. It is inscribed with ‘To the glory of God and in memory of George Pirie, M.A. Aberdeen and Cambridge, L.L.D, St. Andrews, Professor of Mathematics in the University of Aberdeen, 1877-1904’. The window was commissioned by Pirie’s pupils and friends.
              </p>
              <div className="popup-buttons">
                <Link to="/stainedGlass" className="info-button">Learn more</Link>
                <button onClick={() => speakText('stainedGlassParagraph')}>Listen To Audio</button>
                <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className="popup-close-button">
                <button className = "close-button" onClick={() => {
                  setStainedGlassPopupVisible(false);
                  stopSpeech();
                  }}>X</button>
              </div>
          </div>
      </div>
    )}

    {graffitiPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Ancient Graffiti Within the Chapel</h2>
                <p id = "graffitiParagraph">
                  If you explore the choir seats you will notice that students have certainly left their mark. Over the centuries, starting from the early 1600s, students etched their names into the choir stalls. Please don’t just see this as testimony of naughtiness – there is plenty of skill to admire! Scribal work played a large role in their studies, and penmanship was greatly important. This interestingly comes into focus even in their graffiti. On many of the names etched into the seats, you may notice faint tracing lines, acting as guides to ensure that their mark was neat, and carved for eternity.   
                </p>
                <div className="popup-buttons">
                  <button onClick={() => speakText('graffitiParagraph')}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                </div>
                <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setGraffitiPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}  

    {chapelMousePopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Chapel Mouse</h2>
                <p id = "mouseParagraph">
                ‘As poor as a Church mouse’ is a common phrase that may have originated in England as early as the 1600s. In a Church there was never any food kept, so a mouse would not be able to find anything to eat. This would inevitably make the mouse poor.  
                </p>
                <div className="popup-buttons">
                  <Link to="/chapelMouse" className="info-button">Learn more</Link>
                  <button onClick={() => speakText('mouseParagraph')}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                </div>
                <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setChapelMousePopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}  

    {deGurbsPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>De Gurbs Memorial Window</h2>
                <p id = "deGurbsParagraph">
                An early work of Douglas Strachan, dated 1904, this memorial window commemorates Baron de Gurbs (1800-1904), a distinguished graduate of the University. The window’s main scene depicts the dedication of Christ at the temple. Strachan shows an almost anecdotal interest in some of the more marginal characters discussed in the Gospel of Luke, and includes for examples Simeon – a wise man holding Jesus – and Anna, an elderly woman who recognises Jesus as the Messiah.
                </p>
                <div className="popup-buttons">
                  <Link to="/deGurbs" className="info-button">Learn more</Link>
                  <button onClick={() => speakText('deGurbsParagraph')}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                </div>
                <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setDeGurbsPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}  



    {choirStallsPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>The Choir Stalls Section</h2>
                <p id = "choirStallParagraph">
                In 1497, the university’s founder, Bishop Elphinstone, gave the instruction that ‘everyday, by the Grace of God there be singing with note: mattins, evensong, mass of our Lady and High mass’ and more so on Sundays and feast days. The College Chapel was intended as a place of near continuous song and praise. In the early years, the choir was made up of six priests, eight prebendaries, and four choir boys, but these numbers increased over time. 
                </p>
                <div className="popup-buttons">
                  <Link to="/choirStalls" className="info-button">Learn more</Link>
                  <button onClick={() => speakText('choirStallParagraph')}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setChoirStallsPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                 </div>
            </div>
         </div>
      )}

    {chairPopupVisible && (
        <div className="popup">
            <div className="popup-content" ref = {popupRef}>
                <h2>Misericords ‘Mercy-Seats’</h2>
                <p id = "chairParagraph">
                These seats were designed to tip upward and act as a prop for choir members during long periods of standing. A select few of the remaining originals have designs on the under sides. Many designs resemble the drawings found in the founder, Bishop Elphinstone’s handwritten books from the early 1500s and which are held today in the University archives
                </p>
                <div className="popup-buttons">
                  <button onClick={() => speakText('chairParagraph')}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setChairPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                 </div>
            </div>
         </div>
      )}
      
    {anteDirectionPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>Back to the Ante-Chapel Section</h2>
            <div className="popup-buttons">
              <Link to="/Panorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setAnteDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
      )}

    {sanctuaryDirectionPopupVisible && (
        <div className="popup">
          <div className="popup-content" ref = {popupRef}>
            <h2>Please Enter The Sanctuary Section at the End of the Chapel</h2>
            <div className="popup-buttons">
              <Link to="/sanctuaryPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setSanctuaryDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
      )}


  </div>
);
}
