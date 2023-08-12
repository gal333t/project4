import { Card, CardBody, CardHeader, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SessionContext } from "./SessionContext";
import { useContext } from "react";

export default function About() {
  const session = useContext(SessionContext);

  return (
    <div className="about-div">
      <Card
        align="center"
        bg="#66a8ba"
        m="10"
        color="white"
        fontWeight="semibold"
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
            <ExternalLinkIcon mx="7px" />
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
        <CardHeader fontSize="30px" p="7px">
          About Me
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          Hello, I'm Galit! I've been a volunteer with BRAD for over 2 years
          now, and I absolutely love it! We go and sort through parcels,
          allocating different items in their respective waste streams. But
          sometimes we get items that aren't able to be recycled, even by BRAD.
          This website was created as part of my final project in a software
          engineering course, I wanted to create something fun and educational
          that was centered on a topic I am passionate about.
        </CardBody>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          For more info on BRAD click{" "}
          <Link href="https://banish.com.au/pages/recycling-program" isExternal>
            here
            <ExternalLinkIcon mx="7px" />
          </Link>
        </CardBody>
        <CardHeader fontSize="26px" p="7px">
          Disclaimer
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="7px">
          This website was not created by Banish, some of this info may not be
          up to date. I will do my best to monitor and update if anything
          changes, as well as adding more items into the game.
        </CardBody>
      </Card>
    </div>
  );
}
