import { render, screen } from "@testing-library/react";
import BradItem from "./BradItem";
import userEvent from "@testing-library/user-event";

// needs to mock API call first
// it("Should show a brad item when page is loaded", async () => {
//   render(<BradItem></BradItem>);
//   const score = screen.getByText("score");
//   expect(score).toBeInTheDocument();
// });

// it("Should show if you are correct or not"); // just look for the word "correct"

// it("Should change BradItem when Yes or No is clicked") // use user.click()
