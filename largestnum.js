let first = Number(prompt("Enter the first number:"));
let second = Number(prompt("Enter the second number:"));
let third = Number(prompt("Enter the third number:"));
let largest;

if (first >= second && first >= third) {
    largest = first;
} else if (second >= third) {
    largest = second;
} else {
    largest = third;
}

console.log("The largest number is " + largest);
