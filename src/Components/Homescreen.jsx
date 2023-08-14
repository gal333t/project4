import { Text, Box, Flex } from "@chakra-ui/react";
import Scoreboard from "./Scoreboard";
import Username from "./Username";

export default function Homescreen() {
  return (
    <>
      <Box>
        <Flex alignItems="center" justifyContent="space-between" p="16">
          <Text fontSize="40px" color="#66a8ba">
            IMAGE FROM FINALISED GAME HERE
          </Text>
          <Text fontSize="20px" color="#66a8ba">
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
