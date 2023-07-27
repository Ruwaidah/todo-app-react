import { useState } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isformShow, setIsFormShow] = useState(false);

  // add task function
  const addTask = (task) => {
    setTodos([...todos, task]);
  };

  // remove task function
  const removeTask = (taskIndx) => {
    setTodos(todos.filter((todo, indx) => indx !== taskIndx));
  };

  // Edite Task
  const editTask = (task, taskIndx) => {
    setTodos((todos) => {
      let newTodos = [...todos];
      newTodos[taskIndx] = task;
      return newTodos;
    });
  };

  return (
    <div>
      {isformShow ? (
        <NewTodoForm setIsFormShow={setIsFormShow} addTask={addTask} />
      ) : (
        <button onClick={() => setIsFormShow(true)}>+</button>
      )}
      {todos.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        <ul>
          {todos.map((task, indx) => (
            <Todo
              key={indx}
              todo={task}
              indx={indx}
              removeTask={removeTask}
              editTask={editTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default TodoList;
