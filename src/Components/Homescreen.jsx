import { Text, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Scoreboard from "./Scoreboard";

export default function Homescreen() {
  const text = useColorModeValue("#005829", "#FBB8FC");

  return (
    <>
      <Box>
        <Flex alignItems="center" justifyContent="space-between" p="16">
          <Text fontSize="40px" color={text}>
            IMAGE FROM FINALISED GAME HERE
          </Text>
          <Text fontSize="20px" color={text}>
            BRAD is a recycling program started by Banish. To play, all you need
            to do is decide whether or not an item can be recycled by the
            program.
          </Text>
        </Flex>
        <Scoreboard />
      </Box>
    </>
  );
}
