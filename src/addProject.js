import "./styles.css";
import { generateTasks, taskDomReference } from "./generateTask";

export const domReference = {
  addProjectTab: document.querySelector(".add-project-tab"),
  projectContainer: document.getElementById("add-project-section"),
  newProjectForm: document.getElementById("new-project-form"),
  categoryInput: document.querySelector("#category-input"),
  projectNameInput: document.querySelector("#name-input"),
  descriptionInput: document.querySelector("#description-input"),
  dueDateInput: document.querySelector("#date-input"),
  priorityHigh: document.querySelector("#high-priority"),
  priorityMed: document.querySelector("#med-priority"),
  priorityLow: document.querySelector("#low-priority"),
  addProjectSubmitBtn: document.querySelector(".add-project-submit-btn"),
  addProjectCancelBtn: document.querySelector(".add-project-cancel-btn"),
  addTaskBtn: document.querySelector(".addTask-btn"),
  addTaskContainer: document.getElementById("add-task-section"),
  addTaskForm: document.getElementById("add-task-form"),
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
    domReference.projectContainer.classList.add("hidden");
    console.log(`Submit button clicked`);
    console.log(`New Project:
      Category: ${value.categoryValue}
      Project Name: ${value.projectNameValue}
      Description: ${value.descriptionValue}
      Due Date: ${value.dueDateValue}
      Priority: ${value.priority}`);
    generateTasks();
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
    console.log(`
      Project Name: ${value.projectNameValue}
      Description: ${value.descriptionValue}
      Due Date: ${value.dueDateValue}
      Priority: ${value.priority}`);
    domReference.addTaskForm.reset();
  });
}

export function addProjectValues() {
  const categoryValue = domReference.categoryInput.value.trim();
  const projectNameValue = domReference.projectNameInput.value.trim();
  const descriptionValue = domReference.descriptionInput.value.trim();
  const dueDateValue = domReference.dueDateInput.value.trim();

  let priority = null;
  if (domReference.priorityHigh.checked) {
    priority = domReference.priorityHigh.value;
  } else if (domReference.priorityMed.checked) {
    priority = domReference.priorityMed.value;
  } else if (domReference.priorityLow.checked) {
    priority = domReference.priorityLow.value;
  }

  return {
    categoryValue,
    projectNameValue,
    descriptionValue,
    dueDateValue,
    priority,
  };
}
