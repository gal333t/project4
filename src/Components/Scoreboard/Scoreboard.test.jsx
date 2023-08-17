import { render, screen } from "@testing-library/react";
import Scoreboard from "./Scoreboard";

it("Should show username and score of one user", async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  // TypeError: Cannot read properties of undefined (reading 'map')
  const mockResponse1 = {
    username: "Galit",
    score: 5,
  };
  fetch.mockResponse(JSON.stringify(mockResponse1));

  render(<Scoreboard />);
  // TypeError: Scoreboards.map is not a function unless .toBe(1) in which case it fails and says no call is made
  expect(fetch.requests().length).toBe(1);
  expect(await screen.findByText("Galit")).toBeInTheDocument();
});
