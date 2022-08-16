import React, { useState } from "react";
import ToDoList from "./ToDoList";

function EditList() {
  let taskList = [
    { id: "task1", task: "Get the car fixed", time: "Monday" },
    { id: "task2", task: "Do the grocerry shopping", time: "Tuesday morning" },
    { id: "task3", task: "Meet with mother", time: "Tuesday afternoon" },
    { id: "task4", task: "Email the prof", time: "Wednesday" },
    { id: "task5", task: "Go hiking", time: "Thursday" },
    { id: "task6", task: "Finish the project", time: "Friday" },
  ];
  //To delete an item form the task list
  // const newTaskList = taskList.filter(item => item.id !==id)
  const [toDoList, setToDoList] = useState(taskList);
  const deleteClick = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="todosList">
        <div className="container">
          <div className="row">
            <div className="col">
              <button>Done</button>
              <div className="col">
                <button>Not Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col">
            {toDoList.map((item) => (
              <ToDoList
                key={item.id}
                {...item}
                deleteClick={deleteClick}
              ></ToDoList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditList;
