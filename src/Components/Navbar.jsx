import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import supabase from "../supabase";

export default function Navbar() {
  const toast = useToast();

  return (
    <>
      <Breadcrumb
        bg="#66a8ba"
        separator=""
        border="1px"
        borderColor="transparent"
        borderRadius="10px"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to="/"
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
            as={NavLink}
            to="/about"
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
            as={NavLink}
            to="/play"
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
          >
            Play
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to="/login"
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
          >
            Login
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            textAlign="center"
            color="white"
            m="5"
            fontWeight="bold"
            onClick={() => {
              supabase.auth.signOut();
              toast({
                description: "Successfully logged out",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
            }}
          >
            Logout
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
