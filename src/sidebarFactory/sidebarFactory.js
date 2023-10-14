const SidebarProjectFactory = () => {
  let projectList = [];

  const addProjects = (...projects) => {
    projectList.push(...projects);
  };

  const deleteProject = (projectID) => {
    projectList = projectList.filter((item) => item.id !== projectID);
    return projectList;
  };

  const allProjects = () => {
    return projectList.map((item) => item);
  };

  const getProject = (projectID) => {
    const projectFound = projectList.find((item) => item.id === projectID);
    return projectFound;
  };

  return {
    projectList,
    addProjects,
    deleteProject,
    allProjects,
    getProject,
  };
};

export const sidebar = SidebarProjectFactory();
