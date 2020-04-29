function solve(input) {
    let from = input.shift();
    let to = input.shift();
    let text = input.shift();
    let sum = 0;
    if(to.charCodeAt(0) < from.charCodeAt(0)){
        let tmp;
        tmp = to;
        to = from;
        from = tmp;
    }
    for (const char of text) {
        if (char > from && char < to) {
            sum += char.charCodeAt(0);
        }
    }
    console.log(sum);
}

solve([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$']);