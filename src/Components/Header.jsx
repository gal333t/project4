import { Heading, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Header() {
  const header = useColorModeValue("#05AA6B", "#D8DE61");

  return (
    <>
      <header>
        <Heading
          color={header}
          fontSize="60px"
          textAlign="center"
          m="7"
          fontFamily="Arvo"
        >
          Can I BRAD this?
        </Heading>
        <Navbar />
      </header>
    </>
  );
}
