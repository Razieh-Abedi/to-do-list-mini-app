import React, { useState } from "react";
import TodoCard from "./TodoCard";
import taskList from "../../data/todoData";

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
  // To set the new task list
  const [newTaskList, setNewTaskList] = useState(taskList);
  const addClicked = () => {
    setNewTaskList(newTaskList.push(newTask));
  };
  // const [NewTodoCard, setNewTodoCard] = useState(TodoCard);
  // const newCard = ()=> {
  //   setNewTodoCard(newTaskList)
  // }
  return (
    <div>
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
                addClicked={addClicked}
              ></TodoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoList;
