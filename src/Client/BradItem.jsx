import { useState, useEffect } from "react";
import supabase from "../supabase";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);

  useEffect(() => {
    getBradItems();
  }, []);

  async function getBradItems() {
    const { data } = await supabase.from("BRAD").select("*");
    setBradItems(data);
  }
  return (
    <>
      {bradItems.map((brad) => {
        return <p>{brad.name}</p>;
      })}{" "}
    </>
  );
}
