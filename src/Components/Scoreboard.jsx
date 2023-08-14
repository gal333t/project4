import { SessionContext } from "./SessionContext";
import { useContext } from "react";
import supabase from "../supabase";
import { Card, CardBody } from "@chakra-ui/react";

export default function Scoreboard() {
  return (
    <>
      <Card>
        <CardBody>Scoreboard</CardBody>
      </Card>
    </>
  );
}
