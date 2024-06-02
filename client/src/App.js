import "./App.css";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Education from "./Pages/Education.js";
import Experience from "./Pages/Experience.js";
import TechStack from "./Pages/TechStack.js";
import Contact from "./Pages/Contact.js";
import Header from "./components/Layout/Header.js";
import Particle from "./Particle.js";
import Sidebar from "./components/Layout/Sidebar.js";
import Project from "./Pages/Project.js";
import Footer from "./Pages/Footer.js";

function App() {
  return (
    <>
    <Particle/>
        <div className="flex flex-col space-y-20 bg-black">
          <div style={{position:"fixed",zIndex:'100'}}>
          <Header /> 
          </div>
          <div style={{position:"fixed",zIndex:'50'}}>
          <Sidebar /> 
          </div> 
          <Home/>
          <About />
          <Education />
          <Experience />
          <TechStack />
          <Project/>
          <div style={{zIndex:'30'}}>
          <Contact  />
          </div>
          <Footer/>
      </div>
    </>
  );
}

export default App;
