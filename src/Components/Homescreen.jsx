import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function Homescreen() {
  const text = useColorModeValue("#005829", "#4FA9BF");

  return (
    <>
      <Box p="4">
        <Flex alignItems="center" justifyContent="space-between" p="4">
          <Box
            w={{ base: "80%", md: "60%", sm: "40%" }}
            mb={{ base: 12, md: 0 }}
            align="center"
          >
            <Image
              src="https://i.ibb.co/mtrDY4T/BRAD.webp"
              boxSize="md"
              rounded="10px"
            />
          </Box>
          <Text fontSize="25px" color={text} ml="5">
            BRAD is a recycling program started by{" "}
            <a href="https://banish.com.au/" target="_blank" className="link">
              Banish
            </a>
            . To play, all you need to do is decide whether or not an item can
            be recycled by the program.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
