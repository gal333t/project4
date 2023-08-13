import { useState } from "react";
import supabase from "../supabase.js";
import {
  Card,
  CardBody,
  Input,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toast = useToast();
  const bg = useColorModeValue("white", "white");
  const txtColor = useColorModeValue("black", "black");

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
                bg={bg}
                color={txtColor}
                focusBorderColor="white"
                _focus={{ bg: bg, color: txtColor }}
                _placeholder={{ color: "blackAlpha.400" }}
                _hover={{ bg: bg, color: txtColor }}
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <Button
                className="button"
                color={"#66a8ba"}
                bg={bg}
                _hover={{ bg: "whiteAlpha.800 " }}
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
                bg={bg}
                color={txtColor}
                focusBorderColor="white"
                _focus={{ bg: bg, color: txtColor }}
                _hover={{ bg: bg, color: txtColor }}
                _placeholder={{ color: "blackAlpha.400" }}
                placeholder="Magic Code"
                value={magicCode}
                onChange={(e) => setMagicCode(e.target.value)}
                isRequired
              />
              <br />
              <Button
                className="button"
                color={"#66a8ba"}
                bg={bg}
                _hover={{ bg: "whiteAlpha.800 " }}
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
