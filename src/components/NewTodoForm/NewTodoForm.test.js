import { fireEvent, render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import Todo from "../Todo/Todo";
import TodoList from "../TodoList/TodoList";

it("should render without crash", () => {
  render(<NewTodoForm />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment).toMatchSnapshot();
});

it("create new task", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const openFormBtn = queryByText("+");
  expect(openFormBtn).toBeInTheDocument();
  fireEvent.click(openFormBtn);
  expect(openFormBtn).not.toBeInTheDocument();
  const taskInput = getByLabelText("Task:");
  const btn = queryByText("create");
  fireEvent.change(taskInput, { target: { value: "new task" } });
  fireEvent.click(btn);
  const newTask = queryByText("new task");
  expect(newTask).toBeInTheDocument();
});

it("should delete task", () => {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const openFormBtn = queryByText("+");
    fireEvent.click(openFormBtn);
    const taskInput = getByLabelText("Task:");
    const btn = queryByText("create");
    fireEvent.change(taskInput, { target: { value: "new task" } });
    fireEvent.click(btn);
    const newTask = queryByText("new task");
    expect(newTask).toBeInTheDocument();
    const deleteBtn = queryByText("X")
    fireEvent.click(deleteBtn)
    expect(newTask).not.toBeInTheDocument();
})
