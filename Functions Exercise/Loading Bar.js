function solve(num) {
    let print = num / 10;
    let result = '';
    for (let index = 1; index < 11; index++) {
        if (index > print) {
            result += '.';
        }
        else {
            result += '%';
        }
    }

    if (result === '%%%%%%%%%%') {
        console.log(`${num}% Complete!`);
        console.log(`[${result}]`);
    }
    else {
        console.log(`${num}% [${result}]`);
        console.log(`Still loading...`);
    }
}

solve(30);