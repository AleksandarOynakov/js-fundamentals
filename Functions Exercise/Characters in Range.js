function solve(a, b) {
    let result = '';
    if (a.charCodeAt() > b.charCodeAt()) {
        let temp = b;
        b = a;
        a = temp;
    }
    for (let index = a.charCodeAt() + 1; index < b.charCodeAt(); index++) {
        result += `${String.fromCharCode(index)} `
    }
    console.log(result);
}

solve('C', '#');