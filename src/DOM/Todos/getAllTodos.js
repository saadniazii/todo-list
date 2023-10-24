import { sidebar } from "../../sidebarFactory/sidebarFactory";
import { renderTodo } from "./renderTodo";

export const getAllTodos = (itemID) => {
  const mainBody = document.querySelector(".main-body");
  mainBody.replaceChildren();
  if (mainBody.childNodes.length === 0) {
    const getProject = sidebar.getProject(itemID);

    if (Array.isArray(getProject) && getProject.length > 0) {
      renderTodo(getProject);
    }
  }
};
