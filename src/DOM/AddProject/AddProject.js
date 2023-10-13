import ProjectFactory from "../../projectFactory/projectFactory";
import { sidebar } from "../../sidebarFactory/sidebarFactory";

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;

  let project = ProjectFactory(getAddProjectBtnValue);
  sidebar.addProjects(project);

  return {
    project,
  };
};

export default AddProject;
