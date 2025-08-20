import {
  domReference,
  addProjectBtns,
  addProjectValues,
} from "./src/addProject";

export const taskDomReference = {
  pageContainer: document.querySelector("#page-container"),
  mainSection: document.querySelector("#main-section"),
  projectContainer: document.querySelector("#project-container"),
  projectHeader: document.querySelector("#project-header"),
  sortFilterContainer: document.querySelector("#sort-filter-container"),
  sortBtn: document.querySelector(".sort-btn"),
  filterBtn: document.querySelector(".filter-btn"),
  task: document.querySelector(".task"),
  taskContainer: document.querySelector("#task-container"),
  checkContainer: document.querySelector("#task-check-container"),
  taskCheck: document.querySelector("#task-check"),
  check: document.querySelector("#check"),
  taskGrid: document.querySelector("#task-grid"),
  taskHeader: document.querySelector("#task-header"),
  taskDescription: document.querySelector("#task-description"),
  taskDate: document.querySelector("#task-date"),
  editTaskContainer: document.querySelector("#edit-task-container"),
  editBtn: document.querySelector("#edit-btn"),
  priorityBtn: document.querySelector("#priority-btn"),
};

export function generateTasks() {
  const taskValue = addProjectValues();

  //generate div
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
  taskDomReference.projectContainer.appendChild(taskDomReference.task);
  taskDomReference.task.appendChild(taskDomReference.taskContainer);
  taskDomReference.taskContainer.appendChild(taskDomReference.checkContainer);
  taskDomReference.checkContainer.appendChild(taskDomReference.taskCheck);
  taskDomReference.taskCheck.appendChild(taskDomReference.check);
  taskDomReference.taskGrid.innerHTML = "";
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

export function setPriority() {
  const priorityValue = addProjectValues();
}
