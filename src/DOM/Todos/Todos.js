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

    titleDiv.textContent = element.getTitle();
    descriptionDiv.textContent = element.getDescription();
    dueDateDiv.textContent = element.getDueDate();
    priorityDiv.textContent = element.getPriority();
    isCompletedDiv.textContent = element.getIsCompleted();
    todoDiv.append(
      titleDiv,
      descriptionDiv,
      dueDateDiv,
      priorityDiv,
      isCompletedDiv
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
    console.log("get todos: ", getProject);
  }
};

export default Todos;
