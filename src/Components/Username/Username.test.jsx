import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Username from "./Username";
import SessionContextComponent from "../SessionContext";

it("Should show the input with placeholder 'Username' correctly on user sign up page", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <SessionContextComponent>
        <Username></Username>
      </SessionContextComponent>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText("Username");
  await user.click(input);
  await user.keyboard("Testing Username");
  expect(input.value).equals("Testing Username");
});
