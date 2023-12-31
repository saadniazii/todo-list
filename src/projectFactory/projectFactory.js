const ProjectFactory = (projectName, projectID) => {
  let myProject = [];

  const getMyProject = () => myProject;

  const addTodos = (todos) => {
    myProject = [...myProject, todos];
  };

  const editTodos = (
    todoIndex,
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newIsCompleted,
  ) => {
    myProject[todoIndex].setTitle(`${newTitle}`);
    myProject[todoIndex].setDescription(`${newDescription}`);
    myProject[todoIndex].setDueDate(`${newDueDate}`);
    myProject[todoIndex].setPriority(`${newPriority}`);
    myProject[todoIndex].setIsCompleted(`${newIsCompleted}`);
    return myProject[todoIndex];
  };

  const deleteTodo = (projectID) => {
    myProject = myProject.filter((item) => item.id === projectID);
  };

  const allTodos = () => {
    return myProject.map((item) => item);
  };

  const completedTodos = () => {
    myProject = myProject.filter((item) => {
      return item.getIsCompleted() !== true;
    });
  };

  const toJSON = () => {
    return {
      myProject,
      projectName,
      projectID,
    };
  };

  return {
    name: projectName,
    id: projectID,
    allTodos,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
    getMyProject,
    toJSON,
  };
};

export default ProjectFactory;
