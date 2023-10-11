const TodoFactory = (title, description, dueDate, isCompleted) => {
  const _title = title;
  const _description = description;
  const _dueDate = dueDate;
  const _isCompleted = isCompleted;

  const getTitle = () => {};
  const getDescription = () => {};
  const getDueDate = () => {};
  const getIsCompleted = () => {};

  //and so on

  const setTitle = () => {};
  const setDescription = () => {};
  const setDueDate = () => {};
  const setIsCompleted = () => {};

  return {
    getTitle,
    getDescription,
    getDueDate,
    getIsCompleted,
    setTitle,
    setDescription,
    setDueDate,
    setIsCompleted,
  };
};

const ProjectFactory = (todos) => {
  const myProjects = [...todos];

  const addTodos = () => {};

  const editTodos = () => {};

  const deleteTodo = () => {};

  const completedTodos = () => {};

  return {
    myProjects,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};
