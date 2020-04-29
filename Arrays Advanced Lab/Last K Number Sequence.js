function solve(nNumbers, kElements) {
    let indexStart = 0;
    let array = [1];

    for (let i = 0; i < nNumbers - 1; i++) {

        let result = 0;

        if (array.length > kElements - 1) {
            for (let i = 0; i < kElements; i++) {
                result += array[indexStart + i];
            }
            indexStart++;
        }
        else {
            for (let i = 0; i < array.length; i++) {
                result += array[i];
            }
        }
        array.push(result);
    }
    let finalResult = "";
    array.forEach(element => {
        finalResult += `${element} `;
    });
    console.log(finalResult);
}

solve(8, 2)