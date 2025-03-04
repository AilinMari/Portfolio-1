// bildekarusell
let currentIndex = 0;

function changeElement(direction) {
  const elements = document.querySelectorAll(".logo-letters h2");
  const totalElements = elements.length;
  elements[currentIndex].classList.remove("visible");
  currentIndex = (currentIndex + direction + totalElements) % totalElements;
  elements[currentIndex].classList.add("visible");
}

// Initialize the first element
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".logo-letters h2").forEach((element, index) => {
    element.classList.add("fade");
    if (index === 0) {
      element.classList.add("visible");
    }
  });

  // Change element every 2 seconds automatically
  setInterval(() => changeElement(1), 1500);

  // Handle click events for grid-projects on small screens
  const gridProjects = document.querySelectorAll(".grid-projects");
  gridProjects.forEach((project) => {
    project.addEventListener("click", () => {
      if (window.innerWidth <= 1000) {
        // Remove active class from all other projects
        gridProjects.forEach((p) => p.classList.remove("active"));
        // Toggle active class on the clicked project
        project.classList.toggle("active");
      }
    });
  });
});
