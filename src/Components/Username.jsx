import { Card, CardBody, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";

export default function Username() {
  const toast = useToast();
  const { username, setUsername } = useContext(SessionContext);

  return (
    <>
      <div className="login-div">
        <Card align="center" bg="#66a8ba">
          <CardBody>
            <Input
              variant="filled"
              focusBorderColor="white"
              _focus={{ bg: "#EDF2F7", color: "#66a8ba" }}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              className="button"
              color="#66a8ba"
              onClick={() => {
                if (username == username) {
                  toast({
                    description:
                      "Username already exists, please try a different one",
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
            >
              Confirm
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
