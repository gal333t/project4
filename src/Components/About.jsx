import {
  Text,
  Link,
  Divider,
  useColorModeValue,
  Flex,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function About() {
  const text = useColorModeValue("#005829", "#FBB8FC");
  const header = useColorModeValue("#015931", "#00A96C");

  return (
    <div className="about-div">
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Stack
          color={text}
          m="10"
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Text fontSize="30px" p="7px" color={header} fontWeight="bold">
            What is BRAD?
          </Text>
          <Text fontSize="20px" p="7px">
            BRAD stands for Banish Recycling And Disposal Program, started by
            Banish a company who sell sustainable items as well as share
            education on sustainability. Everyday Aussies can send in their hard
            to recycle items, and the team of volunteers will sort and send them
            through to different waste streams.
            <br />
          </Text>
          <Text fontSize="20px" p="7px">
            For more info on BRAD{" "}
            <Link
              href="https://banish.com.au/pages/recycling-program"
              isExternal
            >
              click here
              <ExternalLinkIcon mx="5px" />
            </Link>
          </Text>
          <Divider m="5px" />
          <Text fontSize="30px" p="7px" color={header} fontWeight="bold">
            About Me
          </Text>
          <Text fontSize="20px" p="7px">
            Hello, I'm Galit! I've been a volunteer with BRAD for over 2 years
            now, and I absolutely love it! We go and sort through parcels,
            allocating different items into their respective waste streams. And
            sometimes we get items that aren't able to be recycled, even by
            BRAD. This website was created as part of my final project in a
            software engineering course, I wanted to create something fun and
            educational that was centered on a topic I am passionate about.
            Hopefully everyone can learn something new and it encourages people
            to participate in BRAD. More on me{" "}
            <Link href="https://www.galitmoss.com/" isExternal>
              here
              <ExternalLinkIcon mx="5px" />
            </Link>
          </Text>
        </Stack>
        <Box
          w={{ base: "80%", md: "60%", sm: "40%" }}
          mb={{ base: 12, md: 0 }}
          align="center"
        >
          <Image
            src="https://i.ibb.co/qkQ5DVH/IMG-1383.jpg"
            boxSize="60%"
            rounded="10px"
            p="5px"
            alt="A white tub full of medical blister packs in the top left spanning about half the image. A small blue tub full of colourful bread tags in the bottom right and above it another small tub with elastic bands. Displaying the sorting of BRAD items."
          />
        </Box>
      </Flex>
    </div>
  );
}
