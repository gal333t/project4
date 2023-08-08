import { useState } from "react";
import supabase from "../supabase.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <>
          <input
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={(e) =>
              supabase.auth
                .signInWithOtp({ email })
                .then(() => setSubmitted(true))
            }
          >
            Get Magic Code
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Magic Code"
            value={magicCode}
            onChange={(e) => setMagicCode(e.target.value)}
          />
          <button
            onClick={(e) =>
              supabase.auth.verifyOtp({
                type: "email",
                email,
                token: magicCode,
              })
            }
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}
