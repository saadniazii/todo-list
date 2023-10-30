export const addInLocalStorage = (projectArray) => {
  let projectJSON = JSON.stringify(projectArray);
  localStorage.setItem(`sidebar_array`, projectJSON);
};
