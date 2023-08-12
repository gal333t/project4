import { useState } from "react";
import supabase from "../supabase.js";
import { Card, CardBody, Input, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();

  async function determineUser(emailInput) {
    // need to change method to not error if email doesn't exist
    const { data } = await supabase
      .from("Users")
      .select("email")
      .eq("email", emailInput);
    console.log(data);
    if (data.length !== 0) {
      console.log("email matches one with account already");
    } else {
      // not working to add new User to table Users.. trying const {data} to match docs
      const { data } = await supabase
        .from("Users")
        .insert({ email: emailInput });
      console.log("user does not exist, need to create new user in table here");
    }
  }

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
                    determineUser(email);
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
                as={Link}
                to="/"
                onClick={() => {
                  if (magicCode.length <= 0) {
                    toast({
                      description: "Magic Code cannot be blank",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  } else {
                    supabase.auth.verifyOtp({
                      type: "email",
                      email,
                      token: magicCode,
                    });
                    console.log("Logged in successfully");
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
