import {
  Card,
  CardBody,
  CardHeader,
  Link,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function About() {
  const text = useColorModeValue("#35606b", "#66a8ba");

  return (
    <div className="about-div">
      <Card
        align="center"
        color={text}
        variant="unstyled"
        m="10"
        fontWeight="semibold"
        border="transparent"
      >
        <CardHeader fontSize="30px" p="7px">
          What is BRAD
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          BRAD stands for Banish Recycling And Disposal Program, started by
          Banish a company who sell sustainable items as well as share education
          on sustainability. Everyday Aussies can send in their hard to recycle
          items, and the team of volunteers will sort and send them through to
          different waste streams. For more info on the amazing work Banish do,
          please visit their website{" "}
          <Link href="https://banish.com.au" isExternal>
            here
            <ExternalLinkIcon mx="5px" />
          </Link>
        </CardBody>
        <CardHeader fontSize="30px" p="7px">
          How do I play 'Can I BRAD this?'
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          Aimed at people new to the BRAD program or those who want to test &
          refresh their memory, learn what can and can't be recycled by BRAD
          through a fun game. A randomly picked item will show up and you need
          to decide if it can or can't be recycled by the BRAD program. Select
          your choice by clicking either the 'yes' or 'no' buttons. If you're
          right, you'll get 1 point! And if you're wrong, your score doesn't
          change. After each guess, a new option will render for you to decide,
          can you BRAD this?
        </CardBody>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          For more info on BRAD{" "}
          <Link href="https://banish.com.au/pages/recycling-program" isExternal>
            click here
            <ExternalLinkIcon mx="5px" />
          </Link>
        </CardBody>
        <Divider bg="blackAlpha.300" m="5px" w="60%" />
        <CardHeader fontSize="30px" p="7px">
          About Me
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          Hello, I'm Galit! I've been a volunteer with BRAD for over 2 years
          now, and I absolutely love it! We go and sort through parcels,
          allocating different items into their respective waste streams. And
          sometimes we get items that aren't able to be recycled, even by BRAD.
          This website was created as part of my final project in a software
          engineering course, I wanted to create something fun and educational
          that was centered on a topic I am passionate about. Hopefully everyone
          can learn something new and it encourages people to participate in
          BRAD. More on me{" "}
          <Link href="https://www.galitmoss.com/" isExternal>
            here
            <ExternalLinkIcon mx="5px" />
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
