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
import BradItem from "./BradItem.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isError = magicCode.length !== 6;

  const toast = useToast();
  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

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
                bg={white}
                color={black}
                focusBorderColor="white"
                _focus={{ bg: white, color: black }}
                _placeholder={{ color: "blackAlpha.400" }}
                _hover={{ bg: white, color: black }}
                value={email}
                isRequired
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <Button
                className="button"
                color={"#66a8ba"}
                bg={white}
                _hover={{ opacity: "80%" }}
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
                bg={white}
                color={black}
                focusBorderColor="white"
                _focus={{ bg: white, color: black }}
                _placeholder={{ color: "blackAlpha.400" }}
                _hover={{ bg: white, color: black }}
                placeholder="Magic Code"
                value={magicCode}
                isRequired
                onChange={(e) => setMagicCode(e.target.value)}
              />
              <br />
              <Button
                className="button"
                color={"#66a8ba"}
                bg={white}
                _hover={{ opacity: "80%" }}
                onClick={() => {
                  if (magicCode.length <= 0) {
                    toast({
                      description: "Magic Code cannot be blank",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  } else if (magicCode.length !== 6) {
                    toast({
                      description: "Magic Code must be 6 numbers",
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
