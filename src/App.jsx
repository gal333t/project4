import { Routes, Route } from "react-router-dom";
import "./App.css";
import SessionContextComponent from "./Components/SessionContext";
import Header from "./Components/Header";
import Homescreen from "./Components/Homescreen";
import Login from "./Components/Login";
import About from "./Components/About";
import BradItem from "./Components/BradItem";
import Footer from "./Components/Footer";

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
          </Routes>
          <Footer />
        </>
      </SessionContextComponent>
    </>
  );
}
