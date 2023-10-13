import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  //   console.log(allSidebarProjects);
  renderProjects(allSidebarProjects);
};

const renderProjects = (sidebarProjects) => {
  const sidebar = document.querySelector(".sidebar");
  console.log(sidebarProjects);
  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebar.querySelector(`[data-id="${index}"]`);

    if (!existingProject) {
      const addSidebarProjects = createElement("div", "add-sidebar-projects");
      const span = createElement("span");
      span.textContent = item.name;
      addSidebarProjects.appendChild(span);
      addSidebarProjects.dataset.id = index;
      getAllProjects(addSidebarProjects);
      sidebar.appendChild(addSidebarProjects);
    }
  });
};

const getAllProjects = (element) => {
  element.addEventListener("click", (e) => console.log(e.target.dataset.id));
};

export default displayProjectsInSidebar;
