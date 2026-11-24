let count = 0;

function countClick() {
    count++;
    let text = "Button Clicked: " + count;
    document.getElementById("counter").textContent = text;
    console.log(text);

    if (count === 10) {
        let message = "You have clicked 10 times!";
        document.getElementById("message").textContent = message;
        console.log(message);
    }
}
