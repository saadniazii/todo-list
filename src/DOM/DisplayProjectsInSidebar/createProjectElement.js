import createElement from "../../utils/createElement";
import { sidebar } from "../../sidebarFactory/sidebarFactory";
import { passProject, toggleClickBehavior } from "./displayProjectsInSidebar";
export const createProjectElement = (item) => {
  const sidebarHTML = document.querySelector(".sidebar");

  const projectsDiv = createElement("div", "projects-div");
  const deleteProjectBtn = createElement("button", "delete-project-btn");
  const span = createElement("span");

  deleteProjectBtn.addEventListener("click", () => {
    const getSpecific = sidebarHTML.querySelector(`[data-id="${item.id}"]`);
    sidebar.deleteProject(item.id);
    localStorage.removeItem("project_array");

    getSpecific.remove();
  });
  span.textContent = item.name;
  projectsDiv.append(span, deleteProjectBtn);
  projectsDiv.dataset.id = item.id;
  deleteProjectBtn.textContent = "Delete";
  projectsDiv.addEventListener("click", () => passProject(item.id));
  toggleClickBehavior(projectsDiv, item);
  return projectsDiv;
};
