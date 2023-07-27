import { render } from "@testing-library/react";
import Todo from "./Todo";

it("should <renders without crash", () => {
  render(<Todo />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
