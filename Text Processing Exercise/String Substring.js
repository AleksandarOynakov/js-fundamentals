function solve(word, text) {
    let words = text.toLowerCase().split(' ');
    let check = true;
    for (const i of words) {
        if (i == word.toLowerCase()) {
            check = false;
            console.log(word);
            break;
        }
    }
    if(check){
        console.log(`${word} not found!`);
    }
}

solve('check', 'Check for check word');