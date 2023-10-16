"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/DOM/AddProject/AddProject.js":
/*!******************************************!*\
  !*** ./src/DOM/AddProject/AddProject.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectFactory_projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projectFactory/projectFactory */ "./src/projectFactory/projectFactory.js");
/* harmony import */ var _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebarFactory/sidebarFactory */ "./src/sidebarFactory/sidebarFactory.js");



let projectIdCounter = 0;

const AddProject = () => {
  const getAddProjectBtnValue = document.querySelector("#addProject").value;
  const projectId = projectIdCounter++;

  let project = (0,_projectFactory_projectFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(getAddProjectBtnValue, projectId);
  _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_1__.sidebar.addProjects(project);

  return {
    project,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProject);


/***/ }),

/***/ "./src/DOM/DisplayProjectsInSidebar/displayProjectsInSidebar.js":
/*!**********************************************************************!*\
  !*** ./src/DOM/DisplayProjectsInSidebar/displayProjectsInSidebar.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sidebarFactory/sidebarFactory */ "./src/sidebarFactory/sidebarFactory.js");
/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createElement */ "./src/utils/createElement.js");
/* harmony import */ var _Todos_Todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Todos/Todos */ "./src/DOM/Todos/Todos.js");




const displayProjectsInSidebar = () => {
  const allSidebarProjects = _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_0__.sidebar.allProjects();
  renderProjects(allSidebarProjects);
};

const renderProjects = (sidebarProjects) => {
  const sidebarHTML = document.querySelector(".sidebar");
  sidebarProjects.forEach((item, index) => {
    const existingProject = sidebarHTML.querySelector(`[data-id="${index}"]`);

    if (!existingProject) {
      const addSidebarProjects = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", "add-sidebar-projects");
      const span = (0,_utils_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("span");

      span.textContent = item.name;

      addSidebarProjects.appendChild(span);

      addSidebarProjects.dataset.id = index;

      const passProjectID = () => (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_2__["default"])(item.id);

      addSidebarProjects.addEventListener("click", passProjectID);

      sidebarHTML.appendChild(addSidebarProjects);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjectsInSidebar);


/***/ }),

/***/ "./src/DOM/Todos/Todos.js":
/*!********************************!*\
  !*** ./src/DOM/Todos/Todos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sidebarFactory/sidebarFactory */ "./src/sidebarFactory/sidebarFactory.js");
/* harmony import */ var _todoFactory_todoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../todoFactory/todoFactory */ "./src/todoFactory/todoFactory.js");



const Todos = (itemID) => {
  const addTodoBtn = document.querySelector(".addTodoBtn");
  const addTodoHandler = () => addTodo(itemID);
  addTodoBtn.removeEventListener("click", addTodoHandler);
  addTodoBtn.addEventListener("click", addTodoHandler);
};

const addTodo = (itemID) => {
  const title = document.querySelector("#title").value;
  const date = document.querySelector("#date").value;
  const priority = document.querySelector("#priority").value;
  const description = document.querySelector("#description").value;
  const isCompleted = document.querySelector("#isCompleted").value;

  const newTodo = (0,_todoFactory_todoFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(title, date, priority, description, isCompleted);
  let projectToAddTodo = _sidebarFactory_sidebarFactory__WEBPACK_IMPORTED_MODULE_0__.sidebar.getProject(itemID);
  projectToAddTodo.addTodos(newTodo);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todos);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/styles/style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _DOM_AddProject_AddProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/AddProject/AddProject */ "./src/DOM/AddProject/AddProject.js");
/* harmony import */ var _DOM_DisplayProjectsInSidebar_displayProjectsInSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/DisplayProjectsInSidebar/displayProjectsInSidebar */ "./src/DOM/DisplayProjectsInSidebar/displayProjectsInSidebar.js");




const addProjectBtn = document.querySelector(".addProjectBtn");

