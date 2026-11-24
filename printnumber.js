let allNumbers = "";
let divisibleByFive = "";

for (let i = 1; i <= 50; i++) {
    allNumbers += i + " ";

    if (i % 5 === 0) {
        divisibleByFive += i + " ";
    }
}

let result = "Numbers from 1 to 50:\n" + allNumbers
           + "\n\nNumbers divisible by 5:\n" + divisibleByFive;

console.log(result);

