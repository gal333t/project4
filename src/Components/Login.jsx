import { useState } from "react";
import supabase from "../supabase.js";
import { Card, CardBody, Input, Button, useToast } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();

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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <Button
                className="button"
                color="#66a8ba"
                onClick={(e) => {
                  if (email.length <= 0) {
                    toast({
                      description: "Email cannot be blank",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  } else {
                    supabase.auth
                      .signInWithOtp({ email })
                      .then(() => setSubmitted(true));
                    toast({
                      description: "A Magic Code has been emailed to you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
              >
                Magic Code
              </Button>
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card align="center" bg="#66a8ba">
            <CardBody>
              <Input
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
                onClick={(e) => {
                  if (magicCode.length <= 0) {
                    toast({
                      description: "Magic Code cannot be blank",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                    supabase.auth.verifyOtp({
                      type: "email",
                      email,
                      token: magicCode,
                    });
                  }
                }}
              >
                Submit
              </Button>
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
}
