import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    
      <NavBar />
      <Home />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
