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

      const passTodos = () => (0,_Todos_Todos__WEBPACK_IMPORTED_MODULE_2__["default"])(item.id);

      addSidebarProjects.addEventListener("click", passTodos);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7QUFDSDs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwwRUFBYztBQUM5QixFQUFFLG1FQUFPOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJvQztBQUNSO0FBQ25COztBQUVuQztBQUNBLDZCQUE2QixtRUFBTztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxNQUFNOztBQUV6RTtBQUNBLGlDQUFpQyxnRUFBYTtBQUM5QyxtQkFBbUIsZ0VBQWE7O0FBRWhDOztBQUVBOztBQUVBOztBQUVBLDhCQUE4Qix3REFBSzs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSx3QkFBd0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3NCO0FBQ047O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9FQUFXO0FBQzdCLHlCQUF5QixtRUFBTztBQUNoQztBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJZO0FBQ29CO0FBQzBDOztBQUUvRjs7QUFFQTtBQUNBLEVBQUUsc0VBQVU7QUFDWixFQUFFLGtHQUF3QjtBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL0FkZFByb2plY3QvQWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NL0Rpc3BsYXlQcm9qZWN0c0luU2lkZWJhci9kaXNwbGF5UHJvamVjdHNJblNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS9Ub2Rvcy9Ub2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RGYWN0b3J5L3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyRmFjdG9yeS9zaWRlYmFyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0ZhY3RvcnkvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3V0aWxzL2NyZWF0ZUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RGYWN0b3J5IGZyb20gXCIuLi8uLi9wcm9qZWN0RmFjdG9yeS9wcm9qZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuLi8uLi9zaWRlYmFyRmFjdG9yeS9zaWRlYmFyRmFjdG9yeVwiO1xuXG5sZXQgcHJvamVjdElkQ291bnRlciA9IDA7XG5cbmNvbnN0IEFkZFByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGdldEFkZFByb2plY3RCdG5WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKS52YWx1ZTtcbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdElkQ291bnRlcisrO1xuXG4gIGxldCBwcm9qZWN0ID0gUHJvamVjdEZhY3RvcnkoZ2V0QWRkUHJvamVjdEJ0blZhbHVlLCBwcm9qZWN0SWQpO1xuICBzaWRlYmFyLmFkZFByb2plY3RzKHByb2plY3QpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFByb2plY3Q7XG4iLCJpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3NpZGViYXJGYWN0b3J5L3NpZGViYXJGYWN0b3J5XCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IFRvZG9zIGZyb20gXCIuLi9Ub2Rvcy9Ub2Rvc1wiO1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHNJblNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFNpZGViYXJQcm9qZWN0cyA9IHNpZGViYXIuYWxsUHJvamVjdHMoKTtcbiAgcmVuZGVyUHJvamVjdHMoYWxsU2lkZWJhclByb2plY3RzKTtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RzID0gKHNpZGViYXJQcm9qZWN0cykgPT4ge1xuICBjb25zdCBzaWRlYmFySFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgc2lkZWJhclByb2plY3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gc2lkZWJhckhUTUwucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2luZGV4fVwiXWApO1xuXG4gICAgaWYgKCFleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgIGNvbnN0IGFkZFNpZGViYXJQcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhZGQtc2lkZWJhci1wcm9qZWN0c1wiKTtcbiAgICAgIGNvbnN0IHNwYW4gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgYWRkU2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICBhZGRTaWRlYmFyUHJvamVjdHMuZGF0YXNldC5pZCA9IGluZGV4O1xuXG4gICAgICBjb25zdCBwYXNzVG9kb3MgPSAoKSA9PiBUb2RvcyhpdGVtLmlkKTtcblxuICAgICAgYWRkU2lkZWJhclByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXNzVG9kb3MpO1xuXG4gICAgICBzaWRlYmFySFRNTC5hcHBlbmRDaGlsZChhZGRTaWRlYmFyUHJvamVjdHMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UHJvamVjdHNJblNpZGViYXI7XG4iLCJpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4uLy4uL3NpZGViYXJGYWN0b3J5L3NpZGViYXJGYWN0b3J5XCI7XG5pbXBvcnQgVG9kb0ZhY3RvcnkgZnJvbSBcIi4uLy4uL3RvZG9GYWN0b3J5L3RvZG9GYWN0b3J5XCI7XG5cbmNvbnN0IFRvZG9zID0gKGl0ZW1JRCkgPT4ge1xuICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUb2RvQnRuXCIpO1xuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9ICgpID0+IGFkZFRvZG8oaXRlbUlEKTtcbiAgYWRkVG9kb0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kb0hhbmRsZXIpO1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvSGFuZGxlcik7XG59O1xuXG5jb25zdCBhZGRUb2RvID0gKGl0ZW1JRCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIikudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBjb25zdCBpc0NvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNDb21wbGV0ZWRcIikudmFsdWU7XG5cbiAgY29uc3QgbmV3VG9kbyA9IFRvZG9GYWN0b3J5KHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlzQ29tcGxldGVkKTtcbiAgbGV0IHByb2plY3RUb0FkZFRvZG8gPSBzaWRlYmFyLmdldFByb2plY3QoaXRlbUlEKTtcbiAgcHJvamVjdFRvQWRkVG9kby5hZGRUb2RvcyhuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xuIiwiaW1wb3J0IFwiLi4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBBZGRQcm9qZWN0IGZyb20gXCIuL0RPTS9BZGRQcm9qZWN0L0FkZFByb2plY3RcIjtcbmltcG9ydCBkaXNwbGF5UHJvamVjdHNJblNpZGViYXIgZnJvbSBcIi4vRE9NL0Rpc3BsYXlQcm9qZWN0c0luU2lkZWJhci9kaXNwbGF5UHJvamVjdHNJblNpZGViYXJcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdEJ0blwiKTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBBZGRQcm9qZWN0KCk7XG4gIGRpc3BsYXlQcm9qZWN0c0luU2lkZWJhcigpO1xufSk7XG4iLCJjb25zdCBQcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSwgcHJvamVjdElEKSA9PiB7XG4gIGxldCBteVByb2plY3QgPSBbXTtcbiAgbGV0IGlkID0gcHJvamVjdElEO1xuXG4gIGNvbnN0IGFkZFRvZG9zID0gKHRvZG9zKSA9PiB7XG4gICAgbXlQcm9qZWN0ID0gWy4uLm15UHJvamVjdCwgdG9kb3NdO1xuICAgIHJldHVybiBteVByb2plY3Q7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG9zID0gKHRvZG9JbmRleCkgPT4ge1xuICAgIG15UHJvamVjdFt0b2RvSW5kZXhdLnNldFRpdGxlKFwiTkVXIEVESVQgVE9ET1NcIik7XG4gICAgbXlQcm9qZWN0W3RvZG9JbmRleF0uc2V0RGVzY3JpcHRpb24oXCJORVcgRURJVCBERVNDUklQVElPTlwiKTtcbiAgICBteVByb2plY3RbdG9kb0luZGV4XS5zZXREdWVEYXRlKFwiTkVXIEVESVQgREFURVwiKTtcbiAgICBteVByb2plY3RbdG9kb0luZGV4XS5zZXRQcmlvcml0eShcImhpZ2hcIik7XG4gICAgbXlQcm9qZWN0W3RvZG9JbmRleF0uc2V0SXNDb21wbGV0ZWQoZmFsc2UpO1xuICAgIHJldHVybiBteVByb2plY3RbdG9kb0luZGV4XTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUb2RvID0gKHByb2plY3RJRCkgPT4ge1xuICAgIG15UHJvamVjdCA9IG15UHJvamVjdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHByb2plY3RJRCk7XG4gICAgcmV0dXJuIG15UHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBhbGxUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbXlQcm9qZWN0Lm1hcCgoaXRlbSkgPT4gaXRlbSk7XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVkVG9kb3MgPSAoKSA9PiB7XG4gICAgbXlQcm9qZWN0ID0gbXlQcm9qZWN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uZ2V0SXNDb21wbGV0ZWQoKSAhPT0gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgIGlkOiBwcm9qZWN0SUQsXG4gICAgYWxsVG9kb3MsXG4gICAgYWRkVG9kb3MsXG4gICAgZWRpdFRvZG9zLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgY29tcGxldGVkVG9kb3MsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RmFjdG9yeTtcbiIsImNvbnN0IFNpZGViYXJQcm9qZWN0RmFjdG9yeSA9ICgpID0+IHtcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdHMgPSAoLi4ucHJvamVjdHMpID0+IHtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKC4uLnByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3RJRCkgPT4ge1xuICAgIHByb2plY3RMaXN0ID0gcHJvamVjdExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBwcm9qZWN0SUQpO1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgfTtcblxuICBjb25zdCBhbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3QubWFwKChpdGVtKSA9PiBpdGVtKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJRCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3VuZCA9IHByb2plY3RMaXN0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2plY3RJRCk7XG4gICAgcmV0dXJuIHByb2plY3RGb3VuZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RMaXN0LFxuICAgIGFkZFByb2plY3RzLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgYWxsUHJvamVjdHMsXG4gICAgZ2V0UHJvamVjdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0gU2lkZWJhclByb2plY3RGYWN0b3J5KCk7XG4iLCJjb25zdCBUb2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlZCkgPT4ge1xuICBsZXQgX3RpdGxlID0gdGl0bGU7XG4gIGxldCBfZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbGV0IF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbGV0IF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICBsZXQgX2lzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiBfdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gX2Rlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gX2R1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gX3ByaW9yaXR5O1xuICBjb25zdCBnZXRJc0NvbXBsZXRlZCA9ICgpID0+IF9pc0NvbXBsZXRlZDtcblxuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgIHJldHVybiAoX3RpdGxlID0gbmV3VGl0bGUpO1xuICB9O1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHJldHVybiAoX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24pO1xuICB9O1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICByZXR1cm4gKF9kdWVEYXRlID0gbmV3RHVlRGF0ZSk7XG4gIH07XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIChfcHJpb3JpdHkgPSBuZXdQcmlvcml0eSk7XG4gIH07XG4gIGNvbnN0IHNldElzQ29tcGxldGVkID0gKG5ld0lzQ29tcGxldGVkKSA9PiB7XG4gICAgcmV0dXJuIChfaXNDb21wbGV0ZWQgPSBuZXdJc0NvbXBsZXRlZCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldElzQ29tcGxldGVkLFxuICAgIHNldFRpdGxlLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIHNldER1ZURhdGUsXG4gICAgc2V0UHJpb3JpdHksXG4gICAgc2V0SXNDb21wbGV0ZWQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvRmFjdG9yeTtcbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcblxuICBpZiAoY2xhc3NOYW1lICYmIGNsYXNzTmFtZS50cmltKCkgIT09IFwiXCIpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9