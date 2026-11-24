function generateNumbers() {
    let output = "";

    for (let i = 1; i <= 20; i++) {
        let color = "red";
        if (i % 2 === 0) {
            color = "blue";
        }
        output += '<span style="color: ' + color + '">' + i + '</span> ';
        console.log(i);
    }

    document.getElementById("numbers").innerHTML = output;
}
