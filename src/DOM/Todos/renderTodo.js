import createElement from "../../utils/createElement";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./Todos";

const renderSingleTodo = (todo, index, project) => {
  const todoDiv = createElement("div", "todo-div");
  const mainBody = document.querySelector(".main-body");

  const titleDiv = createElement("div", "title-div");
  const descriptionDiv = createElement("div", "description-div");
  const dueDateDiv = createElement("div", "dueDate-div");
  const priorityDiv = createElement("div", "priority-div");
  const isCompletedDiv = createElement("div", "isCompleted-div");
  const editTodoBtn = createElement("button", "edit-todo-btn");
  const deleteTodoBtn = createElement("button", "delete-todo-btn");

  titleDiv.textContent = todo.getTitle();
  descriptionDiv.textContent = todo.getDescription();
  dueDateDiv.textContent = todo.getDueDate();
  priorityDiv.textContent = todo.getPriority();
  isCompletedDiv.textContent = todo.getIsCompleted();
  todoDiv.dataset.todoid = index.toString();

  deleteTodoBtn.addEventListener("click", () => {
    deleteTodo(project, index);
  });

  editTodoBtn.addEventListener("click", () => {
    editTodo(index, project);
  });

  todoDiv.append(
    titleDiv,
    descriptionDiv,
    dueDateDiv,
    priorityDiv,
    isCompletedDiv,
    editTodoBtn,
    deleteTodoBtn,
  );

  mainBody.appendChild(todoDiv);
};

export const renderTodo = (project) => {
  const todos = project.allTodos();

  if (todos.length <= 0) {
    return;
  }

  todos.forEach((todo, index) => {
    const existingTodo = document.querySelector(`[data-todoid="${index}"]`);
    if (!existingTodo) {
      renderSingleTodo(todo, index, project);
    }
  });
};
