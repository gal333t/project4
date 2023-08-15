import { useState, useContext } from "react";
import supabase from "../supabase.js";
import {
  Card,
  CardBody,
  Input,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { SessionContext } from "./SessionContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { setUsername, setUserScore, setUserEmail } =
    useContext(SessionContext);

  const navigate = useNavigate();
  const toast = useToast();

  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

  async function determineUser(emailInput) {
    // if the below is NULL then user does not already exist, else user does exist
    const { data } = await supabase
      .from("Users")
      .select("email, score")
      .eq("email", emailInput);
    if (data.length !== 0) {
      setUsername(data[0].username);
      setUserScore(data[0].score);
      navigate("/");
    } else {
      setUserEmail(email);
      console.log("new users email is:");
      console.log(email);
      navigate("/username");
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
                onClick={async () => {
                  if (magicCode.length !== 6) {
                    toast({
                      description: "Magic Code must be 6 numbers",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                  } else {
                    const { data, error } = await supabase.auth.verifyOtp({
                      type: "email",
                      email,
                      token: magicCode,
                    });
                    if (error) {
                      toast({
                        description: error.message,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      });
                    } else if (data) {
                      console.log(data.user.email);
                      determineUser(data.user.email);
                    }
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
