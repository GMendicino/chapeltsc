import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// --- Helper Components ---
// Since all components must be in one file, we'll define placeholders here.
// You can replace these with your actual component code.

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 font-sans">
    <nav className="bg-gray-100 p-2 mb-4 rounded-md">
      <Link to="/" className="mr-2 text-blue-600 hover:underline">Home</Link>
      <Link to="/about" className="mr-2 text-blue-600 hover:underline">About</Link>
      <Link to="/help" className="text-blue-600 hover:underline">Help</Link>
    </nav>
    <main>{children}</main>
  </div>
);

const Info: React.FC = () => <div><h1>Info Page</h1><p>Welcome to the main information page.</p></div>;
const About: React.FC = () => <div><h1>About Page</h1><p>Information about this project.</p></div>;
const SmallPulpit: React.FC = () => <div><h1>Small Pulpit</h1></div>;
const RoodScreen: React.FC = () => <div><h1>Rood Screen</h1></div>;
const Panorama: React.FC = () => <div><h1>Panorama View</h1></div>;
const AnteChapel: React.FC = () => <div><h1>Ante-Chapel</h1></div>;
const Graffiti: React.FC = () => <div><h1>Graffiti</h1></div>;
const ChoirStalls: React.FC = () => <div><h1>Choir Stalls</h1></div>;
const ElphinstoneGrave: React.FC = () => <div><h1>Elphinstone Grave</h1></div>;
const Mary: React.FC = () => <div><h1>Goodbye Mary</h1></div>;
const StainedGlass: React.FC = () => <div><h1>Stained Glass</h1></div>;
const ChoirStallsPanorama: React.FC = () => <div><h1>Choir Stalls Panorama</h1></div>;
const SanctuaryPanorama: React.FC = () => <div><h1>Sanctuary Panorama</h1></div>;
const Help: React.FC = () => <div><h1>Help Page</h1></div>;
const WarMemWindow: React.FC = () => <div><h1>War Memorial Window</h1></div>;
const WestWindow: React.FC = () => <div><h1>West Window</h1></div>;
const ChapelMouse: React.FC = () => <div><h1>Chapel Mouse</h1></div>;
const DeGurbs: React.FC = () => <div><h1>De Gurbs</h1></div>;
const OrganImages: React.FC = () => <div><h1>Organ Images</h1></div>;
const NorthEast: React.FC = () => <div><h1>North East View</h1></div>;
const Harrower: React.FC = () => <div><h1>Harrower</h1></div>;


// --- Main App Component ---
const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Info /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/harrower" element={<Layout><Harrower /></Layout>} />
          <Route path="/northEast" element={<Layout><NorthEast /></Layout>} />
          <Route path="/organImages" element={<Layout><OrganImages /></Layout>} />
          <Route path="/chapelMouse" element={<Layout><ChapelMouse /></Layout>} />
          <Route path="/deGurbs" element={<Layout><DeGurbs /></Layout>} />
          <Route path="/warMemWindow" element={<Layout><WarMemWindow /></Layout>} />
          <Route path="/westWindow" element={<Layout><WestWindow /></Layout>} />
          <Route path="/panorama" element={<Layout><Panorama /></Layout>} />
          <Route path="/smallPulpit" element={<Layout><SmallPulpit /></Layout>} />
          <Route path="/roodScreen" element={<Layout><RoodScreen /></Layout>} />
          <Route path="/anteChapel" element={<Layout><AnteChapel /></Layout>} />
          <Route path="/graffiti" element={<Layout><Graffiti /></Layout>} />
          <Route path="/choirStalls" element={<Layout><ChoirStalls /></Layout>} />
          <Route path="/elphinstoneGrave" element={<Layout><ElphinstoneGrave /></Layout>} />
          <Route path="/mary" element={<Layout><Mary /></Layout>} />
          <Route path="/stainedGlass" element={<Layout><StainedGlass /></Layout>} />
          <Route path="/choirStallsPanorama" element={<Layout><ChoirStallsPanorama /></Layout>} />
          <Route path="/sanctuaryPanorama" element={<Layout><SanctuaryPanorama /></Layout>} />
          <Route path="/help" element={<Layout><Help/></Layout>} />
        </Routes>
      </Router>
  );
}

export default App;

