import { useState } from "react";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editInput, setEditInput] = useState(props.todo);
  return (
    <div className="Todo">
      {isEdit ? (
        <div>
          {" "}
          <EditTodoForm
            todo={props.todo}
            setIsEdit={setIsEdit}
            editTask={props.editTask}
            index={props.indx}
          />{" "}
        </div>
      ) : null}
      <div>
        {" "}
        <p>{props.todo}</p>
        <button onClick={() => setIsEdit(true)}>edit</button>
        <button onClick={() => props.removeTask(props.indx)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
