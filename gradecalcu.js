function getGrade(marks) {
    if (marks >= 90) return "A+";
    else if (marks >= 80) return "A";
    else if (marks >= 70) return "B";
    else if (marks >= 60) return "C";
    else if (marks >= 50) return "D";
    else return "F";
}

function calculateGrade() {
    let input = document.getElementById("marks").value;
    let marks = Number(input);
    let result;

    if (input === "" || marks < 0 || marks > 100) {
        result = "Invalid Marks";
    } else {
        result = "Grade: " + getGrade(marks);
    }

    document.getElementById("result").textContent = result;
    console.log(result);
}
