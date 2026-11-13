
function calcGrade(studentMarks, studentMaxMarks) {

    if (studentMaxMarks <= 0 || studentMarks < 0 || studentMarks > studentMaxMarks) {
        return "Invalid marks";
    }

    let studentPercentage = (studentMarks / studentMaxMarks) * 100;
    let studentGrade;

    if (studentPercentage >= 90) {
        studentGrade = 'A';
    }
    else if (studentPercentage >= 80) {
        studentGrade = 'B';
    }
    else if (studentPercentage >= 70) {
        studentGrade = 'C';
    }
    else if (studentPercentage >= 60) {
        studentGrade = 'D';
    }
    else {
        studentGrade = 'F';
    }

    return studentGrade;
}

// Function calling
let result = calcGrade(450, 500);

console.log("Student Grade:", result);
