function addTodoValidation(value) {
    
  const errorList = [];
  if (!value) {
    errorList.push("Please fill out");
  }
  if (value.length > 30) {
    errorList.push("The task should be less than 30 characters");
  }
  return errorList
}

export default addTodoValidation