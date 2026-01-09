import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app heading", () => {
  render(<App />);
  const heading = screen.getByText(
    /Ralph Rostock's LaunchDarkly Platform Demo/i,
  );
  expect(heading).toBeInTheDocument();
});