addProjectBtn.addEventListener("click", () => {
  (0,_DOM_AddProject_AddProject__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_DOM_DisplayProjectsInSidebar_displayProjectsInSidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/projectFactory/projectFactory.js":
/*!**********************************************!*\
  !*** ./src/projectFactory/projectFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectFactory = (projectName, projectID) => {
  let myProject = [];
  let id = projectID;

  const addTodos = (todos) => {
    myProject = [...myProject, todos];
    return myProject;
  };

  const editTodos = (todoIndex) => {
    myProject[todoIndex].setTitle("NEW EDIT TODOS");
    myProject[todoIndex].setDescription("NEW EDIT DESCRIPTION");
    myProject[todoIndex].setDueDate("NEW EDIT DATE");
    myProject[todoIndex].setPriority("high");
    myProject[todoIndex].setIsCompleted(false);
    return myProject[todoIndex];
  };

  const deleteTodo = (projectID) => {
    myProject = myProject.filter((item) => item.id !== projectID);
    return myProject;
  };

  const allTodos = () => {
    return myProject.map((item) => item);
  };

  const completedTodos = () => {
    myProject = myProject.filter((item) => {
      return item.getIsCompleted() !== true;
    });
  };

  return {
    name: projectName,
    id: projectID,
    allTodos,
    addTodos,
    editTodos,
    deleteTodo,
    completedTodos,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectFactory);


/***/ }),

/***/ "./src/sidebarFactory/sidebarFactory.js":
/*!**********************************************!*\
  !*** ./src/sidebarFactory/sidebarFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidebar: () => (/* binding */ sidebar)
/* harmony export */ });
const SidebarProjectFactory = () => {
  let projectList = [];

  const addProjects = (...projects) => {
    projectList.push(...projects);
  };

  const deleteProject = (projectID) => {
    projectList = projectList.filter((item) => item.id !== projectID);
    return projectList;
  };

  const allProjects = () => {
    return projectList.map((item) => item);
  };

  const getProject = (projectID) => {
    const projectFound = projectList.find((item) => item.id === projectID);
    return projectFound;
  };

  return {
    projectList,
    addProjects,
    deleteProject,
    allProjects,
    getProject,
  };
};

const sidebar = SidebarProjectFactory();


/***/ }),

/***/ "./src/todoFactory/todoFactory.js":
/*!****************************************!*\
  !*** ./src/todoFactory/todoFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TodoFactory = (title, description, dueDate, priority, isCompleted) => {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  let _isCompleted = isCompleted;

  const getTitle = () => _title;
  const getDescription = () => _description;
  const getDueDate = () => _dueDate;
  const getPriority = () => _priority;
  const getIsCompleted = () => _isCompleted;

  const setTitle = (newTitle) => {
    return (_title = newTitle);
  };
  const setDescription = (newDescription) => {
    return (_description = newDescription);
  };
  const setDueDate = (newDueDate) => {
    return (_dueDate = newDueDate);
  };
  const setPriority = (newPriority) => {
    return (_priority = newPriority);
  };
  const setIsCompleted = (newIsCompleted) => {
    return (_isCompleted = newIsCompleted);
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getIsCompleted,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setIsCompleted,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoFactory);


/***/ }),

