import { displayNewProjects } from "./generateTask.js";
import { addProjectValues } from "./addProject.js";

export let addedProjects = [];

export let addedTasks = [];

export function pushProjectValueToArray() {
  const value = addProjectValues();

  const project = {
    id: crypto.randomUUID(),
    category: value.categoryValue,
    projectName: value.projectNameValue,
    projectDescription: value.descriptionValue,
    dateDue: value.dueDateValue,
    priority: value.priority,
  };

  addedProjects.push(project);
  console.log("Project Added To Array: ", addedProjects);

  return project.id;
}

export function pushTaskValueToArray(projectId) {
  const value = addProjectValues();
  const project = addedProjects.find((project) => project.id === projectId);

  const task = {
    projectId: projectId,
    taskId: crypto.randomUUID(),
    taskCategory: project.category,
    taskName: value.taskProjectNameValue,
    taskDescription: value.taskDescriptionValue,
    taskDate: value.taskDueDateValue,
    taskPriority: value.taskPriority,
  };

  addedTasks.push(task);
  console.log("Task Added To Array: ", addedTasks);
  return task;
}
