import React, { useState } from "react";
import TodoCard from "./TodoCard";
import taskList from "../../data/todoData";
import AddToList from "./AddToList";

function TodoList(newTask) {
  //To delete an item form the task list
  const [toDoList, setToDoList] = useState(taskList);

  const deleteClick = (id) => {
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList(newTodoList);
  };
  //To edit a task and submit it
  const submitClick = (id, textEdited) => {
    const targetTodo = taskList.find((item) => item.id === id);
    targetTodo.task = textEdited;
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setToDoList([...newTodoList, targetTodo]);
  };
 
  const addClicked = (newText) => {
    // setNewTaskList(newTaskList.push(newTask));
  
  setToDoList([{ id: Date.now(),task: newText},...toDoList ])
  
  };

  

  return (
    <div>
      <div className="py-4">
      <AddToList   addClicked={addClicked} />
      </div>
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
      <div className="container my-3">
        <div className="row">
          <div className="col">
            {toDoList.map((item) => (
              <TodoCard
                key={item.id}
                {...item}
                deleteClick={deleteClick}
                submitClick={submitClick}
               
              ></TodoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
