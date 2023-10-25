import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos from "../Todos/Todos";
import { getAllTodos } from "../Todos/getAllTodos";
import { createProjectElement } from "./createProjectElement";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

export const passProjectID = (itemID) => {
  if (itemID >= 0) {
    Todos(itemID);
  }
};

export const passProject = (itemID) => {
  if (itemID >= 0) {
    getAllTodos(itemID);
  }
};

export const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");

  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);
    if (!existingProject && sidebarProjects.length > 0) {
      const projectsDiv = createProjectElement(item, index);
      sidebarHTML.appendChild(projectsDiv);
    }
  });
};

export const toggleClickBehavior = (projectsDiv, item) => {
  let isListenerAttached = false;

  const clickHandler = () => {
    if (isListenerAttached) {
      projectsDiv.removeEventListener("click", clickHandler);
    } else {
      passProjectID(item.id);
      projectsDiv.addEventListener("click", clickHandler);
    }

    isListenerAttached = !isListenerAttached;
  };

  projectsDiv.addEventListener("click", clickHandler);
};

export default displayProjectsInSidebar;
