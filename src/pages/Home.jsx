import React from "react";
import AddToList from "../components/Todos/AddToList";
import TodoList from "../components/Todos/TodoList";

function Home() {

  
  return (
    <div className="py-4">
      <AddToList />
      <TodoList />
    </div>
  );
}

export default Home;
