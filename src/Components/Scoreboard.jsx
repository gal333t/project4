import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";
import {
  Card,
  Text,
  useColorModeValue,
  CardHeader,
  Flex,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function Scoreboard() {
  const { username, userScore, allUsersScores, setAllUsersScores } =
    useContext(SessionContext);

  const white = useColorModeValue("white", "white");
  const black = useColorModeValue("black", "black");

  async function getScores() {
    const { data } = await supabase
      .from("Users")
      .select("username, score")
      .order("score", { ascending: false });
    setAllUsersScores(data);
  }
  useEffect(() => {
    getScores();
  }, []);

  return (
    <>
      <div className="scoreboard-div" align="center">
        <Card
          w="60%"
          h="80%"
          bg={white}
          color={black}
          sx={{
            borderRadius: "25px",
            border: "4px",
            borderColor: "#66a8ba",
          }}
        >
          <CardHeader fontSize="40px">Scoreboard</CardHeader>
          <Divider w="90%" margin="auto" />
          {allUsersScores.map((usersScore) => {
            return (
              <>
                <Flex px="14" py="4" fontSize="25px">
                  <Text>{usersScore.username}</Text>
                  <Spacer />
                  <Text>{usersScore.score}</Text>
                </Flex>
              </>
            );
          })}
        </Card>
      </div>
    </>
  );
}
