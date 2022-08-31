import React, { useState } from "react";
import addTodoValidation from "../../utils/validation/addTodoValidation";

function AddToList({ addClicked }) {
  // To add a task to the list
  const [newText, setNewText] = useState("");
  const [errorList, setErrorList] =useState([]);

  const AddTask = (e) => {
    e.preventDefault();

   setErrorList(addTodoValidation(newText))

    if (!errorList.length) {
      addClicked(newText)
      setNewText("");
    }
    
    
  };

  return (
    <section className="bg-light mb-3">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="">Welcome!</h1>
        <p className="lead text-muted">
          To get started, add some items to your list:
        </p>
        
        {
          errorList.length?
          <ul className="alert alert-danger">
           { errorList.map(item=> <li>{item}</li>)}
          </ul>
          :
          ""
        }
        
        <form className="" onSubmit={AddTask}>
          <div className="d-flex">
            <input
              name="task"
              type="text"
              className="form-control mx-sm-3"
              placeholder="I want to do ..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
           
            <button type="submit" className="btn btn-primary" >
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default AddToList;
