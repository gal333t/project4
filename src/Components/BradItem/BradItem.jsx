import { useState, useEffect } from "react";
import supabase from "../../supabase";
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
} from "@chakra-ui/react";
import { SessionContext } from "../SessionContext";
import { useContext } from "react";
import HowToPlay from "./HowToPlay";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState();
  const { username, userScore, setUserScore } = useContext(SessionContext);
  const darkGreen = useColorModeValue("#005929", "#005929");

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
                <CardBody align="center">
                  <HowToPlay />
                  <Image
                    boxSize="250px"
                    src={brad.imgurl}
                    alt={brad.alt_text}
                    borderRadius="5px"
                    mt="10px"
                  />
                  <Stack mt="12" spacing="2">
                    <Heading textAlign="center" fontSize="40px">
                      {brad.name}
                    </Heading>
                  </Stack>
                </CardBody>
                {userScore ? (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    textAlign="center"
                  >
                    Your overall score is: {userScore}
                  </Text>
                ) : (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    textAlign="center"
                  >
                    Current score is: {count}
                  </Text>
                )}
                {userAnswer && (
                  <Text
                    fontWeight="semibold"
                    fontSize="18px"
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
