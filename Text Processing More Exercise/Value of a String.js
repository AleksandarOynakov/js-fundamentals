function solve(input) {
    let text = input.shift();
    let format = input.shift();
    let sum = 0;
    if (format === 'LOWERCASE') {
        for (const char of text) {
            if(char >= 'a' && char <= 'z'){
                sum += Number(char.charCodeAt(0));
            }
        }
    }
    else if(format ==='UPPERCASE'){
        for (const char of text) {
            if(char >= 'A' && char <= 'Z'){
                sum += Number(char.charCodeAt(0));
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);