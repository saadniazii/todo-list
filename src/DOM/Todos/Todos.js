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
    const existingTodo = document.querySelector(`[data-id="${index}"]`);
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
      todoDiv.dataset.id = index.toString();

      editTodoBtn.textContent = "Edit";
      deleteTodoBtn.textContent = "Delete";
      deleteTodoBtn.addEventListener("click", () => {
        deleteFromDOM(project, index);
      });

      editTodoBtn.addEventListener("click", () => {
        editTodo(index);
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

const editTodo = (itemID) => {
  const getSpecific = document.querySelector(`[data-id="${itemID}"]`);
  console.log("get specific:", getSpecific);
  //get the project ID
};

export default Todos;
