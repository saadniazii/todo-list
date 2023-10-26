export const addInLocalStorage = (projectArray) => {
  let projectJSON = JSON.stringify(projectArray);
  localStorage.setItem(`project_array`, projectJSON);
};

export const addTodoInLocalStorage = (todoArray) => {
  let projectJSON = JSON.stringify(todoArray);
  localStorage.setItem(`todo_array`, projectJSON);
};
