import LandingPage from "./Pages/LandingPage";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
        <LandingPage />
    </div>

  )
}

export default App;
