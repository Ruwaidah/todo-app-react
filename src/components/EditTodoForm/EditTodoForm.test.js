import { render } from "@testing-library/react";
import EditTodoForm from "./EditTodoForm";

it("it render without crash", () => {
  render(<EditTodoForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<EditTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
