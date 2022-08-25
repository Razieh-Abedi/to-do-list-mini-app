import React, { useState } from "react";
// import taskList from "../../data/todoData";
function AddToList({ task, addClicked }) {
  // To add a task to the list
  const [newTask, setNewTask] = useState(task);

  return (
    <section className="bg-light mb-3">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="">Welcome!</h1>
        <p className="lead text-muted">
          To get started, add some items to your list:
        </p>

        <form className="">
          <div className="d-flex">
            <input
              type="text"
              className="form-control mx-sm-3"
              placeholder="I want to do ..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addClicked}>
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddToList;
