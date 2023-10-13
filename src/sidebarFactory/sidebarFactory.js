const SidebarProjectFactory = () => {
  let sidebarProjectsArray = [];

  const addProjects = (...projects) => {
    sidebarProjectsArray.push(...projects);
    console.log("sidebarProjectsArray", sidebarProjectsArray.length);
  };

  const deleteProject = (projectIndex) => {
    sidebarProjectsArray.splice(projectIndex, 1);
    return sidebarProjectsArray;
  };

  const allProjects = () => {
    return sidebarProjectsArray.map((item) => item);
  };

  return {
    sidebarProjectsArray,
    addProjects,
    deleteProject,
    allProjects,
  };
};

export const sidebar = SidebarProjectFactory();
