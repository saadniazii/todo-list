import { sidebar } from "../../sidebarFactory/sidebarFactory";
import TodoFactory from "../../todoFactory/todoFactory";
import createElement from "../../utils/createElement";

const addTodoHandler = (itemID) => addTodo(itemID);

const Todos = (itemID) => {
  const addTodoBtn = document.querySelector(".addTodoBtn");
  addTodoBtn.addEventListener("click", () => addTodoHandler(itemID));
};

const addTodo = (itemID) => {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;
  const description = document.querySelector("#description").value;
  const isCompleted = document.querySelector("#isCompleted").value;

  const newTodo = TodoFactory(title, date, priority, description, isCompleted);
  let projectToAddTodo = sidebar.getProject(itemID);
  projectToAddTodo.addTodos(newTodo);
  renderTodo(projectToAddTodo);
};

const renderTodo = (project) => {
  const todoDiv = createElement("div", "todo-div");

  const todos = project.allTodos();
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

export default Todos;
