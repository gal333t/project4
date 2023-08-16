import { useState, useEffect } from "react";
import supabase from "../supabase";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Text,
  Heading,
  Stack,
  useColorModeValue,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const { username, userScore, setUserScore } = useContext(SessionContext);
  const darkGreen = useColorModeValue("#005929", "#005929");
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function getBradItems() {
    let { data } = await supabase.rpc("random_image");
    setBradItems(data);
  }

  useEffect(() => {
    getBradItems();
  }, []);

  async function determineBradStatus(itemID, status) {
    const { data } = await supabase
      .from("BRAD")
      .select("BRAD")
      .eq("id", itemID);
    if (data[0].BRAD == status) {
      if (username !== null) {
        setUserScore(userScore + 1);
        getBradItems();
        setUserAnswer("correct 🎉");
      } else {
        setCount(count + 1);
        getBradItems();
        setUserAnswer("correct 🎉");
      }
    } else {
      getBradItems();
      setUserAnswer("incorrect 😔");
    }
  }

  async function updateUserScore(username) {
    const { data } = await supabase
      .from("Users")
      .update({ score: userScore })
      .eq("username", username)
      .select("score");
  }

  useEffect(() => {
    updateUserScore(username);
  }, [userScore]);

  return (
    <>
      {bradItems.map((brad) => {
        return (
          <>
            <div className="brad-item-div" key={brad.id}>
              <Card
                align="center"
                w="md"
                maxW="lg"
                mb="10px"
                bg="white"
                color={darkGreen}
                sx={{
                  borderRadius: "25px",
                  border: "4px",
                  borderColor: "#05AA6B",
                }}
              >
                <IconButton
                  color={darkGreen}
                  bg="white"
                  _hover={{ bg: "white" }}
                >
                  <InfoIcon boxSize={7} onClick={onOpen}></InfoIcon>
                </IconButton>
                <Modal isOpen={isOpen} onClose={onClose} p="5">
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader m="3px" textAlign="center">
                      How to play Can I BRAD This?
                    </ModalHeader>
                    <ModalBody textAlign="center" mb="15px" fontSize="18px">
                      A randomly picked item will show up and you need to decide
                      if it can or can't be recycled by the BRAD program. Select
                      your choice by clicking either the 'yes' or 'no' buttons.
                      If you're right, you'll get 1 point! And if you're wrong,
                      your score doesn't change. If you're logged in, your score
                      will also be saved to the scoreboard. After each guess,
                      another option will render for you to decide, can you BRAD
                      this?
                      <br />
                      For more info on what can and can't be recycled, please
                      visit{" "}
                      <a
                        href="https://banish.com.au/pages/recycling-program"
                        target="_blank"
                        className="link"
                      >
                        Banish.
                      </a>
                    </ModalBody>
                    <ModalCloseButton />
                  </ModalContent>
                </Modal>
                <CardBody align="center">
                  <Image
                    boxSize="250px"
                    src={brad.imgurl}
                    alt={brad.alt_text}
                    borderRadius="5px"
                    mt="10px"
                  />
                  <Stack mt="12" spacing="2">
                    <Heading
                      className="banish-blue-text"
                      textAlign="center"
                      fontSize="40px"
                    >
                      {brad.name}
                    </Heading>
                  </Stack>
                </CardBody>
                {userScore ? (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    className="banish-blue-text"
                    textAlign="center"
                  >
                    Your overall score is: {userScore}
                  </Text>
                ) : (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    className="banish-blue-text"
                    textAlign="center"
                  >
                    Current score is: {count}
                  </Text>
                )}
                {userAnswer && (
                  <Text
                    fontWeight="semibold"
                    fontSize="18px"
                    className="banish-blue-text"
                    textAlign="center"
                  >
                    Your guess was {userAnswer}
                  </Text>
                )}
                <CardFooter m="2">
                  <ButtonGroup spacing="5">
                    <Button
                      size="lg"
                      variant="solid"
                      bg="#005929"
                      color="#fbb8fc"
                      _hover={{ opacity: "80%" }}
                      onClick={() => {
                        determineBradStatus(brad.id, true);
                      }}
                    >
                      YES
                    </Button>
                    <Button
                      size="lg"
                      variant="solid"
                      bg="#005929"
                      color="#fbb8fc"
                      _hover={{ opacity: "80%" }}
                      onClick={() => {
                        determineBradStatus(brad.id, false);
                      }}
                    >
                      NO
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
            <Text fontSize="12px" textAlign="center" m="20px">
              Disclaimer: This website was not created by Banish. As a result,
              some of the information may not be up to date. Please refer to the
              official Banish website if in doubt.
            </Text>
          </>
        );
      })}
    </>
  );
}
