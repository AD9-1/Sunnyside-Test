import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <Banner />
      <Feedback />
    </div>
  );
}

export default App;
