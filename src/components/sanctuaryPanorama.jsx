import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
  
function Panorama() {

    const [largePulpitPopupVisible, setLargePulpitPopupVisible] = useState(false);
    const [elphinstoneGravePopupVisible, setElphinstoneGravePopupVisible] = useState(false);
    const [chapelCeilingPopupVisible, setChapelCeilingPopupVisible] = useState(false);
    const [exitPopupVisible, setExitPopupVisible] = useState(false);
    const [directionPopupVisible, setDirectionPopupVisible] = useState(false);
    const [deskPopupVisible, setDeskPopupVisible] = useState(false);
    const [campbellPopupVisible, setCampbellPopupVisible] = useState(false);

    //Add text to speech
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); // Cancel previous speech, if any
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  //Stop text to speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  useEffect(() => {
    const addHotspot = () => {

    if (ReactPannellum.getCurrentScene() === "firstScene") {
        ReactPannellum.addHotSpot(
        {
          pitch: 0,
          yaw: 180,
          type: "custom",
          cssClass: "directionHotspot",
          createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";
            hotspotDiv.onclick = () => {
              setDirectionPopupVisible(true);
            };
          },
        },
      );
        ReactPannellum.addHotSpot(
        {
            pitch: 35,
            yaw: 300,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setLargePulpitPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 25,
            yaw: 255,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setCampbellPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 0,
            yaw: 0,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setDeskPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: -30,
            yaw: 350,
            type: "custom",
            cssClass: "elphinstoneGraveHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setElphinstoneGravePopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 40,
            yaw: 0,
            type: "custom",
            cssClass: "chapelCeilingHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setChapelCeilingPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 35,
            yaw: 90,
            type: "custom",
            cssClass: "exitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setExitPopupVisible(true);
            };
            },
        },
        );
      }
    };

    // Wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // Small delay to ensure Pannellum loads

    return () => {
      window.speechSynthesis.cancel(); //Stop text to speech when leaving the page
    }

    }, []);

  const style={
      width: "100%",
      height: "700px",
      background: "#000000"
    };

  const config = {
      autoLoad: true,
      showControls: false,
    };
  

return (
  <div>

    <ReactPannellum
      id="1"
      sceneId="firstScene"
      config={config}
      imageSource="images/sanctuary.jpg"
      style={style}
    />


{largePulpitPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Main Chapel Pulpit</h2>
                <p id = "pulpitParagraph">The pulpit was originally a part of the St. Machar’s Cathedral but was moved here during the 1800s renovation. On it you can see the arms of Bishop William Stewart (d. 1545).</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('pulpitParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setLargePulpitPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {elphinstoneGravePopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Elphinstone's Grave</h2>
                <p id = "graveParagraph">After his death, Bishop Elphinstone was buried in King’s College Chapel. What remains today is the original base and cover slab of the tomb chest. It is made of black marble which was brought from Tournai in Belgium. This same marble from Tournai can be seen in adjoining grave markers.  The statue of Bishop Elphinstone and supporting figures were destroyed after the Reformation. A new monument for Elphinstone, created in 1926, can be found on the lawn outside of the Chapel.​</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('graveParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setElphinstoneGravePopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

        {campbellPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Campbell Memorial Window</h2>
                <p id = "campbellParagraph">
                  This window, a work by Clayton and Bell of London, was installed in 1880. It remembers Peter Colin Campbell, a Professor of Greek at the University from 1854 to 1855 as well as Vice-Chancellor from 1855 to 1876. The window shows two scenes of gift-giving, one from the old testament - King Solomon receiving gifts from the Queen Sheba – and one from the New Testament - the adoration of the magi presenting gifts to the Christ child. At the bottom are the coats of arms for the University as well as Principal Campbell.  
                ​</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('campbellParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setCampbellPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}
      
      {chapelCeilingPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Chapel Ceiling</h2>
                <p id = "ceilingParagraph">The ceiling is a unique blend of Scottish and European aesthetics which is commonly referred to as wagon ceilings these design patterns have been popular since 1200s but saw a revival in appreciation during the late 1400s and early 1500s right around the time which Kings College chapel was constructed. The ceiling today still likely maintains a very similar style to when it was originally constructed based on evidence of other ceilings around Scotland.</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('ceilingParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setChapelCeilingPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {deskPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Desk of Bishop Patrick Forbes</h2>
                <p id = "deskParagraph">Restored in 1889 by McPherson, this is was the desk of Bishop Patrick Forbes and originally supported the Lenten veil (a cloth usually depicting the Passion of Christ and displayed during Holy Week, leading up to Easter Sunday). Forbes’ coat of arms and the date 1627 still remain; however, the original inscription was destroyed. This defacing likely happened during the Scottish Reformation by the Covenanters who were opposed to any image or Catholic doctrinal themes within newly designated Protestant churches and chapels. </p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('deskParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setDeskPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {exitPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Please Exit The Chapel Here</h2>
                <div className="popup-buttons">
                  <Link to="/mary" className="info-button">Please Click Here</Link>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setExitPopupVisible(false);
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {directionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Back to the Choir Stalls Section</h2>
            <div className="popup-buttons">
              <Link to="/choirStallsPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
        )}


  </div>
);
}

export default Panorama;
