import { Card, CardBody, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function Username() {
  const [username, setUsername] = useState("");
  const toast = useToast();
  <Card align="center" bg="#66a8ba">
    <CardBody>Select username:</CardBody>
    <Input
      variant="filled"
      focusBorderColor="white"
      _focus={{ bg: "#EDF2F7", color: "#66a8ba" }}
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
    ></Input>
    <Button
      onClick={() => {
        if (username == username) {
          toast({
            description: "Username already exists, please try a different one",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            description: "Your username has been created!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          console.log("redirect to a different page next");
        }
      }}
    ></Button>
  </Card>;
}
