import "./App.css";
import Navbar from "./Header/Navbaar/Navbaar";
// src/index.js or src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import JoinTheStudy from "./JoinTheStudy/JoinTheStudy";
import AllinoneSolution from "../src/AllinoneSolution/AllinoneSolution";
import SlidingCard from "./SlidingCard/SlidingCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./Banner/Banner";
import Unlockyour from "./UnlockyourSliding/Unlockyour";
import Event from "./Event/Event";
import Lets from "./Lets/Lets";
import Footer from "./Footer/Footer";
import Driving from "./Driving/Driving";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Banner />
        <JoinTheStudy />
        <AllinoneSolution />
        <SlidingCard />
        <Unlockyour />
        <Event />
        <Driving />
        <Lets />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
