const TodoFactory = (title, description, dueDate, priority, isCompleted) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getIsCompleted = () => isCompleted;

  const setTitle = (newTitle) => {
    return (title = newTitle);
  };
  const setDescription = (newDescription) => {
    return (description = newDescription);
  };
  const setDueDate = (newDueDate) => {
    return (dueDate = newDueDate);
  };
  const setPriority = (newPriority) => {
    return (priority = newPriority);
  };
  const setIsCompleted = (newIsCompleted) => {
    return (isCompleted = newIsCompleted);
  };

  const getAllValues = () => {
    return {
      title,
      description,
      dueDate,
      priority,
      isCompleted,
    };
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
    getAllValues,
  };
};

export default TodoFactory;
