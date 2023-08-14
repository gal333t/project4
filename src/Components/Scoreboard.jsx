import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";
import { Card, CardBody, Button, useColorModeValue } from "@chakra-ui/react";

export default function Scoreboard() {
  const { username, userScore } = useContext(SessionContext);

  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

  async function getScores() {
    const { data } = await supabase.from("Users").select("username, score");
    console.log(data);
  }

  return (
    <>
      <div className="scoreboard-div">
        <Card p="5px">
          <CardBody>Scoreboard</CardBody>
          <Button
            className="button"
            color={"#66a8ba"}
            bg={white}
            w="20%"
            m="0 auto"
            _hover={{ opacity: "80%" }}
            onClick={() => getScores()}
          >
            Submit
          </Button>
          {/* needs to grab Users table, map and create username on left |divider| score */}
        </Card>
      </div>
    </>
  );
}
