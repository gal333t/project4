import {
  Card,
  CardBody,
  Input,
  Button,
  useToast,
  useColorModeValue,
  cookieStorageManager,
} from "@chakra-ui/react";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";

export default function Username() {
  const toast = useToast();
  const { username, setUsername } = useContext(SessionContext);
  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

  async function determineUserStatus() {
    const { data } = await supabase
      .from("Users")
      .select("")
      .eq("username", username);
    console.log(data);
    if (data == "") {
      await supabase.from("Users").insert({ username: username });
      toast({
        description: "Your username has been created!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
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
      <div className="login-div">
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
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
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
