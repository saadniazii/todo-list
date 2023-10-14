import AddProject from "../DOM/AddProject/AddProject";

const createForm = () => {
  const todoForm = document.getElementById("todo-form");

  const titleInput = titleInputFn();
  todoForm.appendChild(titleInput);

  const dateInput = dateInputFn();
  todoForm.appendChild(dateInput);

  const prioritySelect = prioritySelectFn();
  todoForm.appendChild(prioritySelect);

  const descriptionTextarea = descriptionTextFn();
  todoForm.appendChild(descriptionTextarea);

  const addButton = document.createElement("button");

  addButton.className = "addTodoBtn";
  addButton.textContent = "Add Todo";
  addButton.addEventListener("click", function () {
    const title = titleInput.value;
    const date = dateInput.value;
    const priority = prioritySelect.value;
    const description = descriptionTextarea.value;

    const newTodo = { title, date, priority, description };
    // const myProject = myProjectData.project;
    // myProject.addTodos(newTodo);
    // console.log(myProject);
  });
  todoForm.appendChild(addButton);
};

const titleInputFn = () => {
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.htmlFor = "title";
  return titleInput;
};

const dateInputFn = () => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.placeholder = "23/09/2023";
  dateInput.id = "date";
  dateInput.name = "date";
  dateInput.htmlFor = "date";
  return dateInput;
};

const prioritySelectFn = () => {
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "priority";
  prioritySelect.id = "priority";

  const priorityOptions = [
    { value: "", text: "--Please choose Priority Level--" },
    { value: "low", text: "Low" },
    { value: "medium", text: "Medium" },
    { value: "high", text: "High" },
  ];

  priorityOptions.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.text;
    prioritySelect.appendChild(option);
  });

  return prioritySelect;
};

const descriptionTextFn = () => {
  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.placeholder = "Write a description about the todo";
  return descriptionTextarea;
};

export default createForm;
