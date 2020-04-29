function solve(input) {
    let register = {};
    for (const student of input) {
        let [name, grade, score] = student.split(", ");
        let nameClean = name.split(": ").pop();
        let gradeClean = Number(grade.split(": ").pop());
        let scoreClean = Number(score.split(": ").pop());
        if (scoreClean >= 3) {
            if (!register.hasOwnProperty(gradeClean + 1)) {
                register[gradeClean + 1] = [];
            }
            register[gradeClean + 1].push({ nameClean, scoreClean });
        }
    }

    for (const key in register) {
        console.log(`${key} Grade`);
        let list = "";
        let sum = 0;
        for (const student of register[key]) {
            list += `${student.nameClean}, `;
            sum += student.scoreClean;
        }
        console.log(`List of students: ${list.slice(0, -2)}`);
        console.log(`Average annual grade from last year: ${(sum / (register[key].length)).toFixed(2)}`)
        console.log();
    }

}


solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

    "Student name: George, Grade: 8, Graduated with an average score: 2.83",

    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",

    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",

    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",

    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);