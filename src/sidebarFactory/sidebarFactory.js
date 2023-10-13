const SidebarProjectFactory = () => {
  let projectList = [];

  const addProjects = (...projects) => {
    projectList.push(...projects);
  };

  const deleteProject = (projectIndex) => {
    sidebarProjectsArray.splice(projectIndex, 1);
    return projectList;
  };

  const allProjects = () => {
    return projectList.map((item) => item);
  };

  return {
    projectList,
    addProjects,
    deleteProject,
    allProjects,
  };
};

export const sidebar = SidebarProjectFactory();
