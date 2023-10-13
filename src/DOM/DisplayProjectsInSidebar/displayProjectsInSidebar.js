import createElement from "../../utils/createElement";
import AddProject from "../AddProject/AddProject";

const displayProjectsInSidebar = () => {
  const addProject = AddProject();
  const allSidebarProjects = addProject.sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const renderProjects = (sidebarProjects) => {
  const sidebar = document.querySelector(".sidebar");
  sidebarProjects.map((item, index) => {
    const addSidebarProjects = createElement("div", "add-sidebar-projects");
    const span = createElement("span");
    span.textContent = item.name;
    addSidebarProjects.appendChild(span);
    addSidebarProjects.dataset.id = index;
    getAllProjects(addSidebarProjects);
    sidebar.appendChild(addSidebarProjects);
  });
};

const getAllProjects = (element) => {
  element.addEventListener("click", (e) => console.log(e.target.dataset.id));
};

export default displayProjectsInSidebar;
