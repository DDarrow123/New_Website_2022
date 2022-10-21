import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpandableMenu from "../containers/ExpandableMenu";
import Home from "../containers/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Insider from "./Insider";
import Gallery from "./Gallery";
import Festival from "./Festival";
import Grid from "./CardGrid";
import Ecommerce from "./Ecommerce";

const App = () => {
  return (
    <Router>
      <div>
        <ExpandableMenu />
        <Routes>
          <Route 
          index element={<Home />} 
          />
          <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/about" 
              element={<About />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
            <Route 
              path="/work"
              element={<Work />}
            />
            <Route 
              path="insider" element={<Insider />} 
            />
            <Route 
              path="/gallery" 
              element={<Gallery />} 
            />
            <Route 
              path="/festival" 
              element={<Festival />} 
            />
            <Route 
              path="/grid" 
              element={<Grid />} 
            />
            <Route 
              path="/ecommerce" 
              element={<Ecommerce />}
            />
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
