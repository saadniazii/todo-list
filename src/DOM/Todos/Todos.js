import createForm from "../../utils/createForm";
import AddProject from "../AddProject/AddProject";

const Todos = (index) => {
  const todoForm = document.querySelector("#todo-form");
  todoForm.replaceChildren();
  createForm();
};

export default Todos;
