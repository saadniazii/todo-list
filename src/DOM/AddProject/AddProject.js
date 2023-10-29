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
  const projectArray = sidebar.projectList;
  addInLocalStorage(projectArray);
  return {
    project,
  };
};

window.onload = function () {
  const sidebarHTML = document.querySelector(".sidebar");
  const projectArray = JSON.parse(localStorage.getItem("project_array"));
  if (projectArray !== "undefined" && projectArray !== null) {
    projectArray.forEach((item, index) => {
      const project = ProjectFactory(item.projectName, item.projectID);
      sidebar.addProjects(project);
      const projectsDiv = createProjectElement(project);
      sidebarHTML.append(projectsDiv);
    });
  }
};
export default AddProject;
