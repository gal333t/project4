import { useState, useEffect } from "react";
import supabase from "../supabase";

export default function Homescreen() {
  const [bradItems, setBradItems] = useState([]);

  useEffect(() => {
    getBradItems();
  }, []);

  async function getBradItems() {
    const { data } = await supabase.from("BRAD").select("*");
    setBradItems(data);
  }
  console.log(bradItems);
  return (
    <>
      <h3>Home Screen</h3>
      {/* {bradItems.map((brad) => {
        <p>brad.name</p>;
      })} */}
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </>
  );
}
