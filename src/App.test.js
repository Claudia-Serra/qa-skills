import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders exercise 1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Exercise 1/i);
  expect(linkElement).toBeInTheDocument();
});
