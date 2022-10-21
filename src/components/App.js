import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpandableMenu from "../containers/ExpandableMenu";
import Home from "../containers/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Insider from "../components/Insider";

const App = () => {
  return (
    <Router>
      <div id="outer-container">
        <ExpandableMenu />
        <Routes>
          <Route 
              path="/"
              element={<Home />}
            />
            <Route 
            index element={<Home />} 
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
              path="work"
              element={<Work />}
            >
              <Route 
                path="insider" 
                element={<Insider />}
              />
              {/* {/* <Route path="account" element={<Gallery />} /> */}
              {/* <Route path="account" element={<Festival />} /> */}
            </Route>
              {/* </div> */}
            {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
