import { render } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crash", () => {
    render(<TodoList />)
})

it("should match snapshot", () => {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})