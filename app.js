// get elements by ID and class. It takes only one element. if there are multiple elements with the same class name, it will return the first one. 
const abt = document.getElementById("about");
console.log(abt);

// get elements by querySelector. it takes only one element. if there are multiple elements with the same class name, it will return the first one.
const abt1 = document.querySelector("#about"); // by id
console.log(abt1);
const projects = document.querySelector(".projects-container"); // by class
console.log(projects);
const h1 = document.querySelector("h1"); // by tag
console.log(h1);

// get elements by querySelectorAll. it takes all the elements with the same class name and returns a NodeList.
const btn = document.querySelectorAll(".btn");
console.log(btn);
btn.forEach(card => { // it will loop through all the elements with the class name "btn"
    console.log(card); // it will log all the elements with the class name "btn"
});


// Updating content
//it is used to update the content of an element. it can be used to update the text content or the HTML content of an element.
const aboutTitle = document.querySelector("h1");
aboutTitle.textContent = "Welcome to My Portfolio, About Me"; // it will update the text content of the h1 element
aboutTitle.innerHTML = "Welcome to <span>My Portfolio</span>, About Me"; // it will update the HTML content of the h1 element
aboutTitle.style.color = "blue"; // it will update the color of the h1 element

// Reading Input Values
// it is used to read the value of an input element. it can be used to read the value of a text input, a checkbox, a radio button, or a select element.
const nameInput = document.querySelector("#name");
const nameValue = nameInput.value; // it will read the value of the input element with the id "name"
console.log(nameValue); // it will log the value of the input element with the id "name"


// Event Listeners
// it is used to add an event listener to an element. it can be used to listen for events such as click, mouseover, keydown, etc.
const name1 = document.querySelector("#name");
name1.addEventListener("input", () => {
    const nameValue = name1.value; // it will read the value of the input element with the id "name"
    console.log(nameValue); // it will log the value of the input element with the id "name"
});

const submitBtn = document.querySelector(".btnSubmit");
submitBtn.addEventListener("click", () => {
    console.log("Form submitted"); // it will log "Form submitted" when the button is clicked
});

const projectsBtn = document.querySelector(".prjbtn"); // it will get the element with the class name "prjbtn"
projectsBtn.addEventListener("click", () => {
    const projectsSection = document.querySelector(".projects-container"); // it will get the element with the class name "projects-container"
    projectsSection.scrollIntoView({ behavior: "smooth" }); // it will scroll to the projects section when the button is clicked
});