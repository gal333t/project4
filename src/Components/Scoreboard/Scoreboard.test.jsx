import { render, screen } from "@testing-library/react";
import Scoreboard from "./Scoreboard";
import SessionContextComponent from "../SessionContext";

beforeEach(() => {
  fetch.resetMocks();
});
it("Should show username and score of 2 users in mockResponse", async () => {
  // TypeError: Cannot read properties of undefined (reading 'map')
  const mockResponse1 = [
    {
      username: "Galit",
      score: 5,
    },
    {
      username: "Robert",
      score: 2,
    },
  ];
  fetch.mockResponse(JSON.stringify(mockResponse1));

  render(
    <SessionContextComponent>
      <Scoreboard />
    </SessionContextComponent>
  );

  expect(await screen.findByText("Galit")).toBeInTheDocument();
  expect(await screen.findByText("5")).toBeInTheDocument();
  expect(await screen.findByText("Robert")).toBeInTheDocument();
  expect(await screen.findByText("2")).toBeInTheDocument();
});
