function solve(input) {
    let words = new Map;
    let wordsArr = input.split(" ").map(a => a.toLowerCase());
    for (const word of wordsArr) {
        let value = 0;

        if (words.has(word)) {
            value = words.get(word);
        }
        value++;
        words.set(word, value);
    }
    let unique = new Set();

    for (const [key, value] of words) {
        if (value % 2 != 0) {
            unique.add(key, value);
        }
    }
    console.log(Array.from(unique).join(" "))
}
solve('test test test');