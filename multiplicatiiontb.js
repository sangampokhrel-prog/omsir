let number = Number(prompt("Enter a number:"));
let table = "";

for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "\n";
}

console.log(table);
