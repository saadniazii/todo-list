import ProjectFactory from "../../projectFactory/projectFactory";
import { sidebar } from "../../sidebarFactory/sidebarFactory";
import { addInLocalStorage } from "../LocalStorage/addInLocalStorage";
import { createProjectElement } from "../DisplayProjectsInSidebar/createProjectElement";

let projectIdCounter = 0;

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;
  const projectId = projectIdCounter++;

  let project = ProjectFactory(getAddProjectBtnValue, projectId);
  sidebar.addProjects(project);
  const projectArray = sidebar.projectList;
  addInLocalStorage(projectArray);
  return {
    project,
  };
};

window.onload = function () {
  const storedArray = JSON.parse(localStorage.getItem("project_array"));
  if (storedArray !== "undefined" && storedArray !== "null") {
    storedArray.forEach((item) => {
      item.addTodos = function (todos) {
        item.myProject = [...item.myProject, todos];
      };

      item.editTodos = function (
        todoIndex,
        newTitle,
        newDescription,
        newDueDate,
        newPriority,
        newIsCompleted,
      ) {
        item.myProject[todoIndex].setTitle(newTitle);
        item.myProject[todoIndex].setDescription(newDescription);
        item.myProject[todoIndex].setDueDate(newDueDate);
        item.myProject[todoIndex].setPriority(newPriority);
        item.myProject[todoIndex].setIsCompleted(newIsCompleted);
        return item.myProject[todoIndex];
      };

      item.deleteTodo = function (projectID) {
        item.myProject = item.myProject.filter((todo) => todo.id !== projectID);
      };

      item.allTodos = function () {
        return item.myProject.map((item) => item);
      };

      item.completedTodos = function () {
        item.myProject = item.myProject.filter(
          (todo) => !todo.getIsCompleted(),
        );
      };

      sidebar.addProjects(item);
    });
    const sidebarHTML = document.querySelector(".sidebar");
    storedArray.forEach((item, index) => {
      const projectsDiv = createProjectElement(item, index);
      sidebarHTML.append(projectsDiv);
    });
  }
};
export default AddProject;
