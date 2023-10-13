const SidebarProjectFactory = () => {
  let sidebarProjectsArray = [];
  console.log("inside sidebar project factory");
  
  const addProjects = (...projects) => {
    console.log("projects: inside sidebar", projects);
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
