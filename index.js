  // Ask the user for their first name
  let fname = prompt("Please enter your first name:");

  // Check if the user entered a name
  if (fname) {
      // Display a welcome message containing their name
      alert(`Welcome, ${fname}!`);
  } else {
      // Handle the case where no name is entered
      alert("Welcome, guest!");
  }

  
// Ask the user for their favorite number (radius)
let myFavNum = prompt("What is your favorite number?");

// Check if the input is valid
if (myFavNum && !isNaN(myFavNum)) {
    // Convert the input to a number
    let radius = parseFloat(myFavNum);

    // Define the value of PI
    const piValue = 3.141593;

    // Calculate the area of the circle and store it in myArea
    let myArea = piValue * radius * radius;

    // Display the result
    alert(`The area of a circle with radius ${radius} is ${myArea.toFixed(2)}.`);
    console.log(`The area of a circle with radius ${radius} is ${myArea.toFixed(2)}.`);
} else {
    alert("Please enter a valid number for the radius.");
    console.log("Invalid input for the radius.");
}


