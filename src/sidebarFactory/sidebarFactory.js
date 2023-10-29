const SidebarProjectFactory = () => {
  let projectList = [];

  const addProjects = (...projects) => {
    projectList.push(...projects);
  };

  const editProject = (todoIndex, newTitle) => {
    projectList[todoIndex].setTitle(`${newTitle}`);
    return projectList[todoIndex];
  };

  const deleteProject = (projectID) => {
    projectList = projectList.filter((item) => item.id !== projectID);
    return projectList;
  };

  const allProjects = () => {
    return projectList.map((item) => item);
  };

  const getProject = (projectID) => {
    return projectList.find((item) => item.id === projectID);
  };

  const getProjectList = () => projectList;

  const toJSON = () => {
    return {
      projectList,
    };
  };

  return {
    projectList,
    addProjects,
    deleteProject,
    allProjects,
    getProject,
    editProject,
    getProjectList,
    toJSON,
  };
};

export const sidebar = SidebarProjectFactory();
