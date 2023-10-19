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

const addTodo = (event) => {
  console.log(event.target);
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
  console.log("project", project);

  const todos = project.allTodos();

  if (todos.length <= 0) {
    return;
  }

  todos.forEach((element) => {
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
    editTodoBtn.textContent = "Edit";
    deleteTodoBtn.textContent = "Delete";
    todoDiv.dataset.id = project.id;
    deleteTodoBtn.addEventListener("click", () => {
      deleteFromDOM(project, project.id);
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
  });
  const mainBody = document.querySelector(".main-body");
  mainBody.appendChild(todoDiv);
};

export const getAllTodos = (itemID) => {
  const mainBody = document.querySelector(".main-body");
  mainBody.replaceChildren();
  if (mainBody.childNodes.length === 0) {
    const getProject = sidebar.getProject(itemID);
    // const getTodos = getProject.allTodos();
    if (getProject.length === 0) {
      return;
    }

    renderTodo(getProject);
  }
};

const deleteFromDOM = (project, itemID) => {
  const mainBody = document.querySelector(".main-body");
  const getSpecific = mainBody.querySelector(`[data-id="${itemID}"]`);
  if (mainBody.childNodes.length > 0) {
    project.deleteTodo(itemID);
    mainBody.removeChild(getSpecific);
  }
};

export default Todos;
