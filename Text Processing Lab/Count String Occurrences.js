function solve(text, word) {
    let words = text.split(' ');
    let count = 0;
    for (const elem of words) {
        if(elem == word){
            count++;
        }
    }
    console.log(count);
}

solve('How many is are here is', 'is');