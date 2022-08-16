import React from "react";
import AddToList from "../components/AddToList";
import EditList from "../components/EditList";

function Home() {
  return (
    <div className="py-4">
      <AddToList />
      <EditList />
    </div>
  );
}

export default Home;
