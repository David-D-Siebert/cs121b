/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "David Siebert";
let currentYear = "2023";
let profilePicture = "images/me.jpeg";

/* Step 3 - Element Variables */

let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
let imageElement = document.querySelector("img");
imageElement.setAttribute("src",profilePicture);
imageElement.setAttribute('alt',`Profile image of ${profilePicture}`);



/* Step 5 - Array */
let food = ["pizza", "pasta", "prime rib"];
let oneMoreFood = "ice cream";
food.push(oneMoreFood);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;





