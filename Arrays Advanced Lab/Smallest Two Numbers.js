function solve(input) {
    let minCount = 0;
    let minNum = [];
    let min;
    let prevMin;
    while (minCount != 2) {
        min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < input.length; i++) {
            if (Number(input[i]) < min && input[i] != prevMin) {
                min = input[i];
            }
        }
        minCount++;
        prevMin = min;
        minNum.push(min)
    }

    let result = "";
    minNum.forEach(element => {
        result += `${element} `;
    });

    console.log(result);
}



solve([3, 0, 10, 4, 7, 3])