import { sidebar } from "../../sidebarFactory/sidebarFactory";
import TodoFactory from "../../todoFactory/todoFactory";
import createElement from "../../utils/createElement";

const addTodoHandler = (event) => addTodo(event);
let projectToAddTodo = null;

const Todos = (itemID) => {
  const addTodoBtn = document.querySelector(".addTodoBtn");
  projectToAddTodo = sidebar.getProject(itemID);
  addTodoBtn.removeEventListener("click", addTodoHandler);
  addTodoBtn.addEventListener("click", addTodoHandler);
};

const addTodo = () => {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;
  const description = document.querySelector("#description").value;
  const isCompleted = document.querySelector("#isCompleted").value;

  const newTodo = TodoFactory(title, date, priority, description, isCompleted);
  projectToAddTodo.addTodos(newTodo);
  renderTodo(projectToAddTodo);
};

export const renderTodo = (project) => {
  const todoDiv = createElement("div", "todo-div");
  const mainBody = document.querySelector(".main-body");

  const todos = project.allTodos();

  if (todos.length <= 0) {
    return;
  }

  todos.forEach((element, index) => {
    const existingTodo = document.querySelector(`[data-todoid="${index}"]`);
    if (!existingTodo) {
      const titleDiv = createElement("div", "title-div");
      const descriptionDiv = createElement("div", "description-div");
      const dueDateDiv = createElement("div", "dueDate-div");
      const priorityDiv = createElement("div", "priority-div");
      const isCompletedDiv = createElement("div", "isCompleted-div");
      const editTodoBtn = createElement("button", "edit-todo-btn");
      const deleteTodoBtn = createElement("button", "delete-todo-btn");

      titleDiv.textContent = element.getTitle();
      descriptionDiv.textContent = element.getDescription();
      dueDateDiv.textContent = element.getDueDate();
      priorityDiv.textContent = element.getPriority();
      isCompletedDiv.textContent = element.getIsCompleted();
      todoDiv.dataset.todoid = index.toString();

      editTodoBtn.textContent = "Edit";
      deleteTodoBtn.textContent = "Delete";
      deleteTodoBtn.addEventListener("click", () => {
        deleteFromDOM(project, index);
      });

      editTodoBtn.addEventListener("click", () => {
        editTodo(index, project);
      });

      todoDiv.append(
        titleDiv,
        descriptionDiv,
        dueDateDiv,
        priorityDiv,
        isCompletedDiv,
        editTodoBtn,
        deleteTodoBtn,
      );

      mainBody.appendChild(todoDiv);
    }
  });
};

export const getAllTodos = (itemID) => {
  const mainBody = document.querySelector(".main-body");
  mainBody.replaceChildren();
  if (mainBody.childNodes.length === 0) {
    const getProject = sidebar.getProject(itemID);
    if (getProject.length === 0) {
      return;
    }
    renderTodo(getProject);
  }
};

const deleteFromDOM = (project, itemID) => {
  const mainBody = document.querySelector(".main-body");
  const getSpecific = mainBody.querySelector(`[data-id="${itemID}"]`);
  if (getSpecific) {
    project.deleteTodo(itemID);
    getSpecific.remove();
  }
};

