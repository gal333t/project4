import { Routes, Route } from "react-router-dom";
import "./App.css";
import SessionContextComponent from "./Components/SessionContext";
import Header from "./Components/Header";
import Homescreen from "./Components/Homescreen";
import Login from "./Components/Login";
import About from "./Components/About";
import BradItem from "./Components/BradItem";
import Footer from "./Components/Footer";
import Username from "./Components/Username";
import Scoreboard from "./Components/Scoreboard";

export default function App() {
  return (
    <>
      <SessionContextComponent>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<BradItem />} />
            <Route path="/username" element={<Username />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
          </Routes>
          <Footer />
        </>
      </SessionContextComponent>
    </>
  );
}
