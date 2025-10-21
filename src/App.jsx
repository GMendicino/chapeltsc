import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Info from './pages/Info';
import SmallPulpit from './pages/details/SmallPulpit' ;
import RoodScreen from './pages/RoodScreen' ;
import Panorama from './pages/Panorama';
import AnteChapel from './pages/Ante-Chapel';
import Graffiti from './pages/graffiti';
import ChoirStalls from './pages/ChoirStallsSection';
import ElphinstoneGrave from './pages/elphinstoneGrave';
import Mary from './pages/goodbyeMary';
import StainedGlass from './pages/stainedGlass';
import ChoirStallsPanorama from './pages/choirStallsPanorama'
import SanctuaryPanorama from './pages/sanctuaryPanorama';
import Help from "./pages/help";
import WarMemWindow from './pages/WarMemWindow';
import WestWindow from './pages/WestWindow';
import ChapelMouse from './pages/chapelMouse';
import DeGurbs from './pages/deGurbs';
import OrganImages from './pages/organImages';
import NorthEast from './pages/northEast';
import Harrower from './pages/harrower';

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
