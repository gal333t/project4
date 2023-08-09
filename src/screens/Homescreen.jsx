import BradItem from "../Client/BradItem";
import supabase from "../supabase";

export default function Homescreen() {
  return (
    <>
      <h3>Home Screen</h3>
      <BradItem />

      <button onClick={() => supabase.auth.signOut()}>Logout</button>
    </>
  );
}
