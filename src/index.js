import "../src/styles/style.css";
import AddProject from "./DOM/AddProject/AddProject";
import displayProjectsInSidebar from "./DOM/DisplayProjectsInSidebar/displayProjectsInSidebar";

const addProjectBtn = document.querySelector(".addProjectBtn");

addProjectBtn.addEventListener("click", () => {
  AddProject();
  displayProjectsInSidebar();
});
