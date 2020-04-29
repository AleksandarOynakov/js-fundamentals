function solve(search, text) {
    let searchWords = search.split(', ');
    let words = text.split(' ');
    for (let word of words) {
        for (let searchWord of searchWords) {
            if (word.length == searchWord.length && word[0] == '*') {
                words[words.indexOf(word)] = searchWord;
            }
        }
    }
    console.log(words.join(' '));
}

solve('check, this', '***** and also ****');