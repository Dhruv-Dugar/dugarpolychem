import NavigationBar from "./components/Navigation"
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Gallery from "./components/gallery.jsx";
import { Contact } from "./components/contact.jsx";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App;
