import React, { useState } from "react";
function EditTodoCard({ id, task, submitClick }) {
  //to edit the task when click on edit   and to hide edit and show submit when clicked on edit
  const [editInput, setEditinput] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  
 
  const clickEdit = () => {
    setEditinput(!editInput);
    setEditBtn(!editBtn);
  };
  

  

  
  return (
    <div
      id={id}
      className="d-flex justify-content-between align-items-center border border-1 rounded my-2 pt-3 px-2"
    >
      <div>
   
        <input type="text" className="border rounded bg-light" placeholder={task} />
  
      </div>
      <div>
        <ul>
          
          <li className="d-inline ps-2">
           
              <button
                onClick={() => {
                  setEditBtn(!editBtn)
                }}
                type="button"
                className="btn btn-secondery btn-sm ms-1"
              >
                Cancel
              </button>

               <button
               onClick={() => {
                 submitClick(id)
                 setEditBtn(!editBtn)
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
  );
}
export default EditTodoCard;