const editTodo = (itemID, project) => {
  const todoDiv = createElement("div", "todo-div");
  const mainBody = document.querySelector(".main-body");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Title");
  titleInput.setAttribute("id", "edit-title");
  titleInput.setAttribute("name", "title");

  // Create the input element for the date
  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("placeholder", "23/09/2023");
  dateInput.setAttribute("id", "edit-date");
  dateInput.setAttribute("name", "date");

  // Create the select element for priority
  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "edit-priority");

  // Create the default option for priority
  const priorityDefaultOption = document.createElement("option");
  priorityDefaultOption.setAttribute("value", "");
  priorityDefaultOption.textContent = "--Please choose Priority Level--";

  // Create the option elements for priority
  const priorityLowOption = document.createElement("option");
  priorityLowOption.setAttribute("value", "low");
  priorityLowOption.textContent = "Low";

  const priorityMediumOption = document.createElement("option");
  priorityMediumOption.setAttribute("value", "medium");
  priorityMediumOption.textContent = "Medium";

  const priorityHighOption = document.createElement("option");
  priorityHighOption.setAttribute("value", "high");
  priorityHighOption.textContent = "High";

  // Append the priority options to the select element
  prioritySelect.appendChild(priorityDefaultOption);
  prioritySelect.appendChild(priorityLowOption);
  prioritySelect.appendChild(priorityMediumOption);
  prioritySelect.appendChild(priorityHighOption);

  // Create the select element for isCompleted
  const isCompletedSelect = document.createElement("select");
  isCompletedSelect.setAttribute("name", "isCompleted");
  isCompletedSelect.setAttribute("id", "edit-isCompleted");

  // Create the default option for isCompleted
  const isCompletedDefaultOption = document.createElement("option");
  isCompletedDefaultOption.setAttribute("value", "");
  isCompletedDefaultOption.textContent = "--Is Todo Completed?--";

  // Create the option elements for isCompleted
  const isCompletedYesOption = document.createElement("option");
  isCompletedYesOption.setAttribute("value", "yes");
  isCompletedYesOption.textContent = "Yes";

  const isCompletedNoOption = document.createElement("option");
  isCompletedNoOption.setAttribute("value", "no");
  isCompletedNoOption.textContent = "No";

  // Append the isCompleted options to the select element
  isCompletedSelect.appendChild(isCompletedDefaultOption);
  isCompletedSelect.appendChild(isCompletedYesOption);
  isCompletedSelect.appendChild(isCompletedNoOption);

  // Create the textarea element for description
  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute(
    "placeholder",
    "write description about the todo",
  );
  descriptionTextarea.setAttribute("id", "edit-description");

  // Create the button element for adding a todo
  const addButton = document.createElement("button");
  addButton.setAttribute("class", "addTodoBtn");
  addButton.textContent = "Add Todo";

  const titleDiv = createElement("div", "title-div");
  const descriptionDiv = createElement("div", "description-div");
  const dueDateDiv = createElement("div", "dueDate-div");
  const priorityDiv = createElement("div", "priority-div");
  const isCompletedDiv = createElement("div", "isCompleted-div");

  addButton.addEventListener("click", () => {
    const title = document.querySelector("#edit-title").value;
    const date = document.querySelector("#edit-date").value;
    const priority = document.querySelector("#edit-priority").value;
    const description = document.querySelector("#edit-description").value;
    const isCompleted = document.querySelector("#edit-isCompleted").value;
    const editTodoBtn = createElement("button", "edit-todo-btn");
    const deleteTodoBtn = createElement("button", "delete-todo-btn");

    titleDiv.textContent = title;
    dueDateDiv.textContent = date;
    priorityDiv.textContent = priority;
    isCompletedDiv.textContent = isCompleted;
    descriptionDiv.textContent = description;

    editTodoBtn.textContent = "Edit";
    deleteTodoBtn.textContent = "Delete";
    deleteTodoBtn.addEventListener("click", () => {
      deleteFromDOM(project, itemID);
    });

    editTodoBtn.addEventListener("click", () => {
      editTodo(itemID, project);
    });

    todoDiv.replaceChildren();

    todoDiv.appendChild(titleDiv);
    todoDiv.appendChild(dueDateDiv);
    todoDiv.appendChild(priorityDiv);
    todoDiv.appendChild(isCompletedDiv);
    todoDiv.appendChild(descriptionDiv);
    todoDiv.appendChild(editTodoBtn);
    todoDiv.appendChild(deleteTodoBtn);

    project.editTodos(itemID, title, date, priority, description, isCompleted);
    console.log(project.allTodos());
  });

  todoDiv.appendChild(titleInput);
  todoDiv.appendChild(dateInput);
  todoDiv.appendChild(prioritySelect);
  todoDiv.appendChild(isCompletedSelect);
  todoDiv.appendChild(descriptionTextarea);
  todoDiv.appendChild(addButton);

  let getSpecific = document.querySelector(`[data-todoid="${itemID}"]`);
  getSpecific.replaceChildren();
  mainBody.appendChild(todoDiv);
};

export default Todos;
