import "./styles.css";
import {
  displayNewProjects,
  generateTasksAddProject,
  displayNewTasks,
  taskDomReference,
  addNewTabToSidebar,
} from "./generateTask";
import {
  pushProjectValueToArray,
  pushTaskValueToArray,
} from "./arrayOfProjects";

export const domReference = {
  // add project
  addProjectTab: document.querySelector(".add-project-tab"),
  projectContainer: document.getElementById("add-project-section"),
  newProjectForm: document.getElementById("new-project-form"),
  categoryInput: document.querySelector("#project-category-input"),
  projectNameInput: document.querySelector("#project-name-input"),
  descriptionInput: document.querySelector("#project-description-input"),
  dueDateInput: document.querySelector("#project-date-input"),
  priorityHigh: document.querySelector("#high-priority"),
  priorityMed: document.querySelector("#med-priority"),
  priorityLow: document.querySelector("#low-priority"),
  addProjectSubmitBtn: document.querySelector(".add-project-submit-btn"),
  addProjectCancelBtn: document.querySelector(".add-project-cancel-btn"),
  // add task
  addTaskBtn: document.querySelector(".addTask-btn"),
  addTaskContainer: document.getElementById("add-task-section"),
  addTaskForm: document.getElementById("add-task-form"),
  taskProjectNameInput: document.querySelector("#task-name-input"),
  taskProjectDescriptionInput: document.querySelector(
    "#task-description-input"
  ),
  taskDueDateInput: document.querySelector("#task-date-input"),
  taskPriorityHigh: document.querySelector("#task-high-priority"),
  taskPriorityMed: document.querySelector("#task-med-priority"),
  taskPriorityLow: document.querySelector("#task-low-priority"),
  addTaskCancelBtn: document.querySelector(".add-task-cancel-btn"),
  addTaskSubmitBtn: document.querySelector(".add-task-submit-btn"),
};

export function addProjectBtns() {
  //add project
  domReference.addProjectTab.addEventListener("click", function () {
    domReference.projectContainer.classList.remove("hidden");
    console.log(`New Project Added`);
  });

  //add project cancel
  domReference.addProjectCancelBtn.addEventListener("click", function (e) {
    e.preventDefault();
    domReference.projectContainer.classList.add("hidden");
    console.log(`Cancel button clicked`);
    domReference.newProjectForm.reset();
  });

  //add project submit
  domReference.addProjectSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const value = addProjectValues();
    const projectId = pushProjectValueToArray();
    domReference.projectContainer.classList.add("hidden");
    console.log(`Submit button clicked`);
    console.log(`New Project:
      Category: ${value.categoryValue}
      Project Name: ${value.projectNameValue}
      Description: ${value.descriptionValue}
      Due Date: ${value.dueDateValue}
      Priority: ${value.priority}
      ID: ${projectId}`);
    // displayNewProjects();
    // pushProjectValueToArray();
    addNewTabToSidebar(projectId);
    domReference.newProjectForm.reset();
  });

  //add task
  domReference.addTaskBtn.addEventListener("click", function () {
    domReference.addTaskContainer.classList.remove("hidden");
    console.log("Add a new task");
  });

  //add task cancel
  domReference.addTaskCancelBtn.addEventListener("click", function (e) {
    e.preventDefault();
    domReference.addTaskContainer.classList.add("hidden");
    console.log("Cancel button clicked");
    domReference.addTaskForm.reset();
  });

  //add task submit
  domReference.addTaskSubmitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const value = addProjectValues();
    domReference.addTaskContainer.classList.add("hidden");
    console.log("Submit button clicked");
    console.log("New Task Added");
    console.log(`
      Project Name: ${value.taskProjectNameValue}
      Description: ${value.taskDescriptionValue}
      Due Date: ${value.taskDueDateValue}
      Priority: ${value.priority}`);
    const projectId = domReference.addTaskContainer.dataset.projectId;
    pushTaskValueToArray(projectId);
    displayNewTasks(projectId);
    domReference.addTaskForm.reset();
  });
}

export function addProjectValues() {
  //add project
  const categoryValue = domReference.categoryInput.value.trim();
  const projectNameValue = domReference.projectNameInput.value.trim();
  const descriptionValue = domReference.descriptionInput.value.trim();
  const dueDateValue = domReference.dueDateInput.value.trim();

  //add task
  const taskProjectNameValue = domReference.taskProjectNameInput.value.trim();
  const taskDescriptionValue =
    domReference.taskProjectDescriptionInput.value.trim();
  const taskDueDateValue = domReference.taskDueDateInput.value.trim();

  // add project
  let priority = null;
  if (domReference.priorityHigh.checked) {
    priority = domReference.priorityHigh.value;
  } else if (domReference.priorityMed.checked) {
    priority = domReference.priorityMed.value;
  } else if (domReference.priorityLow.checked) {
    priority = domReference.priorityLow.value;
  }

  //add task
  if (domReference.taskPriorityHigh.checked) {
    priority = domReference.taskPriorityHigh.value;
  } else if (domReference.taskPriorityMed.checked) {
    priority = domReference.taskPriorityMed.value;
  } else if (domReference.taskPriorityLow.checked) {
    priority = domReference.taskPriorityLow.value;
  }

  return {
    categoryValue,
    projectNameValue,
    descriptionValue,
    dueDateValue,
    priority,
    taskProjectNameValue,
    taskDescriptionValue,
    taskDueDateValue,
  };
}
