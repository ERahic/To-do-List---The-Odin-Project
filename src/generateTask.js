import { domReference, addProjectBtns, addProjectValues } from "./addProject";

export const taskDomReference = {
  sidebarOptions: document.querySelector("#sidebar-options"),
  pageContainer: document.querySelector("#page-container"),
  mainSection: document.querySelector("#main-section"),
  projectContainer: document.querySelector("#project-container"),
  projectHeader: document.querySelector("#project-header"),
  sortFilterContainer: document.querySelector("#sort-filter-addTask-container"),
  sortBtn: document.querySelector(".sort-btn"),
  filterBtn: document.querySelector(".filter-btn"),
  addTaskBtn: document.querySelector(".addTask-btn"),
  task: document.querySelector(".task"),
  taskContainer: document.querySelector("#task-container"),
  checkContainer: document.querySelector("#task-check-container"),
  taskCheck: document.querySelector("#task-check"),
  check: document.querySelectorAll(".check"),
  taskGrid: document.querySelector("#task-grid"),
  taskHeader: document.querySelector("#task-header"),
  taskDescription: document.querySelector("#task-description"),
  taskDate: document.querySelector("#task-date"),
  editTaskContainer: document.querySelector("#edit-task-container"),
  editBtn: document.querySelector("#edit-btn"),
  priorityBtn: document.querySelector("#priority-btn"),
};

export function generateTasksAddProject() {
  const taskValue = addProjectValues();
  const addNewTab = newProjectTab();

  //generate div
  taskDomReference.sidebarOptions.appendChild(addNewTab.newTab);
  taskDomReference.mainSection.innerHTML = "";
  taskDomReference.projectContainer.innerHTML = "";
  taskDomReference.taskContainer.innerHTML = "";
  taskDomReference.pageContainer.appendChild(taskDomReference.mainSection);
  taskDomReference.mainSection.appendChild(taskDomReference.projectContainer);
  taskDomReference.projectHeader.innerHTML = `#${taskValue.categoryValue}`;
  taskDomReference.projectContainer.appendChild(taskDomReference.projectHeader);
  taskDomReference.projectContainer.appendChild(
    taskDomReference.sortFilterContainer
  );
  taskDomReference.sortFilterContainer.appendChild(taskDomReference.sortBtn);
  taskDomReference.sortFilterContainer.appendChild(taskDomReference.filterBtn);
  taskDomReference.sortFilterContainer.appendChild(taskDomReference.addTaskBtn);
  taskDomReference.projectContainer.appendChild(taskDomReference.task);
  taskDomReference.task.appendChild(taskDomReference.taskContainer);
  taskDomReference.taskContainer.appendChild(taskDomReference.checkContainer);
  taskDomReference.checkContainer.appendChild(taskDomReference.taskCheck);
  //taskDomReference.taskCheck.appendChild(taskDomReference.check);
  taskDomReference.taskGrid.innerHTML = "";
  setPriority();
  taskDomReference.taskContainer.appendChild(taskDomReference.taskGrid);
  taskDomReference.taskHeader.innerHTML = `${taskValue.projectNameValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskHeader);
  taskDomReference.taskDescription.innerHTML = `${taskValue.descriptionValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskDescription);
  taskDomReference.taskDate.innerHTML = `${taskValue.dueDateValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskDate);
  taskDomReference.taskContainer.appendChild(
    taskDomReference.editTaskContainer
  );
  taskDomReference.editTaskContainer.appendChild(taskDomReference.editBtn);
  taskDomReference.editTaskContainer.appendChild(taskDomReference.priorityBtn);
}

export function generateTasksAddTask() {
  const taskValue = addProjectValues();

  taskDomReference.projectContainer.appendChild(taskDomReference.task);
  taskDomReference.task.appendChild(taskDomReference.taskContainer);
  taskDomReference.taskContainer.appendChild(taskDomReference.checkContainer);
  taskDomReference.checkContainer.appendChild(taskDomReference.taskCheck);
  taskDomReference.taskGrid.innerHTML = "";
  setPriority();
  taskDomReference.taskContainer.appendChild(taskDomReference.taskGrid);
  taskDomReference.taskHeader.innerHTML = `${taskValue.taskProjectNameValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskHeader);
  taskDomReference.taskDescription.innerHTML = `${taskValue.taskDescriptionValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskDescription);
  taskDomReference.taskDate.innerHTML = `${taskValue.taskDueDateValue}`;
  taskDomReference.taskGrid.appendChild(taskDomReference.taskDate);
  taskDomReference.taskContainer.appendChild(
    taskDomReference.editTaskContainer
  );
  taskDomReference.editTaskContainer.appendChild(taskDomReference.editBtn);
  taskDomReference.editTaskContainer.appendChild(taskDomReference.priorityBtn);
}

export function setPriority() {
  const priorityValue = addProjectValues();
  if (priorityValue.priority === "High") {
    taskDomReference.taskContainer.style.borderRight = "solid 40px red";
  } else if (priorityValue.priority === "Medium") {
    taskDomReference.taskContainer.style.borderRight = "solid 40px yellow";
  } else if (priorityValue.priority === "Low") {
    taskDomReference.taskContainer.style.borderRight = "solid 40px green";
  }
}

export function newProjectTab() {
  const value = addProjectValues();
  const newTab = document.createElement("div");
  newTab.classList.add(`new-tab`);
  newTab.innerHTML = `#${value.categoryValue}`;

  return { newTab };
}

export function deleteTask() {
  taskDomReference.check.forEach((check) => {
    check.addEventListener("click", function () {
      console.log("Task Cleared");
      check.parentElement.parentElement.parentElement.remove();
    });
  });
}
