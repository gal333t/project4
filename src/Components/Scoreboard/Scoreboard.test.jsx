import { render, screen } from "@testing-library/react";
import Scoreboard from "./Scoreboard";
import SessionContextComponent from "../SessionContext";

beforeEach(() => {
  fetch.resetMocks();
});
it("Should show username and score of one user", async () => {
  // TypeError: Cannot read properties of undefined (reading 'map')
  const mockResponse1 = [
    {
      username: "Galit",
      score: 5,
      email: "test@test.com",
    },
  ];
  fetch.mockResponse(JSON.stringify(mockResponse1));

  render(
    <SessionContextComponent>
      <Scoreboard />
    </SessionContextComponent>
  );

  expect(await screen.findByText("Galit")).toBeInTheDocument();
});

// check score is in ascending order