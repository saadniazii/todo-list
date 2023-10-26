import { sidebar } from "../../sidebarFactory/sidebarFactory";
import TodoFactory from "../../todoFactory/todoFactory";
import createElement from "../../utils/createElement";
import { isTodoCompleted, renderBorderOfTodos, renderTodo } from "./renderTodo";
import { deleteTodo } from "./deleteTodo";
import { addTodoInLocalStorage } from "../LocalStorage/addInLocalStorage";

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
  addTodoInLocalStorage(projectToAddTodo);
};

export const editTodo = (itemID, project) => {
  const todoDiv = document.querySelector(`[data-todoid="${itemID}"]`);
  const mainBody = document.querySelector(".main-body");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Title");
  titleInput.setAttribute("id", "edit-title");
  titleInput.setAttribute("name", "title");
  titleInput.value = todoDiv.childNodes[0].textContent;

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("placeholder", "23/09/2023");
  dateInput.setAttribute("id", "edit-date");
  dateInput.setAttribute("name", "date");
  dateInput.value = todoDiv.childNodes[1].textContent;
  dateInput.style.marginLeft = "10px";

  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.setAttribute("id", "edit-priority");

  const priorityDefaultOption = document.createElement("option");
  priorityDefaultOption.setAttribute("value", "");
  priorityDefaultOption.textContent = "Priority Level";

  const priorityLowOption = document.createElement("option");
  priorityLowOption.setAttribute("value", "low");
  priorityLowOption.textContent = "Low";

  const priorityMediumOption = document.createElement("option");
  priorityMediumOption.setAttribute("value", "medium");
  priorityMediumOption.textContent = "Medium";

  const priorityHighOption = document.createElement("option");
  priorityHighOption.setAttribute("value", "high");
  priorityHighOption.textContent = "High";

  prioritySelect.appendChild(priorityDefaultOption);
  prioritySelect.appendChild(priorityLowOption);
  prioritySelect.appendChild(priorityMediumOption);
  prioritySelect.appendChild(priorityHighOption);
  prioritySelect.value = todoDiv.childNodes[2].textContent;

  const isCompletedSelect = document.createElement("select");
  isCompletedSelect.setAttribute("name", "isCompleted");
  isCompletedSelect.setAttribute("id", "edit-isCompleted");

  const isCompletedDefaultOption = document.createElement("option");
  isCompletedDefaultOption.setAttribute("value", "");
  isCompletedDefaultOption.textContent = "Todo Completed?";

  const isCompletedYesOption = document.createElement("option");
  isCompletedYesOption.setAttribute("value", "yes");
  isCompletedYesOption.textContent = "Yes";

  const isCompletedNoOption = document.createElement("option");
  isCompletedNoOption.setAttribute("value", "no");
  isCompletedNoOption.textContent = "No";

  isCompletedSelect.appendChild(isCompletedDefaultOption);
  isCompletedSelect.appendChild(isCompletedYesOption);
  isCompletedSelect.appendChild(isCompletedNoOption);
  isCompletedSelect.value = todoDiv.childNodes[4].textContent;

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute(
    "placeholder",
    "write description about the todo",
  );
  descriptionTextarea.setAttribute("id", "edit-description");
  descriptionTextarea.value = todoDiv.childNodes[3].textContent;

  const saveButton = document.createElement("button");
  saveButton.setAttribute("class", "addTodoBtn");
  saveButton.textContent = "Save Todo";

  const titleDiv = createElement("div", "title-div");
  const descriptionDiv = createElement("div", "description-div");
  const dueDateDiv = createElement("div", "dueDate-div");
  const priorityDiv = createElement("div", "priority-div");
  const isCompletedDiv = createElement("div", "isCompleted-div");

  saveButton.addEventListener("click", () => {
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
      deleteTodo(project, itemID);
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
    renderBorderOfTodos(itemID);
    isTodoCompleted(itemID);
  });

  todoDiv.appendChild(titleInput);
  todoDiv.appendChild(dateInput);
  todoDiv.appendChild(prioritySelect);
  todoDiv.appendChild(isCompletedSelect);
  todoDiv.appendChild(descriptionTextarea);
  todoDiv.appendChild(saveButton);
  mainBody.appendChild(todoDiv);
};

window.onload = function () {
  const storedArray = JSON.parse(localStorage.getItem("todo_array"));
  if (Array.isArray(storedArray) && storedArray.length > 0) {
    storedArray.forEach((project) => {
      renderTodo(project);
    });
  }
};

export default Todos;
