function solve(input) {
    let output = [];
    for (const line of input) {
        if (line !== 'end') {
            let [char, positions] = line.split(':');
            let indexes = positions.split('/').map(Number);
            for (const index of indexes) {
                output[index] = char;
            }
        }
    }
    console.log(output.join(''))
}

solve(['a:0/2/4/6', 'b:1/3/5', 'end']);