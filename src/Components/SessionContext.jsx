import { createContext, useState, useEffect } from "react";
import supabase from "../supabase";

export const SessionContext = createContext([]);

const SessionContextComponent = ({ children }) => {
  const [session, setSession] = useState(null);
  const [username, setUsername] = useState(null);
  const [userScore, setUserScore] = useState(0); // how to set this up so it doesn't run turnery statement for text on screen..

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

  return (
    <SessionContext.Provider
      value={{ session, username, setUsername, userScore, setUserScore }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextComponent;
