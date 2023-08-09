import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import "./App.css";
export default function Header() {
  return (
    <>
      <Heading
        color="#66a8ba"
        fontSize="50px"
        textAlign="center"
        m="10"
        fontWeight="bold"
      >
        Can I BRAD this?
      </Heading>
      <Breadcrumb bg="#66a8ba" separator="">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
          >
            About
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
          >
            Login
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
