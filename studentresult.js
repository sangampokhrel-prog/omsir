const students = [];

function getGrade(marks) {
    if (marks >= 90) return "A+";
    else if (marks >= 80) return "A";
    else if (marks >= 70) return "B";
    else if (marks >= 60) return "C";
    else if (marks >= 50) return "D";
    else return "F";
}

function showMessage(text) {
    document.getElementById("message").textContent = text;
    console.log(text);
}

function addStudent() {
    const name = document.getElementById("studentName").value.trim();
    const marks = [
        document.getElementById("math").value,
        document.getElementById("science").value,
        document.getElementById("computer").value
    ];

    if (name === "") {
        showMessage("Please enter student name");
        return;
    }

    if (marks.includes("")) {
        showMessage("Please enter all subject marks");
        return;
    }

    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        let mark = Number(marks[i]);
        if (mark < 0 || mark > 100) {
            showMessage("Marks must be between 0 and 100");
            return;
        }
        total += mark;
    }

    const percentage = (total / 300) * 100;
    const grade = getGrade(percentage);
    const percentText = percentage.toFixed(2) + "%";
    students.push([name, total, percentText, grade]);
    showMessage("Result calculated successfully. Total: " + total +
        "/300. Percentage: " + percentText + ". Grade: " + grade);
}

function generateList() {
    const table = document.getElementById("studentList");
    table.innerHTML = "";

    for (const student of students) {
        const row = table.insertRow();
        for (const value of student) {
            row.insertCell().textContent = value;
        }
        console.log(student.join(" | "));
    }
}
