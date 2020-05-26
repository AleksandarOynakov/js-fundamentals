function sum(first, sec) {
    if (first > sec) {
        let temp = first;
        first = sec;
        sec = temp;
    }
    let sum = 0;
    let result = '';
    for (let index = first; index <= sec; index++) {
        result += `${index} `;
        sum += index;
    }
    console.log(result, '\n', `Sum: ${sum}`);
}

