// 1. For loop to check if numbers from 0 to 10 are odd or even
for (let i = 0; i <= 10; i++) {
    // Check if the number is even
    if (i % 2 === 0) {
        // Display message for even number
        document.getElementById('oddEven').innerHTML += `Count ${i} is even<br>`;
    } else {
        // Display message for odd number
        document.getElementById('oddEven').innerHTML += `Count ${i} is odd<br>`;
    }
}

// 2. Ask the user for a number between 5 and 20 and use a Do While loop
let myNum;
do {
    // Prompt the user for a number
    myNum = parseInt(prompt("Please enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);  // Check if the number is within the range

let counter = 1;
let myNumOutput = '';

// Use a Do While loop to count up to myNum
do {
    myNumOutput += `Count ${counter}<br>`;  // Display the current count
    counter++;  // Increment the counter
} while (counter <= myNum);  // Continue the loop until the counter exceeds myNum

// Display the output of the Do While loop
document.getElementById('myNumOutput').innerHTML = myNumOutput;

// 3. Store subjects in an array
const subjects = ['Accounting', 'Algebra', 'Programming', 'Art', 'Data Analytics'];

// Display the array values in a readable format using foreach()
let subjectsOutput = 'Subjects:<br>';
subjects.forEach(subject => {
    subjectsOutput += `${subject}<br>`;  // Add each subject to the output string
});

// Display the subjects in the HTML
document.getElementById('subjectsOutput').innerHTML = subjectsOutput;

// Display the array values separated by commas using one statement
document.getElementById('subjectsOutput').innerHTML += '<br>Subjects separated by commas:<br>';
document.getElementById('subjectsOutput').innerHTML += subjects.join(', ');  // Join the subjects with a comma and display
