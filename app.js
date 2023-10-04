// Q1
let newstudentNames = [];
// Q2
const studentNames = []; 
// Q7
var qual =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("Qualifications :" + "<br>" + qual[0] + "<br>" + qual[1] + "<br>" + qual[2] + "<br>" + qual[3] + "<br>" + qual[4] + "<br>" + qual[5] + "<br>" + qual[6] + "<br>" + qual[7]+ "<br>");
// Q8
var students = ["Michael","John","Tony"];
var marks = [320,230,480];
document.write("Score of" + students[0] + " is " + marks[0] + " and percentage is " + 320/500*100 + "<br>");
document.write("Score of" + students[1] + " is " + marks[1] + " and percentage is " + 230/500*100 + "<br>");
document.write("Score of" + students[2] + " is " + marks[2] + " and percentage is " + 480/500*100 + "<br>");
// Q9
const colorArray = ["Red", "Green", "Blue"]

document.write("<h3>Original Array:</h3>");
document.write(colorArray.join(", ") + "<br>");
const colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);
const colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);
colorArray.unshift("Purple", "Yellow");
colorArray.shift();
colorArray.pop();
const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
const colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);
const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
const numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colorArray.splice(indexToDelete, numToDelete);
document.write("<h3>Updated Array:</h3>");
document.write(colorArray.join(", ") + "<br>");
// //Q10
var studentsMarks = [320,230,480,120];
document.write("Scores of Students :" + studentsMarks + "<br>" + "Ordered Scores of Students :" + studentsMarks.sort)
//Q11
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
const selectedCities = [];
selectedCities.push(cities[0]);
selectedCities.push(cities[1]);
selectedCities.push(cities[2]);
console.log("Selected Cities:");
console.log(selectedCities);
//Q12
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" "); 
console.log(singleString); 
//Q13
const fifoQueue = [];
fifoQueue.push("Value 1");
fifoQueue.push("Value 2");
fifoQueue.push("Value 3");
const firstValue = fifoQueue.shift(); 
const secondValue = fifoQueue.shift(); 
console.log("First Value: " + firstValue);
console.log("Second Value: " + secondValue);
console.log("Remaining Value: " + fifoQueue[0]);
//Q14
const lifoStack = [];
lifoStack.push("Value 1");
lifoStack.push("Value 2");
lifoStack.push("Value 3");
const lastValue = lifoStack.pop(); 
const secondLastValue = lifoStack.pop();
console.log("Last Value: " + lastValue);
console.log("Second Last Value: " + secondLastValue);
console.log("Remaining Value: " + lifoStack[lifoStack.length - 1]);
