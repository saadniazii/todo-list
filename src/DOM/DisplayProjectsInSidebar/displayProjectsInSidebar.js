import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos, { getAllTodos, renderTodo } from "../Todos/Todos";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const passProjectID = (itemID) => Todos(itemID);
const passProject = (itemID) => getAllTodos(itemID);

const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");

  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);
    if (!existingProject) {
      const projectsDiv = createElement("div", "projects-div");
      const span = createElement("span");
      span.textContent = item.name;
      projectsDiv.appendChild(span);
      projectsDiv.dataset.id = index;

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
      // renderTodo(item);

      projectsDiv.addEventListener("click", clickHandler);
    }

    isListenerAttached = !isListenerAttached;
  };

  projectsDiv.addEventListener("click", clickHandler);
};

export default displayProjectsInSidebar;
