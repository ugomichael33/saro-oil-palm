import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import Nav from "./components/Nav";
import Header from "./components/Header";
import Worker from "./components/Worker";
import Services from "./components/Services";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> 
          <div className="w-full mx-auto" style={{height:'4500px'}}>
              <Nav />
              <Header />
              <Worker />
              <Services />
              <About />
              <Capabilities />
              <Contact />
              <Footer />
          </div>             
    </Router>
  );
}

export default App;
