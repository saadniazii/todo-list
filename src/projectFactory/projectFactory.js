const ProjectFactory = (projectName, projectID) => {
  let myProject = [];
  let id = projectID;

  const addTodos = (todos) => {
    myProject = [...myProject, todos];
    return myProject;
  };

  const editTodos = (todoIndex) => {
    myProject[todoIndex].setTitle("NEW EDIT TODOS");
    myProject[todoIndex].setDescription("NEW EDIT DESCRIPTION");
    myProject[todoIndex].setDueDate("NEW EDIT DATE");
    myProject[todoIndex].setPriority("high");
    myProject[todoIndex].setIsCompleted(false);
    return myProject[todoIndex];
  };

  const deleteTodo = (projectID) => {
    myProject = myProject.filter((item) => item.id !== projectID);
    return myProject;
  };

  const allTodos = () => {
    return myProject.map((item) => item);
  };

  const completedTodos = () => {
    myProject = myProject.filter((item) => {
      return item.getIsCompleted() !== true;
    });
  };

  return {
    name: projectName,
    id: projectID,
    allTodos,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};

export default ProjectFactory;
