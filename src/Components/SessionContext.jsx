import { useContext, createContext, useState } from "react";

export const SessionContext = createContext([]);

const SessionContextComponent = ({ children }) => {
  const [session, setSession] = useState(null);
};
