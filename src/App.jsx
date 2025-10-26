import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout'; 

import { Info } from './pages/Info'; 
import { HelpPage } from './pages/help'; 

import { Panorama } from './pages/Panorama'; 
import { ChoirStallsPanorama } from './pages/choirStallsPanorama'; 
import { SanctuaryPanorama } from './pages/sanctuaryPanorama'; 

import { SmallPulpit } from './pages/details/SmallPulpit';
import { RoodScreen } from './pages/details/RoodScreen'; 
import { AnteChapel } from './pages/details/AnteChapel';
import { Graffiti } from './pages/details/Graffiti'; 
import { ChoirStallsSection } from './pages/details/ChoirStallsSection';
import { ElphinstoneGrave } from './pages/details/ElphinstoneGrave';
import { GoodbyeMary } from './pages/details/GoodbyeMary'; 
import { StainedGlass } from './pages/details/StainedGlass';
import { WarMemWindow } from './pages/details/WarMemWindow'; 
import { WestWindow } from './pages/details/WestWindow';
import { ChapelMouse } from './pages/details/ChapelMouse'; 
import { DeGurbs } from './pages/details/DeGurbs'; 
import { OrganImages } from './pages/details/OrganImages'; 
import { NorthEast } from './pages/details/NorthEast'; 
import { Harrower } from './pages/details/Harrower';



function App() {
  return (
      <Router>
        <Routes>
            
          <Route path="/" element={<Layout><Info /></Layout>} />
          <Route path="/panorama" element={ <Layout><Panorama /></Layout> } />
          <Route path="/choirStallsPanorama" element={ <Layout><ChoirStallsPanorama /></Layout> } />
          <Route path="/sanctuaryPanorama" element={ <Layout><SanctuaryPanorama /></Layout> } />
          <Route path="/help" element={ <Layout><HelpPage /></Layout> } />

          <Route path="/harrower" element={ <Layout><Harrower /></Layout> } />
          <Route path="/northEast" element={ <Layout><NorthEast /></Layout> } />
          <Route path="/organImages" element={ <Layout><OrganImages /></Layout> } />
          <Route path="/chapelMouse" element={ <Layout><ChapelMouse /></Layout> } />
          <Route path="/deGurbs" element={ <Layout><DeGurbs /></Layout> } />
          <Route path="/warMemWindow" element={ <Layout><WarMemWindow /></Layout> } />
          <Route path="/westWindow" element={ <Layout><WestWindow /></Layout> } />
          <Route path="/smallPulpit" element={ <Layout><SmallPulpit /></Layout> } />
          <Route path="/roodScreen" element={ <Layout><RoodScreen /></Layout> } />
          <Route path="/anteChapel" element={ <Layout><AnteChapel /></Layout> } />
          <Route path="/graffiti" element={ <Layout><Graffiti /></Layout> } />
          <Route path="/choirStalls" element={ <Layout><ChoirStallsSection /></Layout> } />
          <Route path="/elphinstoneGrave" element={ <Layout><ElphinstoneGrave /></Layout> } />
          <Route path="/mary" element={ <Layout><GoodbyeMary /></Layout> } />
          <Route path="/stainedGlass" element={ <Layout><StainedGlass /></Layout> } />

        </Routes>
      </Router>
  );
}

export default App;