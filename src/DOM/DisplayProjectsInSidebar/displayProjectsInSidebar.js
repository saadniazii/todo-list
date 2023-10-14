import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos from "../Todos/Todos";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");
  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);

    if (!existingProject) {
      const addSidebarProjects = createElement("div", "add-sidebar-projects");
      const span = createElement("span");

      span.textContent = item.name;

      addSidebarProjects.appendChild(span);

      addSidebarProjects.dataset.id = index;

      addSidebarProjects.addEventListener("click", () => {
        Todos(item.id);
      });
      sidebarHTML.appendChild(addSidebarProjects);
    }
  });
};

export default displayProjectsInSidebar;
