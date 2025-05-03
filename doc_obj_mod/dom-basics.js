// NOTE: Figure out how to add to preexisting HTML later.
// const nameOnTitle = document.createElement("p");
// h1.appendChild(nameOnTitle);

// Step 1; Adding Text with JS
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

// Step 2; adding image with JS.
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

// Step 3; Adding more complex HTML strings
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4 - New Section Element
const newSection = document.createElement("section");

const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics.";
newSection.appendChild(newH2);

const newP = document.createElement("p");
newP.innerText = "This was added through javaScript.";
document.body.appendChild(newP);

document.body.appendChild(newSection);
