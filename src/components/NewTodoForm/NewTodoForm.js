import { useRef, useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = (props) => {
  const taskInput = useRef();
  const [input, setInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const changeHandler = (e) => {
    setErrorInput(false);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      setErrorInput(true);
      taskInput.current.focus();
    } else {
      props.addTask(input);
      props.setIsFormShow(false);
    }
    setInput("");
  };
  return (
    <div className="NewTodoForm">
      <form onSubmit={submitHandler}>
        {" "}
        <label htmlFor="task">Task:</label>
        <input
          className={errorInput ? "error" : null}
          ref={taskInput}
          id="task"
          type="text"
          name="task"
          placeholder="add task"
          onChange={changeHandler}
          value={input}
        />
        <input type="submit" value="create" />
        <button type="button" onClick={() => props.setIsFormShow(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
