import { sidebar } from "../../sidebarFactory/sidebarFactory";
import TodoFactory from "../../todoFactory/todoFactory";

const Todos = (itemID) => {
  const addTodoBtn = document.querySelector(".addTodoBtn");
  const addTodoHandler = () => addTodo(itemID);
  addTodoBtn.removeEventListener("click", addTodoHandler);
  addTodoBtn.addEventListener("click", addTodoHandler);
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
};

export default Todos;
