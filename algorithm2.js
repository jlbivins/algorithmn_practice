function gradingStudents(grades) {
    let roundedGrades = [];

    for (let i = 0; i < grades.length; i++){
        if (Math.ceil(grades[i] / 5) * 5 - grades[i] < 3 && grades[i] >= 38) {
            roundedGrades.push(Math.ceil(grades[i] / 5) * 5);
        }
        else {
            roundedGrades.push(grades[i]);
        }
    }
    console.log(roundedGrades[0]);
    console.log(roundedGrades[1]);
    console.log(roundedGrades[2]);
    console.log(roundedGrades[3]);
}