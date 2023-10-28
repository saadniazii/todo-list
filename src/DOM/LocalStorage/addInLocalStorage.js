export const addInLocalStorage = (projectArray) => {
  let projectJSON = JSON.stringify(projectArray);
  localStorage.setItem(`project_array`, projectJSON);
};

export const addTodoInLocalStorage = (todos) => {
  // const existingData = JSON.parse(localStorage.getItem("todo_array")) || [];
  // const updatedData = existingData.concat(todos);
  // localStorage.setItem("todo_array", JSON.stringify(updatedData));
};
