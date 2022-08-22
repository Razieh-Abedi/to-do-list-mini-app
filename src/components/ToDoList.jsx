import React, { useState } from "react";
function ToDoList({ id, task, deleteClick, submitClick }) {
  //to edit the task when click on edit   and to hide edit and show submit when clicked on edit
  const [editInput, setEditinput] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  // const editBtnStyle = editBtn ? (
  //   <button type="button" className="btn btn-warning btn-sm ms-1">
  //     Submit
  //   </button>
  // ) : (
  //   <button type="button" className="btn btn-info btn-sm ms-1">
  //     Edit
  //   </button>
  // );
  const editInputStyle = editInput ? (
    <input type="text" className="border rounded bg-light" placeholder={task} />
  ) : (
    <p className="border rounded bg-light p-2">{task}</p>
  );
  const clickEdit = () => {
    setEditinput(!editInput);
    setEditBtn(!editBtn);
  };
  //To chnage the done button to undone
  const [doneBtn, setDoneBtn] = useState(false);
  const doneBtnStyle = doneBtn ? (
    <button type="button" className="btn btn-success btn-sm">
      Done
    </button>
  ) : (
    <button type="button" className="btn btn-warning btn-sm">
      Not Done
    </button>
  );
  const doneClick = () => {
    setDoneBtn(!doneBtn);
  };

  return (
    <div
      id={id}
      className="d-flex justify-content-between align-items-center border border-1 rounded my-2 pt-3 px-2"
    >
      <div>{editInputStyle}</div>
      <div>
        <ul>
          <li className="d-inline ps-2" onClick={doneClick}>
            {doneBtnStyle}
          </li>
          <li className="d-inline ps-2">
            {editBtn ? (
              <button
                onClick={() => submitClick(id)}
                type="button"
                className="btn btn-warning btn-sm ms-1"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={clickEdit}
                type="button"
                className="btn btn-info btn-sm ms-1"
              >
                Edit
              </button>
            )}
          </li>
          <li className="d-inline ps-2">
            <button
              type="button"
              className="btn btn-danger btn-sm ms-1"
              onClick={() => deleteClick(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
