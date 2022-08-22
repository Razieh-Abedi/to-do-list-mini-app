import React, { useState } from "react";
import ToDoList from "./ToDoList";
import taskList from "../data/todoData";

function EditList() {
  //To delete an item form the task list
  const [toDoList, setToDoList] = useState(taskList);

  const deleteClick = (id) => {
    //id=3
    // const targetTodo= toDoList.find((item) => item.id ===id)
    // targetTodo.task="sssss"

    const newTodoList = toDoList.filter((item) => item.id !== id);

    setToDoList(newTodoList);
    // setToDoList([...newTodoList, targetTodo]);
  };
  //To edit a task and submit it
  const submitClick = (id) => {
    const targetTodo = toDoList.find((item) => item.id === id);
    targetTodo.task= toDoList.map((item)=>("task modified"))
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList( [...newTodoList, targetTodo]);
  };
  
  return (
    <div>
      <div className="todosList">
        <div className="container">
          <ul>
            <li className="d-inline list-unstyled">
              <button className="btn btn-primary ms-2">Done</button>
            </li>
            <li className="d-inline list-unstyled">
              <button className="btn btn-primary ms-2">Not Done</button>
            </li>
          </ul>
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
                submitClick={submitClick}
              ></ToDoList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditList;
