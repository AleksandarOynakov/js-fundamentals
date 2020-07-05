function solve(input) {
    let arr = input.shift().split(' ').map(el => Number(el));
    let end = false;
    for (const command of input) {
        if (!end) {
            if (command.startsWith('swap')) {
                let [_, first, sec] = command.split(' ');
                first = Number(first);
                sec = Number(sec);
                if (first >= 0 && first < arr.length && sec >= 0 && sec < arr.length && sec !== first) {
                    let firstEl = arr[first];
                    arr[first] = arr[sec];
                    arr[sec] = firstEl;
                }
            } else if (command.startsWith('multiply')) {
                let [_, first, sec] = command.split(' ');
                first = Number(first);
                sec = Number(sec);
                if (first >= 0 && first < arr.length && sec >= 0 && sec < arr.length && sec !== first) {
                    arr[first] = arr[first] * arr[sec];
                }
            } else if (command === 'decrease') {
                arr = arr.map(el => el - 1);
            } else if (command === 'end') {
                end = true;
            }
        }
    }
    console.log(arr.join(', '));
}

