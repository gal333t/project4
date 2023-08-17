import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Login from "./Login";

it("Should show the input with placeholder 'Email' correctly on login page", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <Login></Login>
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText("Email");
  await user.click(input);
  await user.keyboard("test@testemail.com");
  expect(input.value).equals("test@testemail.com");
});
