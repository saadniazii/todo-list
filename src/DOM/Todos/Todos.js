const Todos = (event) => {
  const index = event.target.dataset.id;
  const sidebarHTML = document.querySelector(".sidebar");
  const selectedProject = sidebarHTML.querySelector(`[data-id="${index}"]`);
  console.log(selectedProject);
};

export default Todos;
