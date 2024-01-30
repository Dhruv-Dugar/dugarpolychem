import NavigationBar from "../components/Navigation"
import Header from "../components/header.jsx";
import About from "../components/about.jsx";
import Services from "../components/services.jsx";
import Gallery from "../components/gallery.jsx";
import Contact from "../components/contact.jsx";

function LandingPage() {
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

export default LandingPage;