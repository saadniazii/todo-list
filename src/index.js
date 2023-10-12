import TodoFactory from "./todoFactory/todoFactory";
import ProjectFactory from "./projectFactory/projectFactory";
import SidebarProjectFactory from "./sidebarFactory/sidebarFactory";
import "../src/styles/style.css";

const todo1 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  true
);

const todo2 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  false
);

const todo3 = TodoFactory(
  "todo1",
  "what i need to do",
  "tomorrow",
  "high",
  true
);

const projectOne = ProjectFactory("Project One"); //creation of the first project
projectOne.addTodos(todo1, todo2, todo3); //addition of the todo objects inside the project.

const sidebar = SidebarProjectFactory(); //creation of the sidebar project
sidebar.addProjects(projectOne); //addition of the project in the sidebar for me to loop over
console.log(sidebar.sidebarProjectsArray.map((item) => item.name)); //the array in which the projects are being stored.
