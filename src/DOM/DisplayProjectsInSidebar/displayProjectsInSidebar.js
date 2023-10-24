import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos from "../Todos/Todos";
import { getAllTodos } from "../Todos/getAllTodos";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const passProjectID = (itemID) => {
  if (itemID >= 0) {
    Todos(itemID);
  }
};

const passProject = (itemID) => {
  if (itemID >= 0) {
    getAllTodos(itemID);
  }
};

const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");

  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);
    if (!existingProject) {
      const projectsDiv = createElement("div", "projects-div");
      const deleteProjectBtn = createElement("button", "delete-project-btn");
      const span = createElement("span");

      deleteProjectBtn.addEventListener("click", () => {
        const getSpecific = sidebarHTML.querySelector(`[data-id="${index}"]`);
        sidebar.deleteProject(index);
        getSpecific.remove();
      });

      span.textContent = item.name;
      projectsDiv.append(span, deleteProjectBtn);
      projectsDiv.dataset.id = index;
      deleteProjectBtn.textContent = "Delete";

      projectsDiv.addEventListener("click", () => passProject(item.id));

      toggleClickBehavior(projectsDiv, item);
      sidebarHTML.appendChild(projectsDiv);
    }
  });
};

const toggleClickBehavior = (projectsDiv, item) => {
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
