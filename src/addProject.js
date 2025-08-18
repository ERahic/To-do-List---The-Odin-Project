import "./styles.css";

export const domReference = {
  addProjectTab: document.querySelector(".add-project-tab"),
  projectContainer: document.querySelector(".add-new-project-section"),
  categoryInput: document.querySelector("#category-input"),
  projectNameInput: document.querySelector("#name-input"),
  descriptionInput: document.querySelector("#description-input"),
  dueDateInput: document.querySelector("#date-input"),
  priorityHigh: document.querySelector("#high-priority"),
  priorityMed: document.querySelector("#med-priority"),
  priorityLow: document.querySelector("#low-priority"),
  submitBtn: document.querySelector(".submit-btn"),
  cancelBtn: document.querySelector(".cancel-btn"),
};

export function addProjectBtns() {
  //add project
  domReference.addProjectTab.addEventListener("click", function () {
    domReference.projectContainer.classList.remove("hidden");
    console.log(`New Project Added`);
  });

  //cancel
  domReference.cancelBtn.addEventListener("click", function () {
    domReference.projectContainer.classList.add("hidden");
    console.log(`Cancel button clicked`);
  });

  //submit
  domReference.submitBtn.addEventListener("click", function () {
    const value = addProjectValues();
    domReference.projectContainer.classList.add("hidden");
    console.log(`Submit button clicked`);
    console.log(`New Project:
      Category: ${value.categoryValue}
      Project Name: ${value.projectNameValue}
      Description: ${value.descriptionValue}
      Due Date: ${value.dueDateValue}
      Priority: ${value.priority}`);
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
