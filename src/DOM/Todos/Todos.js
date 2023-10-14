import createForm from "../../utils/createForm";
import AddProject from "../AddProject/AddProject";

const Todos = (index) => {
  const mainBody = document.querySelector("#todo-form");
  mainBody.replaceChildren();
  createForm();
  //create Form above
};

export default Todos;
