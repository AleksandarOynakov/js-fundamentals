function solve(input) {
    let register = new Map();
    for (const student of input) {
        let grades = student.split(" ");
        let name = grades.shift();
        grades = grades.map(Number);
        if (register.has(name)) {
            let currentGrades = register.get(name);
            for (let i = currentGrades.length - 1; i >= 0; i--) {
                grades.unshift(currentGrades[i]);
            }
        }
        register.set(name, grades);
    }

    let newArr = Array.from(register.entries()).sort((a, b) => {
        let sumA = 0;
        let sumB = 0;
        a[1].forEach(element => {
            sumA += element;
        });

        b[1].forEach(element => {
            sumB += element;
        });

        let avgA = sumA / a[1].length;
        let avgB = sumB / b[1].length;

        if (avgA > avgB) {
            return 1;
        }
        else if (avgA < avgB) {
            return -1;
        }
        return 0;
    })

    for (const [key, value] of newArr) {
        console.log(`${key}: ${value.join(", ")}`);
    }
}

solve(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])