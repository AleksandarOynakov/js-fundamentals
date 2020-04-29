function solve(input) {
    let text = input.shift();
    let register = {};
    for (let index = 0; index < text.length; index++) {
        if (!register.hasOwnProperty(text[index])) {
            register[text[index]] = `${index}`;
        }
        else {
            register[text[index]] += `/${index}`;
        }
    }
    for (const key in register) {
        console.log(`${key}:${register[key]}`);
    }
}

solve(['avjavamsdmcalsdm']);