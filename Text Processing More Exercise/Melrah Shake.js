function solve(input) {
    let text = input.shift();
    let word = input.shift();
    String.prototype.shaker = (text, word) => {
        while (text.length > 0 && word.length > 0) {
            let firstIndex = text.indexOf(word);
            let secIndex = text.lastIndexOf(word);
            if (firstIndex != secIndex && firstIndex >= 0 && secIndex >= 0) {
                console.log('Shaked it.');
                text = text.slice(0, firstIndex) + text.slice(firstIndex + word.length, text.length);
                secIndex = text.lastIndexOf(word);
                text = text.slice(0, secIndex) + text.slice(secIndex + word.length, text.length);
                word = word.replace(word.charAt(word.length / 2), '');

            }
            else {
                console.log('No shake.');

                console.log(text);
                break;
            }
        }
        if (text.length < 1 || word.length < 1) {
            console.log('No shake.');
            console.log(text);
        }
    };
    text.shaker(text, word)
}
solve(['ba', 'b']);