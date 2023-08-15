import {
  Card,
  CardBody,
  Input,
  Button,
  useToast,
  useColorModeValue,
  CardHeader,
} from "@chakra-ui/react";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

export default function Username() {
  const toast = useToast();
  const navigate = useNavigate();

  const { username, setUsername, setUserScore, userEmail } =
    useContext(SessionContext);

  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

  async function determineUserStatus() {
    const { data } = await supabase
      .from("Users")
      .select("")
      .eq("username", username);
    console.log(data);
    if (data == "") {
      await supabase
        .from("Users")
        .insert({ email: userEmail, username: username, score: 0 });
      toast({
        description: "Your username has been created!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setUsername(username);
      console.log(username);
      setUserScore(0);
      navigate("/");
    } else {
      toast({
        description: "Username already exists, please try a different one",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <div className="username-div">
        <Card align="center" bg="#66a8ba">
          <CardBody>
            <CardHeader fontSize="30px">Set up your Username:</CardHeader>
            <Input
              variant="filled"
              bg={white}
              color={black}
              focusBorderColor="white"
              _focus={{ bg: white, color: black }}
              _placeholder={{ color: "blackAlpha.400" }}
              _hover={{ bg: white, color: black }}
              isRequired
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Button
              className="button"
              color={"#66a8ba"}
              bg={white}
              _hover={{ opacity: "80%" }}
              onClick={() => determineUserStatus()}
            >
              Confirm
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
