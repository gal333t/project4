import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

it("Should show the input with placeholder 'Email' correctly on login page", async () => {
  // for some reason fails because of useNavigate in Login file
  const user = userEvent.setup();
  render(<Login></Login>);
  const input = screen.getByPlaceholderText("Email");
  await user.click(input);
  await user.keyboard("test@testemail.com");
  expect(input.value).equals("test@testemail.com");
});
