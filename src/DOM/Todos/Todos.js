import { sidebar } from "../../sidebarFactory/sidebarFactory";

const Todos = (itemID) => {
  const addTodoBtn = document.querySelector(".addTodoBtn");
  addTodoBtn.addEventListener("click", () => {
    const getTitle = document.querySelector("#title").value;
    const getDate = document.querySelector("#date").value;
    const getPriority = document.querySelector("#priority").value;
    const getDescription = document.querySelector("#description").value;
    const newTodo = { getTitle, getDate, getPriority, getDescription };
    const projectToAddTodo = sidebar.getProject(itemID);
    console.log(projectToAddTodo.name); //this works
     console.log(projectToAddTodo.addTodos(newTodo)); //this does not
  });
};

export default Todos;
