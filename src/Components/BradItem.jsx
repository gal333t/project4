import { useState, useEffect } from "react";
import supabase from "../supabase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);
  const [count, setCount] = useState(0);
  const [storedCount, setStoredCount] = useState(0); // when updated, add int() so number stored is integar
  const [answer, setAnswer] = useState(); // how to set this up so it doesn't run turnery statement for text on screen..

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
      // if(username) { setStoredCount(storedCount + 1)} else { setCount(count + 1)}
      setCount(count + 1);
      getBradItems();
      setAnswer("correct 🎉");
    } else {
      getBradItems();
      setAnswer("incorrect 😔");
    }
  }

  return (
    <>
      {bradItems.map((brad) => {
        return (
          <div className="brad-item-div" key={brad.id}>
            <Card align="center" bg="#66a8ba">
              <CardBody align="center">
                <CardHeader color="white" textAlign="center" fontSize="30px">
                  {brad.name}
                </CardHeader>
                <Image
                  boxSize="250px"
                  src={brad.imgurl}
                  alt={brad.alt_text}
                  borderRadius="5px"
                />
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    color="#66a8ba"
                    onClick={() => {
                      determineBradStatus(brad.id, true);
                    }}
                  >
                    YES
                  </Button>
                  <Button
                    variant="solid"
                    color="#66a8ba"
                    onClick={() => {
                      determineBradStatus(brad.id, false);
                    }}
                  >
                    NO
                  </Button>
                </ButtonGroup>
              </CardFooter>
              <CardBody>
                {answer && (
                  <Text
                    fontWeight="semibold"
                    fontSize="18px"
                    color="white"
                    textAlign="center"
                  >
                    Your guess was {answer}
                  </Text>
                )}
                {/* {storedCount ? (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    color="white"
                    textAlign="center"
                  >
                    Your overall score is: {storedCount}
                  </Text>
                ) : (
                  <Text
                    p="3px"
                    fontWeight="semibold"
                    fontSize="18px"
                    color="white"
                    textAlign="center"
                  >
                    Current score is: {count}
                  </Text>
                )} */}
                <Text
                  p="3px"
                  fontWeight="semibold"
                  fontSize="18px"
                  color="white"
                  textAlign="center"
                >
                  Current score is: {count}
                </Text>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
