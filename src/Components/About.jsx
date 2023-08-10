import { Card, CardBody, CardHeader, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <div className="about-div">
      <Card
        align="center"
        bg="#66a8ba"
        m="10"
        color="white"
        fontWeight="semibold"
      >
        <CardHeader fontSize="30px" p="2">
          What is BRAD
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="2">
          BRAD stands for Banish Recycling And Disposal Program, started by
          Banish a company who sell sustainable items as well as share education
          on sustainability. Everyday Aussies can send in their hard to recycle
          items, and the team of volunteers will sort and send them through to
          different waste streams. For more info on the amazing work Banish do,
          please visit their website{" "}
          <Link href="https://banish.com.au" isExternal>
            here
            <ExternalLinkIcon mx="2px" />
          </Link>
        </CardBody>
        <CardHeader fontSize="30px" p="2">
          What is 'Can I BRAD this?'
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="2">
          Aimed at people new to the BRAD program or those who want to test &
          refresh their memory, it's a fun game where you have to select whether
          or not an item can be recycled by BRAD.
        </CardBody>
        <CardHeader fontSize="30px" p="2">
          How do I play 'Can I BRAD this?'
        </CardHeader>
        <CardBody textAlign="center" fontSize="20px" p="2">
          A randomly picked item will show up and you need to decide if it can
          or can't be recycled by the BRAD program. Select your choice by
          clicking either the 'yes' or 'no' buttons. If you're right, you'll get
          1 point! And if you're wrong, your score doesn't change. After each
          guess, a new option will render for you to decide, can you BRAD this?
        </CardBody>
      </Card>
    </div>
  );
}
