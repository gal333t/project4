import { render, screen } from "@testing-library/react";
import BradItem from "./BradItem";
import userEvent from "@testing-library/user-event";
import SessionContextComponent from "../SessionContext";

const mockResponse1 = [
  {
    name: "Toothpaste",
    imgurl:
      "https://i.ibb.co/8MHbs7m/Mild-Mint-box-tube-1400x1400-97832874-519f-4ef9-b457-c4903655dfb4-1024x1024-1.webp",
    BRAD: true,
    alt_text: "Green and white toothpaste tube",
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

it("Should show a brad item when page is loaded", async () => {
  fetch.mockResponse(JSON.stringify(mockResponse1));
  render(<BradItem />);
  expect(await screen.findByText("Toothpaste")).toBeInTheDocument();
});

it("Should show if you are correct or not", async () => {
  fetch.mockResponse(JSON.stringify(mockResponse1));
  render(
    <SessionContextComponent>
      <BradItem />
    </SessionContextComponent>
  );
  const user = userEvent.setup();
  const button = await screen.findByRole("button", { name: "YES" });
  await user.click(button);
  await screen.getByText("correct", { exact: false });
});
