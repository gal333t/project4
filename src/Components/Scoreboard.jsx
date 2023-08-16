import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";
import { Card, Text, CardHeader, Flex, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Scoreboard() {
  const { allUsersScores, setAllUsersScores } = useContext(SessionContext);

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
        <Card w="60%" h="80%" borderRadius="20px" color="black" bg="#FBB8FC">
          <CardHeader fontSize="40px" color="#015929">
            Scoreboard
          </CardHeader>
          {/* <Divider w="90%" margin="auto" /> */}
          {allUsersScores.map((usersScore) => {
            return (
              <>
                <Flex px="14" py="4" fontSize="30px" bg="#015929">
                  <Text color="#FBB8FC">{usersScore.username}</Text>
                  <Spacer />
                  <Text color="#FBB8FC">{usersScore.score}</Text>
                </Flex>
              </>
            );
          })}
        </Card>
      </div>
    </>
  );
}
