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
} from "@chakra-ui/react";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);
  const [count, setCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState();

  const { username, setUsername, userScore, setUserScore } =
    useContext(SessionContext);

  useEffect(() => {
    getBradItems();
  }, []);

  async function getBradItems() {
    let { data } = await supabase.rpc("random_image");
    setBradItems(data);
  }

  async function determineBradStatus(itemID, status) {
    const { data } = await supabase
      .from("BRAD")
      .select("BRAD")
      .eq("id", itemID);
    let datsbaseStatus = data[0].BRAD;
    if (datsbaseStatus == status) {
      if (username !== null) {
        setUserScore(userScore + 1);
        getBradItems();
        setUserAnswer("correct 🎉");
      } else {
        setCount(count + 1);
        getBradItems();
        setUserAnswer("correct 🎉");
        console.log(username);
      }
    } else {
      getBradItems();
      setUserAnswer("incorrect 😔");
    }
  }

  async function getUserScore(username) {
    const { data } = await supabase
      .from("Users")
      .select("username")
      .eq("username", username);
    console.log(data);
  }

  return (
    <>
      {bradItems.map((brad) => {
        return (
          <div className="brad-item-div" key={brad.id}>
            <Card
              align="center"
              w="md"
              maxW="lg"
              mb="10px"
              sx={{
                borderRadius: "5px",
                border: "4px",
                borderColor: "#66a8ba",
              }}
            >
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
                    bg="#66a8ba"
                    onClick={() => {
                      determineBradStatus(brad.id, true);
                    }}
                  >
                    YES
                  </Button>
                  <Button
                    size="lg"
                    variant="solid"
                    bg="#66a8ba"
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
        );
      })}
    </>
  );
}
