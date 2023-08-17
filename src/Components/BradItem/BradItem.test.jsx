import { render, screen } from "@testing-library/react";
import BradItem from "./BradItem";
import userEvent from "@testing-library/user-event";

// needs to mock API call first
// it("Should show a brad item when page is loaded", async () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//   const mockResponse1 = {
//     name: "Toothpaste",
//     imgurl:
//       "https://i.ibb.co/8MHbs7m/Mild-Mint-box-tube-1400x1400-97832874-519f-4ef9-b457-c4903655dfb4-1024x1024-1.webp",
//     BRAD: true,
//     alt_text: "Green and white toothpaste tube",
//   };
//   fetch.mockResponse(JSON.stringify(mockResponse1));

//   render(<BradItem />);
//   // TypeError: bradItems.map is not a function unless .toBe(1) in which case it fails and says no call is made
//   expect(fetch.requests().length).toBe(1);
//   expect(await screen.findByText("Toothpaste")).toBeInTheDocument();
// });

// it("Should show if you are correct or not"); // just look for the word "correct"

// it("Should change BradItem when Yes or No is clicked") // use user.click()
