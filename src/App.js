import "./App.scss";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Feedback from "./components/Feedback/Feedback";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {" "}
      <div className="background">
        <Navbar />
        <Hero />
      </div>
      <Banner />
      <Feedback />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
