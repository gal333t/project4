import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./supabase";
import Homescreen from "./Components/Homescreen";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import BradItem from "./Components/BradItem";
import SessionContextComponent from "./Components/SessionContext";

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
        </>
      </SessionContextComponent>
    </>
  );
}
