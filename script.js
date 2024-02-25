// use get element by class name to read the html document
const accordionItems = document.getElementsByClassName("accordion-container");

// Create a for loop to loop through every element with the accordion-item class,
// we get the accordion-header element within the current accordion-item
for (let i = 0; i < accordionItems.length; i++) {
  const accordionHeader = accordionItems[i].getElementsByClassName(
    "accordion-header"
  )[0];
  console.log(accordionHeader);
  // Get the accordion-content element within the current accordion-item
  const accordionContent = accordionItems[i].getElementsByClassName(
    "accordion-content"
  )[0];
  console.log(accordionContent);

  // Add a click event listener to the accordion-header elements
  accordionHeader.addEventListener("click", function () {
    // When OPENING an accordion-item: 
    // if the accordion-content element is currently hidden 
    // the CSS is modified to make it visible
    if (accordionContent.style.display === "none") {
      // If it's hidden, show the accordion-content element
      accordionContent.style.display = "block";
     
      // Add the 'open' class to the accordion item to change the + to a -
      accordionItems[i].classList.add("open");
    } else {
      //  For when CLOSING an accordion-item: If visible, hide the content element
      // If it's visible, hide the accordion-content element
      accordionContent.style.display = "none";
      // Remove the 'open' class from the accordion item to change the - back to a +
      accordionItems[i].classList.remove("open");
    }
  });
}




// list of facts for the facts accordion
  const facts = [
    "I’m bilingual. I can speak welsh, it’s a fun language that not many people speak so it feels like a secret language",
    "I competed in cross-country running as a teenager, I’ve recently gotten back into long-distance running.",
    "I enjoy reading fiction, learning to code, running and going to the gym in my spare time.",
    "My favourite colour is green",
];

// function to generate and display random facts about me 
function randomFacts(){

//  generate random index 
  const randomIndex = Math.floor(Math.random() * facts.length)
  
// display the facts
  
 const displayFacts = document.getElementById("fact-display"); 
 
displayFacts.textContent = facts[randomIndex]
  
}; 

// create element for the end of the website 

let button = document.createElement("button");

// Set the button's text content
button.textContent = "Click Me";

// Add an event listener to the button
button.addEventListener("click", function() {
    // Display an alert when the button is clicked
    alert("Thank you for visiting!");
});

// Append the button to the document body (or any other desired parent element)
document.body.appendChild(button);