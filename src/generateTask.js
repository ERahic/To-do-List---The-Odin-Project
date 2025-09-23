import { domReference, addProjectBtns, addProjectValues } from "./addProject";
import { addedProjects, addedTasks } from "./arrayOfProjects";

export const taskDomReference = {
  sidebarOptions: document.querySelector("#sidebar-options"),
  pageContainer: document.querySelector("#page-container"),
  mainSection: document.querySelector("#main-section"),
  projectContainer: document.querySelector("#project-container"),
  projectHeader: document.querySelector(".project-header"),
  sortFilterContainer: document.querySelector("#sort-filter-addTask-container"),
  sortBtn: document.querySelector(".sort-btn"),
  filterBtn: document.querySelector(".filter-btn"),
  addTaskBtn: document.querySelector(".addTask-btn"),
  task: document.querySelector(".task"),
  taskContainer: document.querySelector(".task-container"),
  checkContainer: document.querySelector(".task-check-container"),
  taskCheck: document.querySelector(".task-check"),
  check: document.querySelectorAll(".check"),
  taskGrid: document.querySelector(".task-grid"),
  taskHeader: document.querySelector(".task-header"),
  taskDescription: document.querySelector(".task-description"),
  taskDate: document.querySelector(".task-date"),
  editTaskContainer: document.querySelector(".edit-task-container"),
  editBtn: document.querySelector(".edit-btn"),
  priorityBtn: document.querySelector(".priority-btn"),
};

export function generateProjectDivs(newProjectId) {
  const taskValue = addProjectValues();

  const newProject = addedProjects.find(
    (project) => project.id === newProjectId
  );

  // taskDomReference.mainSection.innerHTML = "";
  // taskDomReference.projectContainer.innerHTML = "";
  // taskDomReference.taskContainer.innerHTML = "";
  // taskDomReference.pageContainer.appendChild(taskDomReference.mainSection);
  // taskDomReference.mainSection.appendChild(taskDomReference.projectContainer);
  // taskDomReference.projectHeader.innerHTML = `#${taskValue.categoryValue}`;
  // taskDomReference.projectContainer.appendChild(taskDomReference.projectHeader);
  // taskDomReference.projectContainer.appendChild(
  //   taskDomReference.sortFilterContainer
  // );
  // taskDomReference.sortFilterContainer.appendChild(taskDomReference.sortBtn);
  // taskDomReference.sortFilterContainer.appendChild(taskDomReference.filterBtn);
  // taskDomReference.sortFilterContainer.appendChild(taskDomReference.addTaskBtn);
  // taskDomReference.projectContainer.appendChild(taskDomReference.task);
  // taskDomReference.task.appendChild(taskDomReference.taskContainer);
  // taskDomReference.taskContainer.appendChild(taskDomReference.checkContainer);
  // taskDomReference.checkContainer.appendChild(taskDomReference.taskCheck);
  // //taskDomReference.taskCheck.appendChild(taskDomReference.check);
  // taskDomReference.taskGrid.innerHTML = "";
  // setPriority();
  // taskDomReference.taskContainer.appendChild(taskDomReference.taskGrid);
  // taskDomReference.taskHeader.innerHTML = `${taskValue.projectNameValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskHeader);
  // taskDomReference.taskDescription.innerHTML = `${taskValue.descriptionValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskDescription);
  // taskDomReference.taskDate.innerHTML = `${taskValue.dueDateValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskDate);
  // taskDomReference.taskContainer.appendChild(
  //   taskDomReference.editTaskContainer
  // );
  // taskDomReference.editTaskContainer.appendChild(taskDomReference.editBtn);
  // taskDomReference.editTaskContainer.appendChild(taskDomReference.priorityBtn);

  // create divs
  const projectHeader = document.createElement("h1");
  projectHeader.classList.add("project-header");
  projectHeader.innerHTML = `#${newProject.category}`;

  const task = document.createElement("div");
  task.classList.add("task");

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  const taskCheckContainer = document.createElement("div");
  taskCheckContainer.classList.add("task-check-container");

  const taskCheck = document.createElement("div");
  taskCheck.classList.add("task-check");

  const check = document.createElement("div");
  check.classList.add("check");
  check.addEventListener("click", function () {
    console.log("Task Cleared");
    check.parentElement.parentElement.parentElement.remove();
  });

  const taskGrid = document.createElement("div");
  taskGrid.classList.add("task-grid");

  const taskHeader = document.createElement("h1");
  taskHeader.classList.add("task-header");
  taskHeader.innerHTML = `${newProject.projectName}`;

  const taskDescription = document.createElement("div");
  taskDescription.classList.add("task-description");
  taskDescription.innerHTML = `${newProject.projectDescription}`;

  const taskDate = document.createElement("div");
  taskDate.classList.add("task-date");
  taskDate.innerHTML = `${newProject.dateDue}`;

  const editTaskContainer = document.createElement("div");
  editTaskContainer.classList.add("edit-task-container");

  const editBtn = document.createElement("div");
  editBtn.classList.add("edit-btn");
  editBtn.innerHTML = "✏";

  const priorityBtn = document.createElement("div");
  priorityBtn.classList.add("priority-btn");
  priorityBtn.innerHTML = "‼";

  return {
    projectHeader,
    task,
    taskContainer,
    taskCheckContainer,
    taskCheck,
    check,
    taskGrid,
    taskHeader,
    taskDescription,
    taskDate,
    editTaskContainer,
    editBtn,
    priorityBtn,
  };
}

