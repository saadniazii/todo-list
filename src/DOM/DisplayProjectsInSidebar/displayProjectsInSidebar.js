import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos, { renderTodo } from "../Todos/Todos";
import { getAllTodos } from "../Todos/getAllTodos";

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
      const editProjectBtn = createElement("button", "edit-project-btn");
      const deleteProjectBtn = createElement("button", "delete-project-btn");
      const span = createElement("span");

      span.textContent = item.name;
      projectsDiv.append(span, editProjectBtn, deleteProjectBtn);
      projectsDiv.dataset.id = index;
      editProjectBtn.textContent = "Edit";
      deleteProjectBtn.textContent = "Delete";

      editProjectBtn.addEventListener("click", () => {
        editProject(index, sidebarProjects);
      });

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

const editProject = (itemID, project) => {
  const projectDiv = document.querySelector(`[data-id="${itemID}"]`);
  const mainBody = document.querySelector(".main-body");

  const projectInput = document.createElement("input");
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("placeholder", "Add Project");
  projectInput.setAttribute("id", "edit-project");
  projectInput.setAttribute("name", "project");
  projectInput.value = projectDiv.childNodes[0].textContent;

  console.log("projectInput:", projectInput.value);
};

export default displayProjectsInSidebar;
