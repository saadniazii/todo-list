import ProjectFactory from "../../projectFactory/projectFactory";
import SidebarProjectFactory from "../../sidebarFactory/sidebarFactory";

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;

  const project = ProjectFactory(getAddProjectBtnValue);
  let sidebar = SidebarProjectFactory();
  sidebar.addProjects(project);

  return {
    project,
    sidebar,
  };
};

export default AddProject;
