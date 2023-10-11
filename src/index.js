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

  const setTitle = () => {};
  const setDescription = () => {};
  const setDueDate = () => {};
  const setPriority = () => {};
  const setIsCompleted = () => {};

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
  const myProject = [];

  const addTodos = (...todos) => {
    myProject.push(...todos);
  };

  const editTodos = () => {};

  const deleteTodo = () => {};

  const completedTodos = () => {};

  return {
    [projectName]: myProject,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};

const todo1 = TodoFactory(
  "have sex",
  "have sex urgently",
  "tomorrow",
  "high",
  "true"
);

const projectOne = ProjectFactory("Project One");
projectOne.addTodos(todo1, todo1, todo1);
console.log(projectOne);
