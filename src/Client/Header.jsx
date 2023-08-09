import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Login from "../screens/Login";
import supabase from "../supabase";

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
        >
          Can I BRAD this?
        </Heading>
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
              to="/scoreboard"
              textAlign="center"
              color="white"
              m="5"
              fontWeight="bold"
            >
              Scoreboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* if not logged in, add below component for Login  ?  <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/login"
              element={<Login />}
              textAlign="center"
              color="white"
              m="5"
              fontWeight="bold"
              onClick={()=> supabase.auth.signOut()}
            >
              Logout
            </BreadcrumbLink>
          </BreadcrumbItem> */}
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to="/login"
              element={<Login />}
              textAlign="center"
              color="white"
              m="5"
              fontWeight="bold"
            >
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </header>
    </>
  );
}
