import "./App.css";
import { useState, useEffect } from "react";
import Login from "./screens/Login";
import supabase from "./supabase";
import Homescreen from "./screens/Homescreen";

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
    return <Login />;
  } else {
    return <Homescreen />;
  }
}