/***/ "./src/utils/createElement.js":
/*!************************************!*\
  !*** ./src/utils/createElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = (element, className) => {
  const el = document.createElement(element);

  if (className && className.trim() !== "") {
    el.classList.add(className);
  }

  return el;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDSDs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwwRUFBYztBQUM5QixFQUFFLG1FQUFPOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJvQztBQUNSO0FBQ25COztBQUVuQztBQUNBLDZCQUE2QixtRUFBTztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxNQUFNOztBQUV6RTtBQUNBLGlDQUFpQyxnRUFBYTtBQUM5QyxtQkFBbUIsZ0VBQWE7O0FBRWhDOztBQUVBOztBQUVBOztBQUVBLGtDQUFrQyx3REFBSzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3NCO0FBQ047O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9FQUFXO0FBQzdCLHlCQUF5QixtRUFBTztBQUNoQztBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJZO0FBQ29CO0FBQzBDOztBQUUvRjs7QUFFQTtBQUNBLEVBQUUsc0VBQVU7QUFDWixFQUFFLGtHQUF3QjtBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL0FkZFByb2plY3QvQWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL0Rpc3BsYXlQcm9qZWN0c0luU2lkZWJhci9kaXNwbGF5UHJvamVjdHNJblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS9Ub2Rvcy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RGYWN0b3J5L3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyRmFjdG9yeS9zaWRlYmFyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0ZhY3RvcnkvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxzL2NyZWF0ZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RGYWN0b3J5IGZyb20gXCIuLi8uLi9wcm9qZWN0RmFjdG9yeS9wcm9qZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuLi8uLi9zaWRlYmFyRmFjdG9yeS9zaWRlYmFyRmFjdG9yeVwiO1xuXG5sZXQgcHJvamVjdElkQ291bnRlciA9IDA7XG5cbmNvbnN0IEFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGdldEFkZFByb2plY3RCdG5WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdElkQ291bnRlcisrO1xuXG4gIGxldCBwcm9qZWN0ID0gUHJvamVjdEZhY3RvcnkoZ2V0QWRkUHJvamVjdEJ0blZhbHVlLCBwcm9qZWN0SWQpO1xuICBzaWRlYmFyLmFkZFByb2plY3RzKHByb2plY3QpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFByb2plY3Q7XG4iLCJpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3NpZGViYXJGYWN0b3J5L3NpZGViYXJGYWN0b3J5XCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IFRvZG9zIGZyb20gXCIuLi9Ub2Rvcy9Ub2Rvc1wiO1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHNJblNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFNpZGViYXJQcm9qZWN0cyA9IHNpZGViYXIuYWxsUHJvamVjdHMoKTtcbiAgcmVuZGVyUHJvamVjdHMoYWxsU2lkZWJhclByb2plY3RzKTtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RzID0gKHNpZGViYXJQcm9qZWN0cykgPT4ge1xuICBjb25zdCBzaWRlYmFySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgc2lkZWJhclByb2plY3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gc2lkZWJhckhUTUwucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2luZGV4fVwiXWApO1xuXG4gICAgaWYgKCFleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgIGNvbnN0IGFkZFNpZGViYXJQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhZGQtc2lkZWJhci1wcm9qZWN0c1wiKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgYWRkU2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICBhZGRTaWRlYmFyUHJvamVjdHMuZGF0YXNldC5pZCA9IGluZGV4O1xuXG4gICAgICBjb25zdCBwYXNzUHJvamVjdElEID0gKCkgPT4gVG9kb3MoaXRlbS5pZCk7XG5cbiAgICAgIGFkZFNpZGViYXJQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGFzc1Byb2plY3RJRCk7XG5cbiAgICAgIHNpZGViYXJIVE1MLmFwcGVuZENoaWxkKGFkZFNpZGViYXJQcm9qZWN0cyk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0c0luU2lkZWJhcjtcbiIsImltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi4vLi4vc2lkZWJhckZhY3Rvcnkvc2lkZWJhckZhY3RvcnlcIjtcbmltcG9ydCBUb2RvRmFjdG9yeSBmcm9tIFwiLi4vLi4vdG9kb0ZhY3RvcnkvdG9kb0ZhY3RvcnlcIjtcblxuY29uc3QgVG9kb3MgPSAoaXRlbUlEKSA9PiB7XG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRvZG9CdG5cIik7XG4gIGNvbnN0IGFkZFRvZG9IYW5kbGVyID0gKCkgPT4gYWRkVG9kbyhpdGVtSUQpO1xuICBhZGRUb2RvQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvSGFuZGxlcik7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG9IYW5kbGVyKTtcbn07XG5cbmNvbnN0IGFkZFRvZG8gPSAoaXRlbUlEKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIGNvbnN0IGlzQ29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc0NvbXBsZXRlZFwiKS52YWx1ZTtcblxuICBjb25zdCBuZXdUb2RvID0gVG9kb0ZhY3RvcnkodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaXNDb21wbGV0ZWQpO1xuICBsZXQgcHJvamVjdFRvQWRkVG9kbyA9IHNpZGViYXIuZ2V0UHJvamVjdChpdGVtSUQpO1xuICBwcm9qZWN0VG9BZGRUb2RvLmFkZFRvZG9zKG5ld1RvZG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb3M7XG4iLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEFkZFByb2plY3QgZnJvbSBcIi4vRE9NL0FkZFByb2plY3QvQWRkUHJvamVjdFwiO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0c0luU2lkZWJhciBmcm9tIFwiLi9ET00vRGlzcGxheVByb2plY3RzSW5TaWRlYmFyL2Rpc3BsYXlQcm9qZWN0c0luU2lkZWJhclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIEFkZFByb2plY3QoKTtcbiAgZGlzcGxheVByb2plY3RzSW5TaWRlYmFyKCk7XG59KTtcbiIsImNvbnN0IFByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0SUQpID0+IHtcbiAgbGV0IG15UHJvamVjdCA9IFtdO1xuICBsZXQgaWQgPSBwcm9qZWN0SUQ7XG5cbiAgY29uc3QgYWRkVG9kb3MgPSAodG9kb3MpID0+IHtcbiAgICBteVByb2plY3QgPSBbLi4ubXlQcm9qZWN0LCB0b2Rvc107XG4gICAgcmV0dXJuIG15UHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kb3MgPSAodG9kb0luZGV4KSA9PiB7XG4gICAgbXlQcm9qZWN0W3RvZG9JbmRleF0uc2V0VGl0bGUoXCJORVcgRURJVCBUT0RPU1wiKTtcbiAgICBteVByb2plY3RbdG9kb0luZGV4XS5zZXREZXNjcmlwdGlvbihcIk5FVyBFRElUIERFU0NSSVBUSU9OXCIpO1xuICAgIG15UHJvamVjdFt0b2RvSW5kZXhdLnNldER1ZURhdGUoXCJORVcgRURJVCBEQVRFXCIpO1xuICAgIG15UHJvamVjdFt0b2RvSW5kZXhdLnNldFByaW9yaXR5KFwiaGlnaFwiKTtcbiAgICBteVByb2plY3RbdG9kb0luZGV4XS5zZXRJc0NvbXBsZXRlZChmYWxzZSk7XG4gICAgcmV0dXJuIG15UHJvamVjdFt0b2RvSW5kZXhdO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdElEKSA9PiB7XG4gICAgbXlQcm9qZWN0ID0gbXlQcm9qZWN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcHJvamVjdElEKTtcbiAgICByZXR1cm4gbXlQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFRvZG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBteVByb2plY3QubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZWRUb2RvcyA9ICgpID0+IHtcbiAgICBteVByb2plY3QgPSBteVByb2plY3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5nZXRJc0NvbXBsZXRlZCgpICE9PSB0cnVlO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcHJvamVjdE5hbWUsXG4gICAgaWQ6IHByb2plY3RJRCxcbiAgICBhbGxUb2RvcyxcbiAgICBhZGRUb2RvcyxcbiAgICBlZGl0VG9kb3MsXG4gICAgZGVsZXRlVG9kbyxcbiAgICBjb21wbGV0ZWRUb2RvcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RGYWN0b3J5O1xuIiwiY29uc3QgU2lkZWJhclByb2plY3RGYWN0b3J5ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0cyA9ICguLi5wcm9qZWN0cykgPT4ge1xuICAgIHByb2plY3RMaXN0LnB1c2goLi4ucHJvamVjdHMpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdElEKSA9PiB7XG4gICAgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2plY3RJRCk7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0O1xuICB9O1xuXG4gIGNvbnN0IGFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdC5tYXAoKGl0ZW0pID0+IGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdElEKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvdW5kID0gcHJvamVjdExpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvamVjdElEKTtcbiAgICByZXR1cm4gcHJvamVjdEZvdW5kO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdExpc3QsXG4gICAgYWRkUHJvamVjdHMsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBnZXRQcm9qZWN0LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBTaWRlYmFyUHJvamVjdEZhY3RvcnkoKTtcbiIsImNvbnN0IFRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkKSA9PiB7XG4gIGxldCBfdGl0bGUgPSB0aXRsZTtcbiAgbGV0IF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBsZXQgX2R1ZURhdGUgPSBkdWVEYXRlO1xuICBsZXQgX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIGxldCBfaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IF90aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBfZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBfZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBfcHJpb3JpdHk7XG4gIGNvbnN0IGdldElzQ29tcGxldGVkID0gKCkgPT4gX2lzQ29tcGxldGVkO1xuXG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgcmV0dXJuIChfdGl0bGUgPSBuZXdUaXRsZSk7XG4gIH07XG4gIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgcmV0dXJuIChfZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbik7XG4gIH07XG4gIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgIHJldHVybiAoX2R1ZURhdGUgPSBuZXdEdWVEYXRlKTtcbiAgfTtcbiAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4gKF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5KTtcbiAgfTtcbiAgY29uc3Qgc2V0SXNDb21wbGV0ZWQgPSAobmV3SXNDb21wbGV0ZWQpID0+IHtcbiAgICByZXR1cm4gKF9pc0NvbXBsZXRlZCA9IG5ld0lzQ29tcGxldGVkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0SXNDb21wbGV0ZWQsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgc2V0RHVlRGF0ZSxcbiAgICBzZXRQcmlvcml0eSxcbiAgICBzZXRJc0NvbXBsZXRlZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9GYWN0b3J5O1xuIiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuXG4gIGlmIChjbGFzc05hbWUgJiYgY2xhc3NOYW1lLnRyaW0oKSAhPT0gXCJcIikge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBlbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=