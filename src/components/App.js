import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpandableMenu from "../containers/ExpandableMenu";
import Home from "../containers/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";

const App = () => {
  return (
    <Router>
      <div id="outer-container">
        <ExpandableMenu />
        <Routes>
          {/* <Route 
          index element={<Home />} 
          /> */}
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
              path="/work/*"
              element={<Work />}
            />
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
