import ProjectFactory from "../../projectFactory/projectFactory";
import { sidebar } from "../../sidebarFactory/sidebarFactory";

let projectIdCounter = 0;

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;
  const projectId = projectIdCounter++;

  let project = ProjectFactory(getAddProjectBtnValue, projectId);
  sidebar.addProjects(project);

  return {
    project,
  };
};

export default AddProject;
