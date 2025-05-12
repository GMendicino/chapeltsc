import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Info from './components/Info';
import About from './components/About';
import SmallPulpit from './components/SmallPulpit' ;
import RoodScreen from './components/RoodScreen' ;
import Panorama from './components/Panorama';
import AnteChapel from './components/Ante-Chapel';
import Graffiti from './components/graffiti';
import ChoirStalls from './components/ChoirStallsSection';
import ElphinstoneGrave from './components/elphinstoneGrave';
import Mary from './components/goodbyeMary';
import StainedGlass from './components/stainedGlass';
import ChoirStallsPanorama from './components/choirStallsPanorama'
import SanctuaryPanorama from './components/sanctuaryPanorama';
import Help from "./components/help";
import WarMemWindow from './components/WarMemWindow';
import WestWindow from './components/WestWindow';
import ChapelMouse from './components/chapelMouse';
import DeGurbs from './components/deGurbs';
import OrganImages from './components/organImages';
import NorthEast from './components/northEast';
import Harrower from './components/harrower';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Info />
            </Layout>
           }
          />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
           }
          />
          <Route path="/harrower" element={
            <Layout>
              <Harrower />
            </Layout>
           }
          />
          <Route path="/northEast" element={
            <Layout>
              <NorthEast />
            </Layout>
           }
          />
          <Route path="/organImages" element={
            <Layout>
              <OrganImages />
            </Layout>
           }
          />
          <Route path="/chapelMouse" element={
            <Layout>
              <ChapelMouse />
            </Layout>
           }
          />
          <Route path="/deGurbs" element={
            <Layout>
              <DeGurbs />
            </Layout>
           }
          />
          <Route path="/warMemWindow" element={
            <Layout>
              <WarMemWindow />
            </Layout>
           }
          />
          <Route path="/westWindow" element={
            <Layout>
              <WestWindow />
            </Layout>
           }
          />
          <Route path="/panorama" element={
            <Layout>
              <Panorama />
            </Layout>
           }
          />
          <Route path="/smallPulpit" element={
            <Layout>
              <SmallPulpit />
            </Layout>
           }
          />
          <Route path="/roodScreen" element={
            <Layout>
              <RoodScreen />
            </Layout>
           }
          />
          <Route path="/anteChapel" element={
            <Layout>
              <AnteChapel />
            </Layout>
           }
          />
          <Route path="/graffiti" element={
            <Layout>
              <Graffiti />
            </Layout>
           }
          />
          <Route path="/choirStalls" element={
            <Layout>
              <ChoirStalls />
            </Layout>
           }
          />
          <Route path="/elphinstoneGrave" element={
            <Layout>
              <ElphinstoneGrave />
            </Layout>
           }
          />
          <Route path="/mary" element={
            <Layout>
              <Mary />
            </Layout>
           }
          />
          <Route path="/stainedGlass" element={
            <Layout>
              <StainedGlass />
            </Layout>
           }
          />
          <Route path="/choirStallsPanorama" element={
            <Layout>
              <ChoirStallsPanorama />
            </Layout>
           }
          />
          <Route path="/sanctuaryPanorama" element={
            <Layout>
              <SanctuaryPanorama />
            </Layout>
           }
          />
          <Route path="/help" element={
            <Layout>
              <Help/>
            </Layout>
          }
          />
        </Routes>
      </Router>
  );
}

export default App;
