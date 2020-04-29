function solve(text, word) {
    let stars = (size) => {
        let output = '';
        for (let index = 0; index < size; index++) {
            output += '*';
        }
        return output;
    };
    while (text.includes(word)) {
        text = text.replace(word, stars(word.length));
    }
    console.log(text)
}

solve('Small mik and mik small','small');