import ProjectFactory from "../../projectFactory/projectFactory";
import { sidebar } from "../../sidebarFactory/sidebarFactory";
import {
  addInLocalStorage,
  getFromLocalStorage,
} from "../LocalStorage/addInLocalStorage";
import createElement from "../../utils/createElement";
import { createProjectElement } from "../DisplayProjectsInSidebar/createProjectElement";

let projectIdCounter = 0;

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;
  const projectId = projectIdCounter++;

  let project = ProjectFactory(getAddProjectBtnValue, projectId);
  const projectArray = sidebar.projectList;
  addInLocalStorage(projectArray);
  sidebar.addProjects(project);
  return {
    project,
  };
};

window.onload = function () {
  const storedArray = JSON.parse(localStorage.getItem("project_array"));
  if (storedArray !== "undefined" && storedArray !== "null") {
    const sidebar = document.querySelector(".sidebar");

    storedArray.forEach((item, index) => {
      const projectsDiv = createProjectElement(item, index);
      console.log("item", item);
      sidebar.append(projectsDiv);
    });
  }
};

export default AddProject;
