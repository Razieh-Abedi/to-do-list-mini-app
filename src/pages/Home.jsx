import React from "react";
import AddToList from "../components/Todos/AddToList";
import TodoList from "../components/Todos/TodoList";

function Home({newTaskList}) {

  
  return (
    <div className="py-4">
      <AddToList />
      <TodoList newTaskList={newTaskList} />
    </div>
  );
}

export default Home;