export function generateTaskDivs(task) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.dataset.taskId = task.taskId;
  newTask.dataset.projectId = task.projectId;

  const newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("task-container");

  const newTaskCheckContainer = document.createElement("div");
  newTaskCheckContainer.classList.add("task-check-container");

  const newTaskCheck = document.createElement("div");
  newTaskCheck.classList.add("task-check");

  const newCheck = document.createElement("div");
  newCheck.classList.add("check");
  newCheck.addEventListener("click", function () {
    console.log("Task Cleared");
    newCheck.parentElement.parentElement.parentElement.remove();
  });

  const newTaskGrid = document.createElement("div");
  newTaskGrid.classList.add("task-grid");

  const newTaskHeader = document.createElement("h1");
  newTaskHeader.classList.add("task-header");
  newTaskHeader.innerHTML = `${task.taskName}`;

  const newTaskDescription = document.createElement("div");
  newTaskDescription.classList.add("task-description");
  newTaskDescription.innerHTML = `${task.taskDescription}`;

  const newTaskDate = document.createElement("div");
  newTaskDate.classList.add("task-date");
  newTaskDate.innerHTML = `${task.taskDate}`;

  const newEditTaskContainer = document.createElement("div");
  newEditTaskContainer.classList.add("edit-task-container");

  const newEditBtn = document.createElement("div");
  newEditBtn.classList.add("edit-btn");
  newEditBtn.innerHTML = "✏";

  const newPriorityBtn = document.createElement("div");
  newPriorityBtn.classList.add("priority-btn");
  newPriorityBtn.innerHTML = "‼";

  return {
    newTask,
    newTaskContainer,
    newTaskCheckContainer,
    newTaskCheck,
    newCheck,
    newTaskGrid,
    newTaskHeader,
    newTaskDescription,
    newTaskDate,
    newEditTaskContainer,
    newEditBtn,
    newPriorityBtn,
  };
  // taskDomReference.projectContainer.appendChild(divs.task);
  // divs.task.appendChild(divs.taskContainer);
  // divs.taskContainer.appendChild(divs.taskCheckContainer);
  // divs.taskCheckContainer.appendChild(divs.taskCheck);
  // divs.taskCheck.appendChild(divs.check);
  // divs.taskContainer.appendChild(divs.taskGrid);
  // divs.taskGrid.appendChild(divs.taskHeader);
  // divs.taskHeader.innerHTML = `${taskValue.taskProjectNameValue}`;
  // divs.taskGrid.appendChild(divs.taskDescription);
  // divs.taskDescription.innerHTML = `${taskValue.taskDescriptionValue}`;
  // divs.taskGrid.appendChild(divs.taskDate);
  // divs.taskDate.innerHTML = `${taskValue.taskDueDateValue}`;
  // setPriority(divs.taskContainer, newProjectId);
  // divs.taskContainer.appendChild(divs.editTaskContainer);
  // divs.editTaskContainer.appendChild(divs.editBtn);
  // divs.editTaskContainer.appendChild(divs.priorityBtn);
}

