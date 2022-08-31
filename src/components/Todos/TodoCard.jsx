import React, { useState } from "react";
function TodoCard({ id, task, deleteClick, submitClick }) {
  const [textEdited, setTextEdited] = useState(task);
  const [editStatus, setEditStatus] = useState(false);
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
    <div>
      {editStatus ? (
        <div
          id={id}
          className="d-flex justify-content-between align-items-center border border-1 rounded my-2 pt-3 px-2"
        >
          <div>
            <input
              type="text"
              className="border rounded bg-light"
              value={textEdited}
              onChange={(e) => setTextEdited(e.target.value)}
            />
          </div>
          <div>
            <ul>
              <li className="d-inline ps-2">
                <button
                  onClick={() => setEditStatus(false)}
                  type="button"
                  className="btn btn-secondary btn-sm ms-1"
                >
                  Cancel
                </button>
              </li>
              <li className="d-inline ps-2">
                <button
                  onClick={() => {
                    submitClick(id, textEdited);
                    setEditStatus(false);
                  }}
                  type="button"
                  className="btn btn-warning btn-sm ms-1"
                >
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div
          id={id}
          className="d-flex justify-content-between align-items-center border border-1 rounded my-2 pt-3 px-2"
        >
          <div>
            {" "}
            <p className="border rounded bg-light p-2">{task}</p>
          </div>
          <div>
            <ul>
              <li className="d-inline ps-2" onClick={doneClick}>
                {doneBtnStyle}
              </li>
              <li className="d-inline ps-2">
                <button
                  onClick={() => setEditStatus(true)}
                  type="button"
                  className="btn btn-info btn-sm ms-1"
                >
                  Edit
                </button>
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
      )}
    </div>
  );
}
export default TodoCard;
