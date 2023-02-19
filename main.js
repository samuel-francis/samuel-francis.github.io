// manipulate pre
const pre = document.querySelector("pre");

// add event listener to track mouse move
pre.addEventListener("mousemove", (e) => {
    // call rotateElement function
    rotateElement(e, pre);
});

// function to rotate element
function rotateElement(event, element) { 
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    //find middle of the page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    //get offset from the middle
    const offsetX = ((x - middleX)/ middleX * 100);
    const offsetY = ((y - middleY)/ middleY * 100);
    // console.log(offsetX, offsetY);

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", -1 * offsetX + "deg");
}
