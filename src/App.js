import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ControlledCarousel from "./components/carousel/ControlledCarousel";
import About from "./components/about/About";
import Screenshot from "./components/screenshot/Screenshot";
import Service from "./components/services/Service";
import Blog from "./components/blog/Blog";
function App() {
  return (
    <div>
      <Navbar />
      <ControlledCarousel />
      <About/>
      <Screenshot/>
      <Service/>
      <Blog/>
      
    </div>
  );
}

export default App;
