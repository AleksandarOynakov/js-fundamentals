function solve(input) {
    let searchingWords = input.shift().split(" ");
    let words = new Map();
    for (const word of searchingWords) {
        words.set(word,0);
    }
    for (const word of input) {
        if(searchingWords.includes(word))
        {
            let value = 0;
            if (words.has(word)) {
                value = words.get(word)
            }
            value++;
            words.set(word, value);
        }
        
    }

    let sorted = Array.from(words.entries()).sort((a, b) => b[1] - a[1])
    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

solve([

    'this sentence', 'In','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','and','sentence','because','is','your','task'
    
    ]);