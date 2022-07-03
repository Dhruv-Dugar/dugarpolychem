import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation"
import { Header } from "./components/header";
import { About } from "./components/about.jsx"; //dfv
import { Services } from "./components/services.jsx"; //dvs
import { Gallery } from "./components/gallery.jsx"; //cecwev
import {Contact} from "./components/contact.jsx";
import JsonData from "./data/data.json"; //cevcwv
import SmoothScroll from "smooth-scroll"; //vwvwr
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
