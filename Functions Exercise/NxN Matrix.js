function solve(num) {
    let matrix = [];
    for (let index = 0; index < num; index++) {
        matrix[index] = [];
        for (let cols = 0; cols < num; cols++) {
            matrix[index][cols] = num;
        }
        console.log(matrix[index].join(' '));
    }

}

solve(3);