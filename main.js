// Cache pre element reference
const pre = document.querySelector("pre");

// Debounce mousemove events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add debounced event listener to track mouse move
pre.addEventListener("mousemove", debounce((e) => {
    // Call rotateElement function
    rotateElement(e, pre);
}, 10));

// Function to rotate element
function rotateElement(event, element) { 
    // Get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // Find middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // Get offset from the middle
    const offsetX = ((x - middleX) / middleX * 100);
    const offsetY = ((y - middleY) / middleY * 100);

    // Use CSS variables to set rotation
    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", -1 * offsetX + "deg");
}
