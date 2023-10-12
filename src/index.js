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
    // [projectName]: myProject,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};

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

const todo1 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  true
);

const todo2 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  false
);

const todo3 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  true
);

const projectOne = ProjectFactory("Project One"); //creation of the first project
projectOne.addTodos(todo1, todo2, todo3); //addition of the todo objects inside the project.

const sidebar = SidebarProjectFactory(); //creation of the sidebar project
sidebar.addProjects(projectOne); //addition of the project in the sidebar for me to loop over
console.log(sidebar.sidebarProjectsArray.map((item) => item.name)); //the array in which the projects are being stored.
