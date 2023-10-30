import ProjectFactory from "../../projectFactory/projectFactory";
import { sidebar } from "../../sidebarFactory/sidebarFactory";
import { addInLocalStorage } from "../LocalStorage/addInLocalStorage";
import { createProjectElement } from "../DisplayProjectsInSidebar/createProjectElement";

let projectIdCounter = 0;

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;
  const projectId = projectIdCounter++;

  let project = ProjectFactory(getAddProjectBtnValue, projectId);
  sidebar.addProjects(project);
  addInLocalStorage(sidebar);
  return {
    project,
  };
};

window.onload = function () {
  const sidebarHTML = document.querySelector(".sidebar");
  const sidebarArray = JSON.parse(localStorage.getItem("sidebar_array"));

  if (sidebarArray !== "undefined" && sidebarArray !== null) {
    sidebarArray.projectList.forEach((item) => {
      const project = ProjectFactory(item.projectName, item.projectID);
      sidebar.addProjects(project);
      const projectsDiv = createProjectElement(project);
      sidebarHTML.append(projectsDiv);
    });
  }
};
export default AddProject;
