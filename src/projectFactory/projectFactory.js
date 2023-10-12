const ProjectFactory = (projectName) => {
  let myProject = [];

  const addTodos = (...todos) => {
    myProject.push(...todos);
  };

  const editTodos = (todoIndex) => {
    myProject[todoIndex].setTitle("NEW EDIT TODOS");
    myProject[todoIndex].setDescription("NEW EDIT DESCRIPTION");
    myProject[todoIndex].setDueDate("NEW EDIT DATE");
    myProject[todoIndex].setPriority("high");
    myProject[todoIndex].setIsCompleted(false);
    return myProject[todoIndex];
  };

  const deleteTodo = (todoIndex) => {
    myProject.splice(todoIndex, 1);
    console.log(myProject);
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
    allTodos,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};

export default ProjectFactory;
