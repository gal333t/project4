import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./supabase";
import Homescreen from "./Components/Homescreen";
import Header from "./Components/Header";
import Login from "./Components/Login";

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
        {/* <Login /> */}
        <Homescreen />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Homescreen />
      </>
    );
  }
}
