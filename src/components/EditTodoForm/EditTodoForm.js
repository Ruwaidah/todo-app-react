import { useRef, useState } from "react";
import "./EditTodoForm.css";

const EditTodoForm = (props) => {
  const editInput = useRef();
  const [value, setValue] = useState(props.todo);
  const [errorInput, setErrorInput] = useState(false);

  const changeHandler = (e) => {
    setErrorInput(false);
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value === "") {
      setErrorInput(true);
      editInput.current.focus();
    } else {
      props.editTask(value, props.index);
      props.setIsEdit(false);
    }
  };
  return (
    <form className="EditTodoForm" onSubmit={submitHandler}>
      <label htmlFor="editTask">Task:</label>
      <input
        className={errorInput ? "error" : null}
        id="editTask"
        name="edit"
        ref={editInput}
        value={value}
        onChange={changeHandler}
      />
      <input type="submit" value="edit" />
      <button type="button" onClick={() => props.setIsEdit(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
