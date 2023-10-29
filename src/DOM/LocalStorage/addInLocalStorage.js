export const addInLocalStorage = (projectArray) => {
  let projectJSON = JSON.stringify(projectArray);
  localStorage.setItem(`project_array`, projectJSON);
};

export const addTodoInLocalStorage = (todos) => {
  let projectJSON = JSON.stringify(todos);
  localStorage.setItem("todo_array", projectJSON);
};
