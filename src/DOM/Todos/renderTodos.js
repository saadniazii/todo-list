import createElement from "../../utils/createElement";

export const renderTodo = (project) => {
    const todoDiv = createElement("div", "todo-div");

    const todos = project.allTodos();

    if (todos.length <= 0) {
        return;
    }

    todos.forEach((element) => {
        const titleDiv = createElement("div", "title-div");
        const descriptionDiv = createElement("div", "description-div");
        const dueDateDiv = createElement("div", "dueDate-div");
        const priorityDiv = createElement("div", "priority-div");
        const isCompletedDiv = createElement("div", "isCompleted-div");

        titleDiv.textContent = element.getTitle();
        descriptionDiv.textContent = element.getDescription();
        dueDateDiv.textContent = element.getDueDate();
        priorityDiv.textContent = element.getPriority();
        isCompletedDiv.textContent = element.getIsCompleted();
        todoDiv.append(
            titleDiv,
            descriptionDiv,
            dueDateDiv,
            priorityDiv,
            isCompletedDiv
        );
    });
    const mainBody = document.querySelector(".main-body");
    mainBody.appendChild(todoDiv);
};