export function displayNewProjects(newProjectId) {
  const generatedProjects = generateProjectDivs(newProjectId);

  //new project category on sidebar
  // const addNewTab = newProjectTab();
  // taskDomReference.sidebarOptions.appendChild(addNewTab.newTab);
  //display project onto main section
  taskDomReference.mainSection.innerHTML = "";
  taskDomReference.projectContainer.innerHTML = "";
  taskDomReference.taskContainer.innerHTML = "";
  taskDomReference.pageContainer.appendChild(taskDomReference.mainSection);
  taskDomReference.mainSection.appendChild(taskDomReference.projectContainer);
  taskDomReference.projectContainer.appendChild(
    generatedProjects.projectHeader
  );
  taskDomReference.projectContainer.appendChild(
    taskDomReference.sortFilterContainer
  );
  taskDomReference.projectContainer.appendChild(generatedProjects.task);
  generatedProjects.task.appendChild(generatedProjects.taskContainer);
  generatedProjects.taskContainer.appendChild(
    generatedProjects.taskCheckContainer
  );
  generatedProjects.taskCheckContainer.appendChild(generatedProjects.taskCheck);
  generatedProjects.taskCheck.appendChild(generatedProjects.check);
  generatedProjects.taskContainer.appendChild(generatedProjects.taskGrid);
  generatedProjects.taskGrid.appendChild(generatedProjects.taskHeader);
  generatedProjects.taskGrid.appendChild(generatedProjects.taskDescription);
  generatedProjects.taskGrid.appendChild(generatedProjects.taskDate);
  setPriority(generatedProjects.taskContainer, newProjectId);
  generatedProjects.taskContainer.appendChild(
    generatedProjects.editTaskContainer
  );
  generatedProjects.editTaskContainer.appendChild(generatedProjects.editBtn);
  generatedProjects.editTaskContainer.appendChild(
    generatedProjects.priorityBtn
  );
}

