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

  useEffect(() => {
    getBradItems();
  }, []); // this will need updating so it only runs on button clicks "bradStatus" in the array

  async function getBradItems() {
    let { data } = await supabase.rpc("random_image");
    setBradItems(data);
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
                      console.log("YES clicked");
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
            </Card>
          </div>
        );
      })}
    </>
  );
}
