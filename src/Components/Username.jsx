import { Card, CardBody, Input, Button, useToast } from "@chakra-ui/react";

export default function Username() {
  const toast = useToast();
  <Card>
    <CardBody>Select username:</CardBody>
    <Input></Input>
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
