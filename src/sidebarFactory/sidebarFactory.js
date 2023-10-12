const SidebarProjectFactory = () => {
  let sidebarProjectsArray = [];

  const addProjects = (...projects) => {
    sidebarProjectsArray.push(...projects);
  };

  const deleteProject = (projectIndex) => {
    sidebarProjectsArray.splice(projectIndex, 1);
    return sidebarProjectsArray;
  };

  return {
    sidebarProjectsArray,
    addProjects,
    deleteProject,
  };
};

export default SidebarProjectFactory;
