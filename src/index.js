const TodoFactory = (title, description, dueDate, priority, isCompleted) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _isCompleted = isCompleted;

  const getTitle = () => _title;
  const getDescription = () => _description;
  const getDueDate = () => _dueDate;
  const getPriority = () => _priority;
  const getIsCompleted = () => _isCompleted;

  const setTitle = (newTitle) => {
    return (_title = newTitle);
  };
  const setDescription = (newDescription) => {
    return (_description = newDescription);
  };
  const setDueDate = (newDueDate) => {
    return (_dueDate = newDueDate);
  };
  const setPriority = (newPriority) => {
    return (_priority = newPriority);
  };
  const setIsCompleted = (newIsCompleted) => {
    return (_isCompleted = newIsCompleted);
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getIsCompleted,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsCompleted,
  };
};

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
    return myProject[todoIndex];
  };

  const deleteTodo = (todoIndex) => {
    myProject.splice(todoIndex, 1);
    console.log(myProject);
    return myProject;
  };

  return {
    [projectName]: myProject,
    addTodos,
    editTodos,
    deleteTodo,
  };
};

const todo1 = TodoFactory(
  "have sex",
  "have sex urgently",
  "tomorrow",
  "high",
  false
);

const projectOne = ProjectFactory("Project One");
projectOne.addTodos(todo1);
projectOne.deleteTodo(0);
// console.log(projectOne[0].getTitle());
