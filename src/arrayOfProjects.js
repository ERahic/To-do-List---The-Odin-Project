import { displayNewProjects } from "./generateTask.js";
import { addProjectValues } from "./addProject.js";

export let addedProjects = [];

export let addedTasks = [];

export function pushProjectValueToArray() {
  const value = addProjectValues();

  const project = {
    category: value.categoryValue,
    projectName: value.projectNameValue,
    projectDescription: value.descriptionValue,
    dateDue: value.dueDateValue,
    priority: value.priority,
  };

  addedProjects.push(project);
  console.log("Project Added To Array: ", addedProjects);
}

export function pushTaskValueToArray() {
  const value = addProjectValues();

  const task = {
    taskCategory: value.categoryValue,
    taskName: value.taskProjectNameValue,
    taskDescription: value.taskDescriptionValue,
    taskDate: value.taskDueDateValue,
    taskPriority: value.priority,
  };

  addedTasks.push(task);
  console.log("Task Added To Array: ", addedTasks);
}
