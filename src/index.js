import "./styles.css";

const domReference = (function () {
  const addProject = document.querySelector(".add-project-tab");
  const projectBox = document.querySelector(".add-new-project-section");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");
  return { addProject, projectBox, cancelBtn, submitBtn };
})();

(function () {
  domReference.addProject.addEventListener("click", function () {
    domReference.projectBox.classList.remove("hidden");
  });

  domReference.cancelBtn.addEventListener("click", function () {
    domReference.projectBox.classList.add("hidden");
  });

  domReference.submitBtn.addEventListener("click", function () {
    domReference.projectBox.classList.add("hidden");
  });
})();
