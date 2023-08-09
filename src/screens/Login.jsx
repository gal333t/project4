import { useState } from "react";
import supabase from "../supabase.js";
import { Card, CardHeader, CardBody, Input, Button } from "@chakra-ui/react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="login-div">
      {!submitted ? (
        <>
          <Card align="center" bg="#66a8ba">
            <CardBody>
              <Input
                variant="filled"
                focusBorderColor="white"
                _focus={{ bg: "#EDF2F7", color: "#66a8ba" }}
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Button
                className="button"
                color="#66a8ba"
                onClick={(e) =>
                  supabase.auth
                    .signInWithOtp({ email })
                    .then(() => setSubmitted(true))
                }
              >
                Magic Code
              </Button>
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card align="center" bg="#66a8ba">
            <Input
              htmlSize={40}
              width="auto"
              variant="filled"
              focusBorderColor="white"
              _focus={{ bg: "#EDF2F7", color: "#66a8ba" }}
              placeholder="Magic Code"
              value={magicCode}
              onChange={(e) => setMagicCode(e.target.value)}
              isRequired
            />
            <br />

            <Button
              className="button"
              color="#66a8ba"
              onClick={(e) =>
                supabase.auth.verifyOtp({
                  type: "email",
                  email,
                  token: magicCode,
                })
              }
            >
              Submit
            </Button>
          </Card>
        </>
      )}
    </div>
  );
}
