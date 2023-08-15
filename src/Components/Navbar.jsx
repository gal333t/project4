import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  useColorMode,
  Text,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import supabase from "../supabase";
import { SessionContext } from "./SessionContext";

export default function Navbar() {
  const toast = useToast();
  const { session, username } = useContext(SessionContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Breadcrumb
        bg="#66a8ba"
        separator=""
        border="1px"
        borderColor="transparent"
        borderRadius="10px"
        color="white"
        px="10"
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/" m="5" fontWeight="bold">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/about" m="5" fontWeight="bold">
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/play" m="5" fontWeight="bold">
            Play
          </BreadcrumbLink>
        </BreadcrumbItem>
        <Spacer />
        {/* {username && (
          <>
            <Text>Welcome, {username} </Text>
            <Spacer />
          </>
        )} */}
        <IconButton
          bg="#66a8ba"
          onClick={toggleColorMode}
          _hover={{ opacity: "40%" }}
          _active={{ opacity: "40%" }}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        {!session ? (
          <BreadcrumbItem>
            <BreadcrumbLink as={NavLink} to="/login" m="5" fontWeight="bold">
              Login
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/"
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
        )}
      </Breadcrumb>
    </>
  );
}
