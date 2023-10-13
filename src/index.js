import "../src/styles/style.css";
import AddProject from "./DOM/AddProject/AddProject";

const addProjectBtn = document.querySelector(".addProjectBtn");

addProjectBtn.addEventListener("click", () => {
  AddProject();
});