export function displayNewTasks(projectId) {
  const taskValue = addProjectValues();

  const tasksRelatedToProject = addedTasks.filter(
    (task) => task.projectId === projectId
  );

  tasksRelatedToProject.forEach((task) => {
    const divs = generateTaskDivs(task);
    taskDomReference.projectContainer.appendChild(divs.newTask);
    divs.newTask.appendChild(divs.newTaskContainer);
    divs.newTaskContainer.appendChild(divs.newTaskCheckContainer);
    divs.newTaskCheckContainer.appendChild(divs.newTaskCheck);
    divs.newTaskCheck.appendChild(divs.newCheck);
    divs.newTaskContainer.appendChild(divs.newTaskGrid);
    divs.newTaskGrid.appendChild(divs.newTaskHeader);
    divs.newTaskHeader.innerHTML = `${task.taskName}`;
    divs.newTaskGrid.appendChild(divs.newTaskDescription);
    divs.newTaskDescription.innerHTML = `${task.taskDescription}`;
    divs.newTaskGrid.appendChild(divs.newTaskDate);
    divs.newTaskDate.innerHTML = `${task.taskDate}`;
    setPriority(divs.newTaskContainer, projectId);
    divs.newTaskContainer.appendChild(divs.newEditTaskContainer);
    divs.newEditTaskContainer.appendChild(divs.newEditBtn);
    divs.newEditTaskContainer.appendChild(divs.newPriorityBtn);
  });

  // taskDomReference.projectContainer.appendChild(taskDomReference.task);
  // taskDomReference.task.appendChild(taskDomReference.taskContainer);
  // taskDomReference.taskContainer.appendChild(taskDomReference.checkContainer);
  // taskDomReference.checkContainer.appendChild(taskDomReference.taskCheck);
  // taskDomReference.taskGrid.innerHTML = "";
  // setPriority();
  // taskDomReference.taskContainer.appendChild(taskDomReference.taskGrid);
  // taskDomReference.taskHeader.innerHTML = `${taskValue.taskProjectNameValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskHeader);
  // taskDomReference.taskDescription.innerHTML = `${taskValue.taskDescriptionValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskDescription);
  // taskDomReference.taskDate.innerHTML = `${taskValue.taskDueDateValue}`;
  // taskDomReference.taskGrid.appendChild(taskDomReference.taskDate);
  // taskDomReference.taskContainer.appendChild(
  //   taskDomReference.editTaskContainer
  // );
  // taskDomReference.editTaskContainer.appendChild(taskDomReference.editBtn);
  // taskDomReference.editTaskContainer.appendChild(taskDomReference.priorityBtn);

  // const divs = generateTaskDivs();
  // taskDomReference.projectContainer.appendChild(divs.newTask);
  // divs.newTask.appendChild(divs.newTaskContainer);
  // divs.newTaskContainer.appendChild(divs.newTaskCheckContainer);
  // divs.newTaskCheckContainer.appendChild(divs.newTaskCheck);
  // divs.newTaskCheck.appendChild(divs.newCheck);
  // divs.newTaskContainer.appendChild(divs.newTaskGrid);
  // divs.newTaskGrid.appendChild(divs.newTaskHeader);
  // divs.newTaskHeader.innerHTML = `${taskValue.taskProjectNameValue}`;
  // divs.newTaskGrid.appendChild(divs.taskDescription);
  // divs.newTaskDescription.innerHTML = `${taskValue.taskDescriptionValue}`;
  // divs.newTaskGrid.appendChild(divs.newTaskDate);
  // divs.newTaskDate.innerHTML = `${taskValue.taskDueDateValue}`;
  // setPriority(divs.newTaskContainer, newProjectId);
  // divs.newTaskContainer.appendChild(divs.newEditTaskContainer);
  // divs.newEditTaskContainer.appendChild(divs.newEditBtn);
  // divs.newEditTaskContainer.appendChild(divs.newPriorityBtn);
}

export function setPriority(taskContainer, newProjectId) {
  const priorityValue = addProjectValues();
  const newProject = addedProjects.find(
    (project) => project.id === newProjectId
  );

  if (newProject.priority === "High") {
    taskContainer.style.borderRight = "40px solid red";
  } else if (newProject.priority === "Medium") {
    taskContainer.style.borderRight = "40px solid yellow";
  } else if (newProject.priority === "Low") {
    taskContainer.style.borderRight = "40px solid green";
  }
}

export function newProjectTab(newProjectId) {
  const value = addProjectValues();
  const newProject = addedProjects.find(
    (project) => project.id === newProjectId
  );
  const newTab = document.createElement("div");
  newTab.classList.add(`new-tab`);
  newTab.innerHTML = `#${newProject.category}`;
  newTab.dataset.id = newProjectId;
  newTab.dataset.category = newProject.category;

  newTab.addEventListener("click", function (e) {
    const tabClicked = e.currentTarget.dataset.category;
    const tabClickID = e.currentTarget.dataset.id;
    console.log("Clicked Tab:", tabClicked, "\n", "ID:", tabClickID);
    domReference.addTaskContainer.dataset.projectId = tabClickID;
    displayNewProjects(newProjectId);
    displayNewTasks(newProjectId);
  });

  return { newTab };
}

export function addNewTabToSidebar(newProjectId) {
  const { newTab } = newProjectTab(newProjectId);
  taskDomReference.sidebarOptions.appendChild(newTab);
  displayNewProjects(newProjectId);
}

export function deleteDefaultTask() {
  taskDomReference.check.forEach((check) => {
    check.addEventListener("click", function () {
      console.log("Task Cleared");
      check.parentElement.parentElement.parentElement.remove();
    });
  });
}
