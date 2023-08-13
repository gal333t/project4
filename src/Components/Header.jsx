import { Heading } from "@chakra-ui/react";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header>
        <Heading
          color="#66a8ba"
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
