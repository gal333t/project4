import { Heading } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header>
        <Heading
          color="#66a8ba"
          fontSize="50px"
          textAlign="center"
          m="10"
          fontWeight="bold"
          fontFamily="Bitter"
        >
          Can I BRAD this?
        </Heading>
        <Navbar />
      </header>
    </>
  );
}
