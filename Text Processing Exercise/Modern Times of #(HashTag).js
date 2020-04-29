function solve(text) {
    let words = text.split(' ');

    for (const word of words) {
        let check = true;
        if (word.length > 1 && word[0] == '#') {
            for (const chr of word.slice(1)) {
                if (!(chr >= 'a' && chr <= 'z') && !((chr >= 'A' && chr <= 'Z'))) {
                    check = false;
                }
            }
            if (check) {
                console.log(word.slice(1))
            }
        }
    }
}

solve('Checking #4 for #words like #this');