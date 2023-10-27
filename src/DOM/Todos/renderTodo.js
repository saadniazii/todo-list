import createElement from "../../utils/createElement";
import { deleteTodo } from "./deleteTodo";
import { editTodo } from "./Todos";

export const renderSingleTodo = (todo, index, project) => {
  const todoDiv = createElement("div", "todo-div");
  const mainBody = document.querySelector(".main-body");

  const titleDiv = createElement("div", "title-div");
  const descriptionDiv = createElement("div", "description-div");
  const dueDateDiv = createElement("div", "dueDate-div");
  const priorityDiv = createElement("div", "priority-div");
  const isCompletedDiv = createElement("div", "isCompleted-div");
  const editTodoBtn = createElement("button", "edit-todo-btn");
  const deleteTodoBtn = createElement("button", "delete-todo-btn");

  editTodoBtn.textContent = "Edit";
  deleteTodoBtn.textContent = "Delete";

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
  renderBorderOfTodos(index);
  isTodoCompleted(index);
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

export const renderBorderOfTodos = (index) => {
  const todoDiv = document.querySelector(`[data-todoid="${index}"]`);
  if (todoDiv.childNodes[2].textContent === "low") {
    todoDiv.style.backgroundColor = "#5DD39E";
    todoDiv.style.color = "white";
  } else if (todoDiv.childNodes[2].textContent === "medium") {
    todoDiv.style.backgroundColor = "#FFD23F";
    todoDiv.style.color = "black";
  } else if (todoDiv.childNodes[2].textContent === "high") {
    todoDiv.style.backgroundColor = "#960200";
    todoDiv.style.color = "white";
  }
};

export const isTodoCompleted = (index) => {
  const todoDiv = document.querySelector(`[data-todoid="${index}"]`);
  const allChildren = todoDiv.childNodes;
  if (todoDiv.childNodes[4].textContent === "yes") {
    return allChildren.forEach((children) => {
      if (children.nodeName === "DIV") {
        children.style.textDecoration = "line-through";
      }
    });
  }
};
