// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Functions           */
/***********************/

// ----------------------------------------------------------------------------------------------
// Exercise One 
// - Return the number 5 from this function.
//
// Write your code here 👇

// Fixed code:

function getNumberFive() {
  return 5;
}

console.log(getNumberFive());
  // Your code here


// ----------------------------------------------------------------------------------------------
// Exercise Two
// - Complete the function named "add" that takes the two parameters (a and b), adds them 
//   together, and returns their sum.
// - For example, calling add(2, 4) should return a result of 6.
//
// Write your code here 👇

function addNumbers(param1, param2) {
  return param1 + param2;
}
let result = addNumbers(5, 7);
console.log(result); // Output: 12

// ----------------------------------------------------------------------------------------------
// Exercise Three
// - Complete the function named "multiply" that takes the three parameters (x, y, and z),
//   multiplies them together, and returns their product.  
// - For example, calling multiply(4, 5, 6) should return a result of 120. 
//
// Write your code here 👇

function multiply(x, y, z) {
  // Multiply the three parameters together
  let product = x * y * z;

  // Return the product
  return product;
}
console.log(multiply(2, 3, 4)); // Output: 24
console.log(multiply(5, 5, 5)); // Output: 125



// Output: 12
  // Your code here


// ----------------------------------------------------------------------------------------------
// Exercise Four
// - Complete the function named "concatenate" that takes two parameters (message and text).  
// - Add the text to the end of the message, and then return the complete string.
//
// Write your code here 👇


function concatenate(message, text) {
  return message + text;
}
console.log(concatenate("Hello", " World")); // Output: "Hello World"


// ----------------------------------------------------------------------------------------------
// Exercise Five
// - Complete the function named "areaOfTriangle" that accepts two parameters
//   (base and height). The function will calculate the area of a triangle where "base"
//   is the length of the triangle's base and "height" is the length of the triangle's
//   height.
// - The area of a triangle can be found using the following equation:
//   Area of a triangle = length of base * length of height / 2
// - Create and return a string that concatenates this string, "The total area of the triangle is",
//   with the total area found by performing the calculation above.
// - Example: If the value of the base parameter is 5 and the value of the height
//   parameter is 10, the total area is 25, and the string to be returned 
//   is "The total area of the triangle is 25"
// 
// Write your code here 👇
function areaOfTriangle(base, height) {
  return (base * height) / 2;
}

// Testing the function with base = 5 and height = 10
const base = 5;
const height = 10;
const area = areaOfTriangle(base, height);
console.log(area);
  // Your code here
