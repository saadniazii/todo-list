import { sidebar } from "../../sidebarFactory/sidebarFactory";
import createElement from "../../utils/createElement";
import Todos, { editTodo, renderTodo } from "../Todos/Todos";
import { getAllTodos } from "../Todos/getAllTodos";
import { deleteTodo } from "../Todos/deleteTodo";
import { isTodoCompleted, renderBorderOfTodos } from "../Todos/renderTodo";

const displayProjectsInSidebar = () => {
  const allSidebarProjects = sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const passProjectID = (itemID) => Todos(itemID);
const passProject = (itemID) => getAllTodos(itemID);

const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");

  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);
    if (!existingProject) {
      const projectsDiv = createElement("div", "projects-div");
      const editProjectBtn = createElement("button", "edit-project-btn");
      const deleteProjectBtn = createElement("button", "delete-project-btn");
      const span = createElement("span");

      span.textContent = item.name;
      projectsDiv.append(span, editProjectBtn, deleteProjectBtn);
      projectsDiv.dataset.id = index;
      editProjectBtn.textContent = "Edit";
      deleteProjectBtn.textContent = "Delete";

      editProjectBtn.addEventListener("click", () => {
        editProject(index, sidebarProjects);
      });

      projectsDiv.addEventListener("click", () => passProject(item.id));

      toggleClickBehavior(projectsDiv, item);
      sidebarHTML.appendChild(projectsDiv);
    }
  });
};

const toggleClickBehavior = (projectsDiv, item) => {
  let isListenerAttached = false;

  const clickHandler = () => {
    if (isListenerAttached) {
      projectsDiv.removeEventListener("click", clickHandler);
    } else {
      passProjectID(item.id);
      projectsDiv.addEventListener("click", clickHandler);
    }

    isListenerAttached = !isListenerAttached;
  };

  projectsDiv.addEventListener("click", clickHandler);
};

const editProject = (itemID, project) => {
  const todoDiv = document.querySelector(`[data-id="${itemID}"]`);
  const mainBody = document.querySelector(".main-body");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Project");
  titleInput.setAttribute("id", "edit-project");
  titleInput.setAttribute("name", "edit-project");
  titleInput.value = todoDiv.childNodes[0].textContent;

  const saveButton = document.createElement("button");
  saveButton.setAttribute("class", "save-btn");
  saveButton.textContent = "Save";

  const titleDiv = createElement("div", "title-div");

  // saveButton.addEventListener("click", () => {
  //   const title = document.querySelector("#edit-project").value;
  //
  //   const editProjectBtn = createElement("button", "edit-todo-btn");
  //   const deleteTodoBtn = createElement("button", "delete-todo-btn");
  //
  //   titleDiv.textContent = title;
  //
  //   editProjectBtn.textContent = "Edit";
  //   deleteTodoBtn.textContent = "Delete";
  //
  //   deleteTodoBtn.addEventListener("click", () => {
  //     deleteTodo(project, itemID);
  //   });
  //
  //   editProjectBtn.addEventListener("click", () => {
  //     editTodo(itemID, project);
  //   });
  //
  //   todoDiv.appendChild(titleDiv);
  //
  //   todoDiv.appendChild(editProjectBtn);
  //   todoDiv.appendChild(deleteTodoBtn);
  //
  //   project.editTodos(itemID, title);
  //   renderBorderOfTodos(itemID);
  //   isTodoCompleted(itemID);
  // });

  // todoDiv.replaceChildren();

  todoDiv.appendChild(titleInput);
  todoDiv.appendChild(saveButton);
  mainBody.appendChild(todoDiv);
};

export default displayProjectsInSidebar;
