export const addInLocalStorage = (projectArray) => {
  let projectJSON = JSON.stringify(projectArray);
  localStorage.setItem(`project_array`, projectJSON);
};
