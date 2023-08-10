import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./supabase";
import Homescreen from "./Components/Homescreen";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import BradItem from "./Components/BradItem";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<BradItem />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<BradItem />} />
        </Routes>
      </>
    );
  }
}
