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
} from "@chakra-ui/react";

export default function BradItem() {
  const [bradItems, setBradItems] = useState([]);
  const [bradStatus, setBradStatus] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getBradItems();
  }, []); // this will need updating so it only runs on button clicks "bradStatus" in the array

  async function getBradItems() {
    let { data } = await supabase.rpc("random_image");
    setBradItems(data);
  }

  async function determineBradStatus(status) {
    // const { data } = await supabase.from("BRAD").select("BRAD");
    // need to find by ID from supabase
    // SELECT "BRAD" from BRAD WHERE ID = itemID

    if (status == statusFromTable) {
      console.log("true");
      // getBradItems()
      // setCount = count + 1
    } else {
      console.log("false");
      // getBradItems() ?
    }
  }

  return (
    <>
      {bradItems.map((brad) => {
        return (
          <div className="brad-item-div" key={brad.id}>
            <Card align="center" bg="#66a8ba">
              <CardBody>
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
                      setItemID(brad.id);
                      setBradStatus(true);
                      determineBradStatus(bradStatus);
                    }}
                  >
                    YES
                  </Button>
                  <Button
                    variant="solid"
                    color="#66a8ba"
                    onClick={() => {
                      console.log("NO clicked");
                    }}
                  >
                    NO
                  </Button>
                </ButtonGroup>
              </CardFooter>
              <CardBody fontWeight="semibold">
                Your current score is: {count}
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
