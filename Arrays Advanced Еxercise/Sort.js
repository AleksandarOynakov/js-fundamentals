function solve(input) {
    let sorted = [];
    for (let i of input) {
        sorted.push(i);
    }
    sorted.sort((a, b) => a - b);
    j = sorted.length - 1;
    i = 0;
    let list = [];
    while (i != j + 1 && i != j) {
        list.push(sorted[j]);
        list.push(sorted[i]);
        j--;
        i++;
    }
    if(i == j){
        list.push(sorted[j]);
    }
    let result = "";
    for (let i of list) {
        result += `${i} `;
    }
    console.log(result);
}


solve([1,2,3])
solve([1,2,3,4])