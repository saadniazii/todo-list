export const deleteTodo = (project, itemID) => {
  const mainBody = document.querySelector(".main-body");
  const getSpecific = mainBody.querySelector(`[data-id="${itemID}"]`);
  if (getSpecific) {
    project.deleteTodo(itemID);
    getSpecific.remove();
  }
};
